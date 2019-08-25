import { Activity } from 'models/activity';
import { autoinject, bindable } from 'aurelia-framework';
import { State } from 'models/state';
import { connectTo } from 'aurelia-store';

@autoinject()
@connectTo()
export class ActivityTable {
  @bindable()
  public type: string;
  public activities: Activity[] = [];
  public state: State;
  public loading: Boolean = true;

  public stateChanged(newState: State) {
    this.activities = newState.activities
      .filter(x => x.activityName === this.type);
    this.loading = false;
  }
}
