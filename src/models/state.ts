import { Activity } from "./activity";

export interface State {
  activities: Activity[];
}

export const initialState: State = {
  activities: [],
};
