export type bulmaColor = 'primary' | 'info' | 'link' | 'success' | 'warning' | 'danger';

export interface DashboardItem {
  title: string,
  unit?: string,
  value: string | Number,
  icon: string,
  style: bulmaColor,
  type: 'number' | 'duration'
  dp?: number,
}
