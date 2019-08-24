import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { AuthHandler } from 'features/auth/auth-handler';
import { AuthenticateStep } from 'aurelia-authentication';

@autoinject()
export class App {
  public router: Router;

  constructor(
    private authHandler: AuthHandler,
  ) {
    this.authHandler.start();
  }

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Fitbit Dashboard';
    config.addPipelineStep('authorize', AuthenticateStep); 
    config.map([
      {
        route: ['', 'dashboard'],
        name: 'Dashboard',
        moduleId: PLATFORM.moduleName('./pages/dashboard'),
        nav: true,
        title: 'Dashboard',
        auth: true
      },
      {
        route: ['login'],
        name: 'Login',
        moduleId: PLATFORM.moduleName('./pages/login'),
        title: 'Login',
      },
    ]);

    this.router = router;
  }
}
