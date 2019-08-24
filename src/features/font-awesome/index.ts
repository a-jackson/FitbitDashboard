import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from "aurelia-framework";

library.add(fas)

export function configure(config: FrameworkConfiguration) {
  config.plugin(PLATFORM.moduleName('aurelia-fontawesome'));
}
