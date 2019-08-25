import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faHome, faRunning, faEllipsisV, faTachometerAlt, faStopwatch, faWalking, faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from "aurelia-framework";

library.add(
  faSpinner, 
  faHome, 
  faRunning, 
  faEllipsisV,
  faTachometerAlt, 
  faStopwatch,
  faWalking,
  faHeartbeat,
)

export function configure(config: FrameworkConfiguration) {
  config.plugin(PLATFORM.moduleName('aurelia-fontawesome'));
}
