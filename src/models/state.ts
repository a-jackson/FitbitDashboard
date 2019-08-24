import { Activity } from "./activity";

export interface State {
  activities: Activity[];
  startDate: Date;
}

export const initialState: State = {
  activities: [],
  startDate: new Date(new Date().getTime() - (30*86400*1000)),
};
