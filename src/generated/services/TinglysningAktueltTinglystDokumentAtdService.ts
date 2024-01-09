/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ATDModel } from '../models/ATDModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TinglysningAktueltTinglystDokumentAtdService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Atd By Alias Id
   * @returns ATDModel Successful Response
   * @throws ApiError
   */
  public getAtdByAliasId({
    aliasId,
  }: {
    /**
     * DokumentAliasIdentifikator
     */
    aliasId: string;
  }): CancelablePromise<ATDModel> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/atd/aliasid/{alias_id}',
      path: {
        alias_id: aliasId,
      },
    });
  }
  /**
   * Get Atd By Uuid
   * @returns ATDModel Successful Response
   * @throws ApiError
   */
  public getAtdByUuid({ uuid }: { uuid: string }): CancelablePromise<ATDModel> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/atd/uuid/{uuid}',
      path: {
        uuid: uuid,
      },
    });
  }
}
