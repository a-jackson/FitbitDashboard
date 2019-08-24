import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from "aurelia-framework";
import AuthConfig from './auth-config';
import { BaseConfig } from 'aurelia-authentication';

export function configure(config: FrameworkConfiguration) {
  config.plugin(PLATFORM.moduleName('aurelia-authentication'), (baseConfig: BaseConfig) => {
    baseConfig.configure(AuthConfig);
  });
  config.globalResources(PLATFORM.moduleName('aurelia-authentication/authFilterValueConverter'));
}
