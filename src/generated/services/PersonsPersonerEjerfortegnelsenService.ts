/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EJFOwnerOtherResponse } from '../models/EJFOwnerOtherResponse';
import type { EJFOwnerPersonResponse } from '../models/EJFOwnerPersonResponse';
import type { ESResponseModel_EJFOwnerOtherResponse_ } from '../models/ESResponseModel_EJFOwnerOtherResponse_';
import type { ESResponseModel_EJFOwnerPersonResponse_ } from '../models/ESResponseModel_EJFOwnerPersonResponse_';
import type { PortfolioAggs } from '../models/PortfolioAggs';
import type { QueryWithTemplate } from '../models/QueryWithTemplate';
import type { resights__api__models__response__SortOrder } from '../models/resights__api__models__response__SortOrder';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PersonsPersonerEjerfortegnelsenService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Ejf Persons
   * @returns ESResponseModel_EJFOwnerPersonResponse_ Successful Response
   * @throws ApiError
   */
  public getEjfPersons({
    id,
    unitNumber,
    name,
    x,
    y,
    distance = '100m',
    page,
    size = 10,
    offset,
    sort,
    order,
    includes,
    excludes,
  }: {
    id?: string;
    unitNumber?: number;
    name?: string;
    /**
     * Longitude. Example: 12.5494
     */
    x?: number;
    /**
     * Latitute. Example: 55.6722
     */
    y?: number;
    /**
     * Distance from x, y
     */
    distance?: string;
    /**
     * Page id for pagination
     */
    page?: string;
    size?: number;
    offset?: number;
    sort?: string;
    order?: resights__api__models__response__SortOrder;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<ESResponseModel_EJFOwnerPersonResponse_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/ejf/persons',
      query: {
        id: id,
        unit_number: unitNumber,
        name: name,
        x: x,
        y: y,
        distance: distance,
        page: page,
        size: size,
        offset: offset,
        sort: sort,
        order: order,
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Ejf Persons Advanced
   * @returns ESResponseModel_EJFOwnerPersonResponse_ Successful Response
   * @throws ApiError
   */
  public getEjfPersonsAdvanced({
    size = 10,
    offset,
    requestBody,
  }: {
    size?: number;
    offset?: number;
    requestBody?: QueryWithTemplate;
  }): CancelablePromise<ESResponseModel_EJFOwnerPersonResponse_> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v2/ejf/persons',
      query: {
        size: size,
        offset: offset,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Ejf Person By Id
   * @returns EJFOwnerPersonResponse Successful Response
   * @throws ApiError
   */
  public getEjfPersonById({
    id,
    includes,
    excludes,
  }: {
    /**
     * UUID of an EJF Person
     */
    id: string;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<EJFOwnerPersonResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/ejf/persons/{id}',
      path: {
        id: id,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Ejf Person Portfolio By Id
   * @returns PortfolioAggs Successful Response
   * @throws ApiError
   */
  public getEjfPersonPortfolioById({
    id,
  }: {
    /**
     * Either unit number of a CVR member or an EJF id
     */
    id: number | string;
  }): CancelablePromise<PortfolioAggs> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/ejf/persons/{id}/portfolio',
      path: {
        id: id,
      },
    });
  }
  /**
   * Get Ejf Others
   * @returns ESResponseModel_EJFOwnerOtherResponse_ Successful Response
   * @throws ApiError
   */
  public getEjfOthers({
    id,
    name,
    page,
    size = 10,
    offset,
    sort,
    order,
    includes,
    excludes,
  }: {
    id?: string;
    name?: string;
    /**
     * Page id for pagination
     */
    page?: string;
    size?: number;
    offset?: number;
    sort?: string;
    order?: resights__api__models__response__SortOrder;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<ESResponseModel_EJFOwnerOtherResponse_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/ejf/others',
      query: {
        id: id,
        name: name,
        page: page,
        size: size,
        offset: offset,
        sort: sort,
        order: order,
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Ejf Others Advanced
   * @returns ESResponseModel_EJFOwnerOtherResponse_ Successful Response
   * @throws ApiError
   */
  public getEjfOthersAdvanced({
    size = 10,
    offset,
    requestBody,
  }: {
    size?: number;
    offset?: number;
    requestBody?: QueryWithTemplate;
  }): CancelablePromise<ESResponseModel_EJFOwnerOtherResponse_> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v2/ejf/others',
      query: {
        size: size,
        offset: offset,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Ejf Other By Id
   * @returns EJFOwnerOtherResponse Successful Response
   * @throws ApiError
   */
  public getEjfOtherById({
    id,
    includes,
    excludes,
  }: {
    /**
     * UUID of an EJF other
     */
    id: string;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<EJFOwnerOtherResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/ejf/others/{id}',
      path: {
        id: id,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
}
