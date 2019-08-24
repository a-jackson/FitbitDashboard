//import 'bulma';
import { Aurelia } from 'aurelia-framework';
import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import { Config } from 'aurelia-api';
import { initialState } from './models/state';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-api'), (config: Config) => {
    config.registerEndpoint('fitbit', 'https://api.fitbit.com/');
  });

  aurelia.use.plugin(PLATFORM.moduleName('features/auth/index'));
  aurelia.use.plugin(PLATFORM.moduleName('features/font-awesome/index'));

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-store'), { initialState });

  //Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
