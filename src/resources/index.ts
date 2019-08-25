import { PLATFORM } from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./components/activity-table'),
    PLATFORM.moduleName('./elements/dashboard-card.html'),
    PLATFORM.moduleName('./value-converters/date-format'),
    PLATFORM.moduleName('./value-converters/duration'),
    PLATFORM.moduleName('./value-converters/number-format'),
  ]);
}
