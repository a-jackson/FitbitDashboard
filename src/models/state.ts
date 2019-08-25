import { Activity } from "./activity";

export interface State {
  activities: Activity[];
  activitiesLoading: Boolean;
  startDate: Date;
}

export const initialState: State = {
  activities: [],
  activitiesLoading: true,
  startDate: new Date(new Date().getTime() - (30*86400*1000)),
};
