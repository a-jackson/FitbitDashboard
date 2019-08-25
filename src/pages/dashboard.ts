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
  public walks: Activity[] = [];
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

  @computedFrom('runs')
  public get distanceRun(): DashboardItem {
    return {
      title: 'Distance Run',
      unit: 'km',
      value:  this.runsInPeriod.reduce((total, run) => total + (run.distance ? run.distance : 0), 0),
      icon: 'running',
      style: 'primary',
      dp: 2,
      type: 'number',
    };
  }

  @computedFrom('runs')
  public get runCount(): DashboardItem {
    return {
      title: 'Number of Runs',
      value: this.runsInPeriod.length,
      icon: 'ellipsis-v',
      style: 'info',
      dp: 0,
      type: 'number',
    };
  }

  @computedFrom('runs')
  public get averageDistanceRun(): DashboardItem {
    const size = this.runsInPeriod.filter(x => x.distance).length;
    return {
      title: 'Avg. Run',
      unit: 'km',
      value: this.runsInPeriod.reduce((total, x) => total + ((x.distance ? x.distance : 0) / size), 0),
      icon: 'tachometer-alt',
      style: 'success',
      dp: 2,
      type: 'number',
    };
  }

  @computedFrom('runs')
  public get averageRunPace(): DashboardItem {
    const size = this.runsInPeriod.filter(x => x.pace).length;
    return {
      title: 'Avg. Run Pace',
      unit: 'min',
      value: this.runsInPeriod.reduce((total, x) => total + ((x.pace ? x.pace : 0) / size), 0),
      icon: 'stopwatch',
      style: 'warning',
      type: 'duration'
    };
  }

  @computedFrom('walks')
  public get averageRunHR(): DashboardItem {
    const size = this.runsInPeriod.filter(x => x.averageHeartRate).length;
    return {
      title: 'Avg. Run HR',
      unit: 'bpm',
      value: this.runsInPeriod.reduce((total, x) => total + ((x.averageHeartRate ? x.averageHeartRate : 0) / size), 0),
      icon: 'heartbeat',
      style: 'danger',
      type: 'number',
      dp: 0,
    };
  }

  @computedFrom('walks')
  public get walkCount(): DashboardItem {
    return {
      title: 'Number of Walks',
      value: this.walksInPeriod.length,
      icon: 'ellipsis-v',
      style: 'danger',
      dp: 0,
      type: 'number',
    };
  }

  @computedFrom('walks')
  public get distanceWalk(): DashboardItem {
    return {
      title: 'Distance Walked',
      unit: 'km',
      value: this.walksInPeriod.reduce((total, walk) => total + (walk.distance ? walk.distance : 0), 0),
      icon: 'walking',
      style: 'warning',
      dp: 2,
      type: 'number',
    };
  }

  @computedFrom('walks')
  public get averageDistanceWalk(): DashboardItem {
    const size = this.walksInPeriod.filter(x => x.distance).length;
    return {
      title: 'Avg. Walk',
      unit: 'km',
      value: this.walksInPeriod.reduce((total, x) => total + ((x.distance ? x.distance : 0) / size), 0),
      icon: 'tachometer-alt',
      style: 'link',
      dp: 2,
      type: 'number',
    };
  }

  @computedFrom('walks')
  public get averageWalkPace(): DashboardItem {
    const size = this.walksInPeriod.filter(x => x.pace).length;
    return {
      title: 'Avg. Walked Pace',
      unit: 'min',
      value: this.walksInPeriod.reduce((total, x) => total + ((x.pace ? x.pace : 0) / size), 0),
      icon: 'stopwatch',
      style: 'primary',
      type: 'duration'
    };
  }

  @computedFrom('walks')
  public get averageWalkHR(): DashboardItem {
    const size = this.walksInPeriod.filter(x => x.averageHeartRate).length;
    return {
      title: 'Avg. Walking HR',
      unit: 'bpm',
      value: this.walksInPeriod.reduce((total, x) => total + ((x.averageHeartRate ? x.averageHeartRate : 0) / size), 0),
      icon: 'heartbeat',
      style: 'info',
      type: 'number',
      dp: 0,
    };
  }

  public stateChanged(newState: State) {
    this.runs = newState.activities.filter(x => x.activityName == 'Run');
    this.walks = newState.activities.filter(x => x.activityName === 'Walk')
    this.startDate = new Date(newState.startDate);
  }

  public setStartDate(interval: number) {
    this.store.dispatch('setStartDate', interval);
  }

  private get runsInPeriod() {
    return this.runs.filter(x => x.startTime.getTime() > this.startDate.getTime())
  }

  private get walksInPeriod() {
    return this.walks.filter(x => x.startTime.getTime() > this.startDate.getTime());
  }

  private setStartDateAction(state: State, interval: number) {
    return Object.assign({}, state, { startDate: new Date(new Date().getTime() - interval) })
  }
}
