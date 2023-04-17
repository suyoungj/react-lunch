export const RESTAURANTS_LOCAL_STORAGE_KEY = 'restaurants';
export const CATEGORIES = [
  '전체',
  '한식',
  '중식',
  '일식',
  '양식',
  '아시안',
  '기타',
] as const;
export const SORT_BY = ['이름순', '거리순'] as const;
export const DEFAULT_CATEGORY = CATEGORIES[0];
export const DEFAULT_SORT_BY = SORT_BY[0];
