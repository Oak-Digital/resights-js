/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_convert_gis_file_to_geojson_api_v2_gis_convert_post } from '../models/Body_convert_gis_file_to_geojson_api_v2_gis_convert_post';
import type { CoordinateReferenceSystem } from '../models/CoordinateReferenceSystem';
import type { GeoJSONFeatureCollection_BuildingMapGeoJSON_ } from '../models/GeoJSONFeatureCollection_BuildingMapGeoJSON_';
import type { GeoJSONLayerResponse } from '../models/GeoJSONLayerResponse';
import type { GisExportLayers } from '../models/GisExportLayers';
import type { GisFormat } from '../models/GisFormat';
import type { GisLayers } from '../models/GisLayers';
import type { ProxyPathEnum } from '../models/ProxyPathEnum';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GisGeospatialInformationSystemsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Geojson Layer
     * @param layer
     * @param wkt
     * @param polygon
     * @param point
     * @param x
     * @param y
     * @param limit
     * @param offset
     * @param crs
     * @param addressId
     * @param accessAddressId
     * @param landId
     * @param bfeNumber
     * @returns GeoJSONLayerResponse Successful Response
     * @throws ApiError
     */
    public getGeojsonLayer(
        layer: GisLayers,
        wkt?: string,
        polygon?: string,
        point?: string,
        x?: number,
        y?: number,
        limit: number = 10,
        offset?: number,
        crs?: CoordinateReferenceSystem,
        addressId?: string,
        accessAddressId?: string,
        landId?: number,
        bfeNumber?: number,
    ): CancelablePromise<GeoJSONLayerResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/gis/geojson',
            query: {
                'layer': layer,
                'wkt': wkt,
                'polygon': polygon,
                'point': point,
                'x': x,
                'y': y,
                'limit': limit,
                'offset': offset,
                'crs': crs,
                'address_id': addressId,
                'access_address_id': accessAddressId,
                'land_id': landId,
                'bfe_number': bfeNumber,
            },
        });
    }
    /**
     * Get Vector Layer
     * @param layer
     * @param z
     * @param x
     * @param y
     * @returns any Successful Response
     * @throws ApiError
     */
    public getVectorLayer(
        layer: GisLayers,
        z: number,
        x: number,
        y: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/gis/mvt/{layer}/{z}/{x}/{y}.pbf',
            path: {
                'layer': layer,
                'z': z,
                'x': x,
                'y': y,
            },
        });
    }
    /**
     * Geoservice Proxy
     * @param path
     * @param source
     * @returns any Successful Response
     * @throws ApiError
     */
    public geoserviceProxy(
        path: string,
        source?: ProxyPathEnum,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/gis/proxy',
            query: {
                'path': path,
                'source': source,
            },
        });
    }
    /**
     * Get Geodanmark Buildings
     * @param id
     * @param bbrId
     * @param bfeNumber
     * @param size
     * @returns GeoJSONFeatureCollection_BuildingMapGeoJSON_ Successful Response
     * @throws ApiError
     */
    public getGeodanmarkBuildings(
        id?: number,
        bbrId?: number,
        bfeNumber?: number,
        size: number = 25,
    ): CancelablePromise<GeoJSONFeatureCollection_BuildingMapGeoJSON_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/gis/geodanmark/buildings',
            query: {
                'id': id,
                'bbr_id': bbrId,
                'bfe_number': bfeNumber,
                'size': size,
            },
        });
    }
    /**
     * Convert Gis File To Geojson
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public convertGisFileToGeojson(
        formData: Body_convert_gis_file_to_geojson_api_v2_gis_convert_post,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/gis/convert',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Export Layers
     * @param xmin
     * @param ymin
     * @param xmax
     * @param ymax
     * @param requestBody
     * @param extension
     * @param polylines
     * @param crs
     * @param dimensions
     * @returns any Successful Response
     * @throws ApiError
     */
    public exportLayers(
        xmin: number,
        ymin: number,
        xmax: number,
        ymax: number,
        requestBody: Array<GisExportLayers>,
        extension?: GisFormat,
        polylines: boolean = true,
        crs?: CoordinateReferenceSystem,
        dimensions: number = 2,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/gis/export/{xmin}/{ymin}/{xmax}/{ymax}',
            path: {
                'xmin': xmin,
                'ymin': ymin,
                'xmax': xmax,
                'ymax': ymax,
            },
            query: {
                'extension': extension,
                'polylines': polylines,
                'crs': crs,
                'dimensions': dimensions,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
