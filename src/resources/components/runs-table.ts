import './runs-table.css';
import { autoinject } from 'aurelia-framework';
import { ActivityService } from 'services/activity-service';
import { Run } from 'models/run';
import { State } from 'models/state';
import { connectTo } from 'aurelia-store';

@autoinject()
@connectTo()
export class RunsTable {
  public runs: Run[] = [];
  public state: State;

  public get loading() {
    return this.runs.length === 0;
  }

  public stateChanged(newState: State) {
    this.runs = newState.activities
      .filter(x => x.activityName === 'Run')
      .map<Run>(x => {
        return {
          duration: x.activeDuration,
          pace: x.pace,
          startTime: x.startTime,
          distance: x.distance,
          averageHeartRate: x.averageHeartRate,
        };
      });
  }
}
