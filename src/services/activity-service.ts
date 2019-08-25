import { PLATFORM } from 'aurelia-pal';
import { autoinject, inject } from "aurelia-framework";
import { Rest, Config, Endpoint } from "aurelia-api";
import { Run } from "models/run";
import { ActivityResponse, Activity } from "models/activity";
import { Store } from 'aurelia-store';
import { State } from 'models/state';

const activityAction = 'ActivityAction';

@inject(Endpoint.of('fitbit'), Store)
export class ActivityService {

  constructor(
    private apiEndpoint: Rest,
    private store: Store<State>
  ) {
    this.store.registerAction(activityAction, (state: State) => this.updateActivitiesAction(state));
  }

  public initialise() {
    this.store.dispatch(activityAction);
  }

  private async updateActivitiesAction(state: State) {
    let newActivities: Activity[];
    if (!state.activities.length) {
      newActivities = await this.getNewActivities(new Date());
    } else {
      const endDate = state.activities[0].startTime;
      newActivities = await this.getNewActivities(undefined, endDate);
    }

    const newState = Object.assign({}, state);
    newState.activities = [...newActivities, ...newState.activities];
    newState.activitiesLoading = false;
    return newState;
  }

  private async getNewActivities(beforeDate?: Date | string, afterDate?: Date | string) {
    if (beforeDate && afterDate) {
      throw new Error('Cannot use both before date and after date')
    }

    let request = {
      beforeDate: this.processDate(beforeDate),
      afterDate: this.processDate(afterDate),
      sort: 'desc',
      limit: 20,
      offset: 0
    };

    let response = await this.apiEndpoint.find('1/user/-/activities/list.json', request) as ActivityResponse;
    let activities: Activity[] = [];
    while (response) {
      for (let activity of response.activities) {
        activity.startTime = new Date(activity.startTime);
        if (!afterDate || activity.startTime.getTime() !== new Date(afterDate).getTime()) {
          activities.push(activity);
        }
      }

      if (response.pagination.next) {
        response = await this.apiEndpoint.find(response.pagination.next);
      } else {
        response = null
      }
    }

    return activities;
  }

  private processDate(date?: Date | string): string | undefined {
    if (!date) {
      return;
    }

    if (typeof date === 'string') {
      date = new Date(date);
    }

    return date.toISOString().slice(0, -1);;
  }
}
