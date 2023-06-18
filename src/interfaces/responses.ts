// TODO:
// update all collection responses according to this types
// and add errors to response type
// all details here:
// https://sirenltd.stoplight.io/docs/homebuddy/03jn4ex1irkxg-common-rest-api-conventions

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
