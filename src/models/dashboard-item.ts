export type bulmaColor = 'primary' | 'info' | 'link' | 'success' | 'warning' | 'danger';

export interface DashboardItem {
  title: string,
  subtitle?: string,
  value: string | Number,
  icon: string,
  style: bulmaColor,
  type: 'number' | 'duration'
  dp?: number,
}
