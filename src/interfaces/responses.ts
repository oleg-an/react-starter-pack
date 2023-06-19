export interface CollectionSuccessApiResponse<T> {
  data: T[];
  meta: MetaModel;
}

export interface ResourceSuccessApiResponse<T> {
  data: T;
}

export type EmptySuccessApiResponse = never;

export interface MetaModel<TSearch = never, TFilters = never> {
  page: number;
  limit: number;
  total: number;
  total_without_filters: number;
  search: TSearch;
  filters: TFilters;
}
