import './dashboard.scss';
import { Activity } from 'models/activity';
import { DashboardItem } from './../models/dashboard-item';
import { autoinject, computedFrom } from 'aurelia-framework';
import { State } from 'models/state';
import { connectTo, Store } from 'aurelia-store';

type interval = {
  interval: number,
  description: string,
};

@connectTo()
export class Dashboard {
  public state: State;
  public runs: Activity[] = [];
  public startDate: Date = new Date();

  public intervals = [
    { interval: 365 * 86400 * 1000, description: 'Last 1 year' },
    { interval: 180 * 86400 * 1000, description: 'Last 6 months' },
    { interval: 30 * 86400 * 1000, description: 'Last 1 month' },
    { interval: 14 * 86400 * 1000, description: 'Last 2 weeks' },
    { interval: 7 * 86400 * 1000, description: 'Last 1 week' },
    { interval: 1 * 86400 * 1000, description: 'Last 1 day' },
  ] as interval[]

  constructor(
    private store: Store<State>
  ) {
    this.store.registerAction('setStartDate', (state: State, interval: number) => this.setStartDateAction(state, interval));
  }

  // @computedFrom('runsThisMonth')
  public get distance(): DashboardItem {
    let value = this.runsInPeriod.reduce((total, run) => total + (run.distance ? run.distance : 0), 0);

    return {
      title: 'Distance Run',
      subtitle: '(km)',
      value,
      icon: 'running',
      style: 'primary',
      dp: 2,
      type: 'number',
    };
  }

  public get count(): DashboardItem {
    return {
      title: 'Number of Runs',
      value: this.runsInPeriod.length,
      icon: 'ellipsis-v',
      style: 'info',
      dp: 0,
      type: 'number',
    };
  }

  public get averageDistance(): DashboardItem {
    const size = this.runsInPeriod.length;
    return {
      title: 'Average Distance',
      subtitle: '(km)',
      value: this.runsInPeriod.reduce((total, x) => total + ((x.distance ? x.distance : 0) / size), 0),
      icon: 'tachometer-alt',
      style: 'success',
      dp: 2,
      type: 'number',
    };
  }

  public get averagePace(): DashboardItem {
    const size = this.runsInPeriod.length;
    return {
      title: 'Average Pace',
      subtitle: '(min)',
      value: this.runsInPeriod.reduce((total, x) => total + ((x.pace ? x.pace : 0) / size), 0),
      icon: 'tachometer-alt',
      style: 'warning',
      type: 'duration'
    };
  }

  public stateChanged(newState: State) {
    this.runs = newState.activities.filter(x => x.activityName == "Run");
    this.startDate = new Date(newState.startDate);
  }

  public setStartDate(interval: number) {
    this.store.dispatch('setStartDate', interval);
  }

  private get runsInPeriod() {
    return this.runs.filter(x => x.startTime.getTime() > this.startDate.getTime())
  }

  private setStartDateAction(state: State, interval: number) {
    return Object.assign({}, state, { startDate: new Date(new Date().getTime() - interval) })
  }
}
