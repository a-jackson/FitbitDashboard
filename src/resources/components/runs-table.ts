import './runs-table.css';
import { autoinject } from 'aurelia-framework';
import { ActivityService } from 'services/activity-service';
import { Run } from 'models/run';

@autoinject()
export class RunsTable {
  public loading = true;
  public runs: Run[] = [];
  
  constructor(private activityService: ActivityService) {
  }

  async attached() {
    try {
      this.runs.push(... await this.activityService.getRuns());
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  }
}
