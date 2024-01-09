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
   * @returns ESResponseModel_BFENumberPropertyResponse_ Successful Response
   * @throws ApiError
   */
  public getProperties({
    bfeNumber,
    sfeNumber,
    esrNumber,
    municipalityCode,
    propertyNumber,
    landLotCode,
    cadastreNumber,
    address,
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
    bfeNumber?: number;
    sfeNumber?: number;
    esrNumber?: number;
    municipalityCode?: number;
    propertyNumber?: number;
    landLotCode?: number;
    cadastreNumber?: string;
    address?: string;
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
  }): CancelablePromise<ESResponseModel_BFENumberPropertyResponse_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties',
      query: {
        bfe_number: bfeNumber,
        sfe_number: sfeNumber,
        esr_number: esrNumber,
        municipality_code: municipalityCode,
        property_number: propertyNumber,
        land_lot_code: landLotCode,
        cadastre_number: cadastreNumber,
        address: address,
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
   * Get Properties Advanced
   * @returns ESResponseModel_BFENumberPropertyResponse_ Successful Response
   * @throws ApiError
   */
  public getPropertiesAdvanced({
    size = 10,
    offset,
    requestBody,
  }: {
    size?: number;
    offset?: number;
    requestBody?: QueryWithTemplate;
  }): CancelablePromise<ESResponseModel_BFENumberPropertyResponse_> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v2/properties',
      query: {
        size: size,
        offset: offset,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Property By Bfe Number
   * @returns BFENumberPropertyResponse Successful Response
   * @throws ApiError
   */
  public getPropertyByBfeNumber({
    bfeNumber,
    includes,
    excludes,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<BFENumberPropertyResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}',
      path: {
        bfe_number: bfeNumber,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Property Details
   * @returns BBRResponse Successful Response
   * @throws ApiError
   */
  public getPropertyDetailsBbr({
    bfeNumber,
    includes,
    excludes,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<BBRResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}/bbr',
      path: {
        bfe_number: bfeNumber,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Property Details
   * @returns EBRPropertyLocationResponse Successful Response
   * @throws ApiError
   */
  public getPropertyDetailsEbr({
    bfeNumber,
    includes,
    excludes,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<EBRPropertyLocationResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}/ebr',
      path: {
        bfe_number: bfeNumber,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Property Details
   * @returns EJFOwnershipResponse Successful Response
   * @throws ApiError
   */
  public getPropertyDetailsOwners({
    bfeNumber,
    includes,
    excludes,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<Array<EJFOwnershipResponse>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}/owners',
      path: {
        bfe_number: bfeNumber,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Property Details
   * @returns BFENumberOverview Successful Response
   * @throws ApiError
   */
  public getPropertyDetailsOverview({
    bfeNumber,
    includes,
    excludes,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<BFENumberOverview> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}/overview',
      path: {
        bfe_number: bfeNumber,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Property Details
   * @returns SKATTaxResponse Successful Response
   * @throws ApiError
   */
  public getPropertyDetailsTax({
    bfeNumber,
    includes,
    excludes,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<SKATTaxResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}/tax',
      path: {
        bfe_number: bfeNumber,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Property Trades
   * @returns EJFTradeResponse Successful Response
   * @throws ApiError
   */
  public getPropertyTrades({
    bfeNumber,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
  }): CancelablePromise<Array<EJFTradeResponse>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}/trades',
      path: {
        bfe_number: bfeNumber,
      },
    });
  }
  /**
   * Get Property Trades
   * @returns EJFTradeResponse Successful Response
   * @throws ApiError
   */
  public getPropertyTradesLatest({
    bfeNumber,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
  }): CancelablePromise<EJFTradeResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}/trades/latest',
      path: {
        bfe_number: bfeNumber,
      },
    });
  }
  /**
   * Get Property Valuations
   * @returns VURValuationResponse Successful Response
   * @throws ApiError
   */
  public getPropertyValuations({
    bfeNumber,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
  }): CancelablePromise<Array<VURValuationResponse>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}/valuations',
      path: {
        bfe_number: bfeNumber,
      },
    });
  }
  /**
   * Get Property Valuation Latest
   * @returns VURValuationResponse Successful Response
   * @throws ApiError
   */
  public getPropertyValuationLatest({
    bfeNumber,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
  }): CancelablePromise<VURValuationResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}/valuations/latest',
      path: {
        bfe_number: bfeNumber,
      },
    });
  }
  /**
   * Get Property Valuation New
   * @returns VURValuationNewResponse Successful Response
   * @throws ApiError
   */
  public getPropertyValuationNew({
    bfeNumber,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
  }): CancelablePromise<Array<VURValuationNewResponse>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}/valuations/new',
      path: {
        bfe_number: bfeNumber,
      },
    });
  }
  /**
   * Get Property Indicators
   * @returns IndicatorResponse Successful Response
   * @throws ApiError
   */
  public getPropertyIndicators({
    bfeNumber,
  }: {
    /**
     * BFE-number of a property
     */
    bfeNumber: number;
  }): CancelablePromise<Array<IndicatorResponse>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/properties/{bfe_number}/indicators',
      path: {
        bfe_number: bfeNumber,
      },
    });
  }
}
