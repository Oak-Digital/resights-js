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
     * @param id
     * @param sfeNumber
     * @param landLotCode
     * @param cadastreNumber
     * @param x Longitude. Example: 12.5494
     * @param y Latitute. Example: 55.6722
     * @param page Page id for pagination
     * @param size
     * @param offset
     * @param sort
     * @param order
     * @param includes
     * @param excludes
     * @returns GeoJSONFeatureCollection_CadastreMapGeoJSON_ Successful Response
     * @throws ApiError
     */
    public getCadastres(
        id?: number,
        sfeNumber?: number,
        landLotCode?: number,
        cadastreNumber?: string,
        x?: number,
        y?: number,
        page?: string,
        size: number = 10,
        offset?: number,
        sort?: string,
        order?: resights__api__models__response__SortOrder,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<GeoJSONFeatureCollection_CadastreMapGeoJSON_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cadastres',
            query: {
                'id': id,
                'sfe_number': sfeNumber,
                'land_lot_code': landLotCode,
                'cadastre_number': cadastreNumber,
                'x': x,
                'y': y,
                'page': page,
                'size': size,
                'offset': offset,
                'sort': sort,
                'order': order,
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Cadastres Advanced
     * @param size
     * @param offset
     * @param requestBody
     * @returns GeoJSONFeatureCollection_CadastreMapGeoJSON_ Successful Response
     * @throws ApiError
     */
    public getCadastresAdvanced(
        size: number = 10,
        offset?: number,
        requestBody?: QueryWithTemplate,
    ): CancelablePromise<GeoJSONFeatureCollection_CadastreMapGeoJSON_> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/cadastres',
            query: {
                'size': size,
                'offset': offset,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Cadastre By Id
     * @param id Jordstykke ID
     * @param includes
     * @param excludes
     * @returns CadastreMapGeoJSON Successful Response
     * @throws ApiError
     */
    public getCadastreById(
        id: number,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<CadastreMapGeoJSON> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cadastres/{id}',
            path: {
                'id': id,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
}
