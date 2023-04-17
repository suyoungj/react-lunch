export interface Restaurant {
  id: string;
  category: Category;
  name: string;
  takingMinute: TakingMinute;
  description?: string;
  link?: string;
  isFavorite?: boolean;
}

export type Category = '한식' | '중식' | '일식' | '양식' | '아시안' | '기타';
export type FilterCategory = '전체' | Category;

export type SortBy = '이름순' | '거리순';

export type TakingMinute = 5 | 10 | 15 | 20;
