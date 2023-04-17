export interface Restaurant {
  id: string;
  category: string;
  name: string;
  takingMinute: TakingMinute;
  description?: string;
  link?: string;
  isFavorite?: boolean;
}
export type TakingMinute = 5 | 10 | 15 | 20;
