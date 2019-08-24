export interface ActivityLevel {
  minutes: number;
  name: string;
}

export interface HeartRateZone {
  max: number;
  min: number;
  minutes: number;
  name: string;
}

export interface ManualValuesSpecified {
  calories: boolean;
  distance: boolean;
  steps: boolean;
}

export interface Source {
  id: string;
  name: string;
  type: string;
  url: string;
}

export interface Activity {
  activeDuration: number;
  activityLevel: ActivityLevel[];
  activityName: string;
  activityTypeId: number;
  averageHeartRate: number;
  calories: number;
  caloriesLink: string;
  distance: number;
  distanceUnit: string;
  duration: number;
  heartRateLink: string;
  heartRateZones: HeartRateZone[];
  lastModified: Date;
  logId: number;
  logType: string;
  manualValuesSpecified: ManualValuesSpecified;
  source: Source;
  speed: number;
  startTime: Date;
  steps: number;
  tcxLink: string;
  pace?: number;
}

export interface Pagination {
  beforeDate: string;
  limit: number;
  next: string;
  sort: string;
}

export interface ActivityResponse {
  activities: Activity[];
  pagination: Pagination;
}
