import { autoinject, inject } from "aurelia-framework";
import { Rest, Config, Endpoint } from "aurelia-api";
import { Run } from "models/run";

@inject(Endpoint.of('fitbit'))
export class ActivityService {

  constructor(private apiEndpoint: Rest) { }

  public async getRuns() {
    let now = new Date();
    now.setHours(now.getHours() + 1, 0, 0);
    let runs: Run[] = [];
    let request = {
      beforeDate: now.toISOString().slice(0, -1),
      sort: 'desc',
      limit: 20,
      offset: 0
    };


    let response = await this.apiEndpoint.find('1/user/-/activities/list.json', request);

    while (response) {
      let activities = response.activities;
      for (let activity of activities) {
        if (activity.activityName === 'Run') {
          runs.push({
            averageHeartRate: activity.averageHeartRate,
            distance: activity.distance,
            pace: activity.pace,
            duration: activity.activeDuration,
            startTime: new Date(activity.startTime),
          });
        }
      }

      if (response.pagination.next) {
        response = await this.apiEndpoint.find(response.pagination.next);
      } else {
        response = null
      }
    }

    return runs;
  }
}
