/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TinglysningPTegningService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Paategninger By Alias Id
   * @returns any Successful Response
   * @throws ApiError
   */
  public getPaategningerByAliasId({
    aliasId,
    cancelled = false,
  }: {
    /**
     * DokumentAliasIdentifikator
     */
    aliasId: string;
    cancelled?: boolean;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/paategning/aliasid/{alias_id}',
      path: {
        alias_id: aliasId,
      },
      query: {
        cancelled: cancelled,
      },
    });
  }
  /**
   * Get Paategninger By Uuid
   * @returns any Successful Response
   * @throws ApiError
   */
  public getPaategningerByUuid({
    uuid,
    cancelled = false,
  }: {
    uuid: string;
    cancelled?: boolean;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/paategning/uuid/{uuid}',
      path: {
        uuid: uuid,
      },
      query: {
        cancelled: cancelled,
      },
    });
  }
}
