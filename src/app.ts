import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';
import { ActivityService } from 'services/activity-service';
import { State } from 'models/state';
import { Store, localStorageMiddleware, MiddlewarePlacement, rehydrateFromLocalStorage } from 'aurelia-store';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class App {
  public router: Router;

  constructor(
    activityService: ActivityService,
    store: Store<State>,
  ) {
    store.registerMiddleware(localStorageMiddleware, MiddlewarePlacement.After);
    store.registerAction('Rehydrate', (state: State, key: string) => {
      let newState = rehydrateFromLocalStorage(state, key) as State;
      for (let activity of newState.activities) {
        activity.startTime = new Date(activity.startTime);
      }

      return newState;
    });
    store.dispatch('Rehydrate');
    activityService.initialise();
  }

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: true,
        title: 'Welcome'
      },
    ]);

    this.router = router;
  }
}
