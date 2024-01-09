/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BilbogsattestModel } from '../models/BilbogsattestModel';
import type { SearchBilbogModel } from '../models/SearchBilbogModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TinglysningKRetJService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Search Vehicle By Id
   * @returns SearchBilbogModel Successful Response
   * @throws ApiError
   */
  public searchVehicleById({
    id,
  }: {
    /**
     * Stelnummer
     */
    id: string;
  }): CancelablePromise<Array<SearchBilbogModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/vehicle/search/id/{id}',
      path: {
        id: id,
      },
    });
  }
  /**
   * Search Vehicle By Cvr Number
   * @returns SearchBilbogModel Successful Response
   * @throws ApiError
   */
  public searchVehicleByCvrNumber({
    cvrNumber,
  }: {
    cvrNumber: number;
  }): CancelablePromise<Array<SearchBilbogModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/vehicle/search/cvr-number/{cvr_number}',
      path: {
        cvr_number: cvrNumber,
      },
    });
  }
  /**
   * Search Vehicle By Person
   * @returns SearchBilbogModel Successful Response
   * @throws ApiError
   */
  public searchVehicleByPerson({
    birthDate,
    name,
  }: {
    birthDate: string;
    name: string;
  }): CancelablePromise<Array<SearchBilbogModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/vehicle/search/person',
      query: {
        birth_date: birthDate,
        name: name,
      },
    });
  }
  /**
   * Get Bilbogsattest By Uuid
   * @returns BilbogsattestModel Successful Response
   * @throws ApiError
   */
  public getBilbogsattestByUuid({
    uuid,
  }: {
    uuid: string;
  }): CancelablePromise<BilbogsattestModel> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/bilbogsattest/{uuid}',
      path: {
        uuid: uuid,
      },
    });
  }
}
