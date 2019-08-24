import { AuthService } from 'aurelia-authentication';
import { ActivityService } from 'services/activity-service';
import { State, initialState } from 'models/state';
import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';
import { Store, localStorageMiddleware, MiddlewarePlacement, rehydrateFromLocalStorage } from 'aurelia-store';

@autoinject()
export class AuthHandler {
  constructor(
    private activityService: ActivityService,
    private authService: AuthService,
    private store: Store<State>,
    private eventAggregator: EventAggregator,
  ) {
  }

  public start() {
    this.store.registerMiddleware(localStorageMiddleware, MiddlewarePlacement.After);
    if (this.authService.authenticated) {
      this.store.registerAction('Rehydrate', (state: State, key: string) => this.rehydrateState(state, key));
      this.store.dispatch('Rehydrate');
    }

    this.store.registerAction('logout', (state: State, key: string) => initialState);
    this.eventAggregator.subscribe('authentication-change', (authenticated: Boolean) => this.authenticationChange(authenticated));
  }

  private rehydrateState(state: State, key: string) {
    let newState = rehydrateFromLocalStorage(state, key) as State;
    for (let activity of newState.activities) {
      activity.startTime = new Date(activity.startTime);
    }
    return newState;
  }

  private authenticationChange(authenticated: Boolean) {
    if (authenticated) {
      this.activityService.initialise();
    }
    else {
      this.store.dispatch('logout');
    }
  }
}
