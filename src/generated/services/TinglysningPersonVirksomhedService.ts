/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PersonbogsattestModel } from '../models/PersonbogsattestModel';
import type { SoegPersonModel } from '../models/SoegPersonModel';
import type { SoegVirksomhedModel } from '../models/SoegVirksomhedModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TinglysningPersonVirksomhedService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Search Company By Cvr Number
   * @returns SoegVirksomhedModel Successful Response
   * @throws ApiError
   */
  public searchCompanyByCvrNumber({
    cvrNumber,
  }: {
    /**
     * CVR-nummer
     */
    cvrNumber: number;
  }): CancelablePromise<Array<SoegVirksomhedModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/company/search/cvr-number/{cvr_number}',
      path: {
        cvr_number: cvrNumber,
      },
    });
  }
  /**
   * Search Person By Name
   * @returns SoegPersonModel Successful Response
   * @throws ApiError
   */
  public searchPersonByName({
    name,
    birthDate,
  }: {
    /**
     * Navn
     */
    name: string;
    /**
     * Fødselsdato
     */
    birthDate: string;
  }): CancelablePromise<Array<SoegPersonModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/person/search/name',
      query: {
        name: name,
        birth_date: birthDate,
      },
    });
  }
  /**
   * Search Person By Cpr Number
   * @returns any Successful Response
   * @throws ApiError
   */
  public searchPersonByCprNumber({
    cprNumber,
    name,
  }: {
    cprNumber: string;
    name: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/person/search/cpr-number/{cpr_number}',
      path: {
        cpr_number: cprNumber,
      },
      query: {
        name: name,
      },
    });
  }
  /**
   * Get Person Company By Uuid
   * @returns PersonbogsattestModel Successful Response
   * @throws ApiError
   */
  public getPersonCompanyByUuid({
    uuid,
  }: {
    uuid: string;
  }): CancelablePromise<PersonbogsattestModel> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/person-company/{uuid}',
      path: {
        uuid: uuid,
      },
    });
  }
}
