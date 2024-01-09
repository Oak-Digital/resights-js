/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CadastreMapGeoJSON } from '../models/CadastreMapGeoJSON';
import type { GeoJSONFeatureCollection_CadastreMapGeoJSON_ } from '../models/GeoJSONFeatureCollection_CadastreMapGeoJSON_';
import type { QueryWithTemplate } from '../models/QueryWithTemplate';
import type { resights__api__models__response__SortOrder } from '../models/resights__api__models__response__SortOrder';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CadastresMatriklerJordstykkerService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Cadastres
   * @returns GeoJSONFeatureCollection_CadastreMapGeoJSON_ Successful Response
   * @throws ApiError
   */
  public getCadastres({
    id,
    sfeNumber,
    landLotCode,
    cadastreNumber,
    x,
    y,
    page,
    size = 10,
    offset,
    sort,
    order,
    includes,
    excludes,
  }: {
    id?: number;
    sfeNumber?: number;
    landLotCode?: number;
    cadastreNumber?: string;
    /**
     * Longitude. Example: 12.5494
     */
    x?: number;
    /**
     * Latitute. Example: 55.6722
     */
    y?: number;
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
  }): CancelablePromise<GeoJSONFeatureCollection_CadastreMapGeoJSON_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cadastres',
      query: {
        id: id,
        sfe_number: sfeNumber,
        land_lot_code: landLotCode,
        cadastre_number: cadastreNumber,
        x: x,
        y: y,
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
   * Get Cadastres Advanced
   * @returns GeoJSONFeatureCollection_CadastreMapGeoJSON_ Successful Response
   * @throws ApiError
   */
  public getCadastresAdvanced({
    size = 10,
    offset,
    requestBody,
  }: {
    size?: number;
    offset?: number;
    requestBody?: QueryWithTemplate;
  }): CancelablePromise<GeoJSONFeatureCollection_CadastreMapGeoJSON_> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v2/cadastres',
      query: {
        size: size,
        offset: offset,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Cadastre By Id
   * @returns CadastreMapGeoJSON Successful Response
   * @throws ApiError
   */
  public getCadastreById({
    id,
    includes,
    excludes,
  }: {
    /**
     * Jordstykke ID
     */
    id: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<CadastreMapGeoJSON> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cadastres/{id}',
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
