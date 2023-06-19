import { useMutation } from '@tanstack/react-query';
import { AxiosResponseErrorModel } from 'interfaces/error';
import { pathToUrl } from 'utils/router';
import { MutationOptions } from '@tanstack/query-core/src/types';
import {
  EmptySuccessApiResponse,
  ResourceSuccessApiResponse,
} from 'interfaces/responses';

import { api } from './api';

export function queryFn<TResponse>(url: string) {
  return () =>
    api
      .get<ResourceSuccessApiResponse<TResponse>>(url)
      .then(({ data }) => data);
}

export const usePostMutation = buildMutation('post');
export const usePutMutation = buildMutation('put');
export const useDeleteMutation = buildMutation('delete');

function buildMutation(method: 'put' | 'post' | 'delete') {
  return <TMutateParams, TResponse = EmptySuccessApiResponse>(
    url: string,
    options?: MutationOptions<
      TResponse,
      AxiosResponseErrorModel,
      {
        payload?: TMutateParams;
        urlParams?: object;
      } | void
    >
  ) =>
    useMutation(
      (mutateParams) =>
        api[method]<TResponse>(
          pathToUrl(url, mutateParams?.urlParams),
          mutateParams?.payload
        ).then((x) => x.data),
      options
    );
}
