/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BBRResponse } from '../models/BBRResponse';
import type { BFENumberOverview } from '../models/BFENumberOverview';
import type { BFENumberPropertyResponse } from '../models/BFENumberPropertyResponse';
import type { EBRPropertyLocationResponse } from '../models/EBRPropertyLocationResponse';
import type { EJFOwnershipResponse } from '../models/EJFOwnershipResponse';
import type { EJFTradeResponse } from '../models/EJFTradeResponse';
import type { ESResponseModel_BFENumberPropertyResponse_ } from '../models/ESResponseModel_BFENumberPropertyResponse_';
import type { IndicatorResponse } from '../models/IndicatorResponse';
import type { QueryWithTemplate } from '../models/QueryWithTemplate';
import type { resights__api__models__response__SortOrder } from '../models/resights__api__models__response__SortOrder';
import type { SKATTaxResponse } from '../models/SKATTaxResponse';
import type { VURValuationNewResponse } from '../models/VURValuationNewResponse';
import type { VURValuationResponse } from '../models/VURValuationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BfeBestemtFastEjendomService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Properties
     * @param bfeNumber
     * @param sfeNumber
     * @param esrNumber
     * @param municipalityCode
     * @param propertyNumber
     * @param landLotCode
     * @param cadastreNumber
     * @param address
     * @param x Longitude. Example: 12.5494
     * @param y Latitute. Example: 55.6722
     * @param distance Distance from x, y
     * @param page Page id for pagination
     * @param size
     * @param offset
     * @param sort
     * @param order
     * @param includes
     * @param excludes
     * @returns ESResponseModel_BFENumberPropertyResponse_ Successful Response
     * @throws ApiError
     */
    public getProperties(
        bfeNumber?: number,
        sfeNumber?: number,
        esrNumber?: number,
        municipalityCode?: number,
        propertyNumber?: number,
        landLotCode?: number,
        cadastreNumber?: string,
        address?: string,
        x?: number,
        y?: number,
        distance: string = '100m',
        page?: string,
        size: number = 10,
        offset?: number,
        sort?: string,
        order?: resights__api__models__response__SortOrder,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<ESResponseModel_BFENumberPropertyResponse_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties',
            query: {
                'bfe_number': bfeNumber,
                'sfe_number': sfeNumber,
                'esr_number': esrNumber,
                'municipality_code': municipalityCode,
                'property_number': propertyNumber,
                'land_lot_code': landLotCode,
                'cadastre_number': cadastreNumber,
                'address': address,
                'x': x,
                'y': y,
                'distance': distance,
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
     * Get Properties Advanced
     * @param size
     * @param offset
     * @param requestBody
     * @returns ESResponseModel_BFENumberPropertyResponse_ Successful Response
     * @throws ApiError
     */
    public getPropertiesAdvanced(
        size: number = 10,
        offset?: number,
        requestBody?: QueryWithTemplate,
    ): CancelablePromise<ESResponseModel_BFENumberPropertyResponse_> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/properties',
            query: {
                'size': size,
                'offset': offset,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Property By Bfe Number
     * @param bfeNumber BFE-number of a property
     * @param includes
     * @param excludes
     * @returns BFENumberPropertyResponse Successful Response
     * @throws ApiError
     */
    public getPropertyByBfeNumber(
        bfeNumber: number,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<BFENumberPropertyResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}',
            path: {
                'bfe_number': bfeNumber,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Property Details
     * @param bfeNumber BFE-number of a property
     * @param includes
     * @param excludes
     * @returns BBRResponse Successful Response
     * @throws ApiError
     */
    public getPropertyDetailsBbr(
        bfeNumber: number,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<BBRResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}/bbr',
            path: {
                'bfe_number': bfeNumber,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Property Details
     * @param bfeNumber BFE-number of a property
     * @param includes
     * @param excludes
     * @returns EBRPropertyLocationResponse Successful Response
     * @throws ApiError
     */
    public getPropertyDetailsEbr(
        bfeNumber: number,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<EBRPropertyLocationResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}/ebr',
            path: {
                'bfe_number': bfeNumber,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Property Details
     * @param bfeNumber BFE-number of a property
     * @param includes
     * @param excludes
     * @returns EJFOwnershipResponse Successful Response
     * @throws ApiError
     */
    public getPropertyDetailsOwners(
        bfeNumber: number,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<Array<EJFOwnershipResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}/owners',
            path: {
                'bfe_number': bfeNumber,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Property Details
     * @param bfeNumber BFE-number of a property
     * @param includes
     * @param excludes
     * @returns BFENumberOverview Successful Response
     * @throws ApiError
     */
    public getPropertyDetailsOverview(
        bfeNumber: number,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<BFENumberOverview> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}/overview',
            path: {
                'bfe_number': bfeNumber,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Property Details
     * @param bfeNumber BFE-number of a property
     * @param includes
     * @param excludes
     * @returns SKATTaxResponse Successful Response
     * @throws ApiError
     */
    public getPropertyDetailsTax(
        bfeNumber: number,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<SKATTaxResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}/tax',
            path: {
                'bfe_number': bfeNumber,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Property Trades
     * @param bfeNumber BFE-number of a property
     * @returns EJFTradeResponse Successful Response
     * @throws ApiError
     */
    public getPropertyTrades(
        bfeNumber: number,
    ): CancelablePromise<Array<EJFTradeResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}/trades',
            path: {
                'bfe_number': bfeNumber,
            },
        });
    }
    /**
     * Get Property Trades
     * @param bfeNumber BFE-number of a property
     * @returns EJFTradeResponse Successful Response
     * @throws ApiError
     */
    public getPropertyTradesLatest(
        bfeNumber: number,
    ): CancelablePromise<EJFTradeResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}/trades/latest',
            path: {
                'bfe_number': bfeNumber,
            },
        });
    }
    /**
     * Get Property Valuations
     * @param bfeNumber BFE-number of a property
     * @returns VURValuationResponse Successful Response
     * @throws ApiError
     */
    public getPropertyValuations(
        bfeNumber: number,
    ): CancelablePromise<Array<VURValuationResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}/valuations',
            path: {
                'bfe_number': bfeNumber,
            },
        });
    }
    /**
     * Get Property Valuation Latest
     * @param bfeNumber BFE-number of a property
     * @returns VURValuationResponse Successful Response
     * @throws ApiError
     */
    public getPropertyValuationLatest(
        bfeNumber: number,
    ): CancelablePromise<VURValuationResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}/valuations/latest',
            path: {
                'bfe_number': bfeNumber,
            },
        });
    }
    /**
     * Get Property Valuation New
     * @param bfeNumber BFE-number of a property
     * @returns VURValuationNewResponse Successful Response
     * @throws ApiError
     */
    public getPropertyValuationNew(
        bfeNumber: number,
    ): CancelablePromise<Array<VURValuationNewResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}/valuations/new',
            path: {
                'bfe_number': bfeNumber,
            },
        });
    }
    /**
     * Get Property Indicators
     * @param bfeNumber BFE-number of a property
     * @returns IndicatorResponse Successful Response
     * @throws ApiError
     */
    public getPropertyIndicators(
        bfeNumber: number,
    ): CancelablePromise<Array<IndicatorResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/properties/{bfe_number}/indicators',
            path: {
                'bfe_number': bfeNumber,
            },
        });
    }
}
