import { autoinject, inject } from "aurelia-framework";
import { Rest, Config, Endpoint } from "aurelia-api";
import { Run } from "models/run";

@inject(Endpoint.of('fitbit'))
export class ActivityService {

  constructor(private apiEndpoint: Rest) { }

  public async getRuns() {
    let now = new Date();
    now.setHours(now.getHours() + 1, 0, 0);
    let request = {
      beforeDate: now.toISOString().slice(0, -1),
      sort: 'desc',
      limit: 20,
      offset: 0
    };

    let response = await this.apiEndpoint.find('1/user/-/activities/list.json', request);

    let activities = response.activities;
    let runs: Run[] = [];
    for (let activity of activities) {
      if (activity.activityName === 'Run') {
        runs.push({
          averageHeartRate: activity.averageHeartRate,
          distance: activity.distance,
          pace: activity.pace,
          duration: activity.duration,
          startTime: new Date(activity.startTime),
        });
      }
    }

    return runs;
  }
}
