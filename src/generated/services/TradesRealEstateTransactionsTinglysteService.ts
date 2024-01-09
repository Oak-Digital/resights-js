/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EJFTradeResponse } from '../models/EJFTradeResponse';
import type { ESResponseModel_EJFTradeResponse_ } from '../models/ESResponseModel_EJFTradeResponse_';
import type { GenericPageResponseModel_PortfolioTradeResponse_ } from '../models/GenericPageResponseModel_PortfolioTradeResponse_';
import type { QueryWithTemplate } from '../models/QueryWithTemplate';
import type { resights__api__models__response__SortOrder } from '../models/resights__api__models__response__SortOrder';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TradesRealEstateTransactionsTinglysteService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Trades
   * @returns ESResponseModel_EJFTradeResponse_ Successful Response
   * @throws ApiError
   */
  public getTrades({
    id,
    ejfId,
    bfeNumber,
    cvrNumber,
    page,
    size = 10,
    offset,
    sort,
    order,
    includes,
    excludes,
  }: {
    id?: string;
    ejfId?: string;
    bfeNumber?: number;
    cvrNumber?: number;
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
  }): CancelablePromise<ESResponseModel_EJFTradeResponse_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/trades',
      query: {
        id: id,
        ejf_id: ejfId,
        bfe_number: bfeNumber,
        cvr_number: cvrNumber,
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
   * Get Trades Advanced
   * @returns ESResponseModel_EJFTradeResponse_ Successful Response
   * @throws ApiError
   */
  public getTradesAdvanced({
    size = 10,
    offset,
    requestBody,
  }: {
    size?: number;
    offset?: number;
    requestBody?: QueryWithTemplate;
  }): CancelablePromise<ESResponseModel_EJFTradeResponse_> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v2/trades',
      query: {
        size: size,
        offset: offset,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Trade By Id
   * @returns EJFTradeResponse Successful Response
   * @throws ApiError
   */
  public getTradeById({
    id,
    includes,
    excludes,
  }: {
    /**
     * UUID of a trade
     */
    id: string;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<EJFTradeResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/trades/{id}',
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
   * Get Portfolio Trades
   * @returns GenericPageResponseModel_PortfolioTradeResponse_ Successful Response
   * @throws ApiError
   */
  public getPortfolioTrades({
    id,
    type,
    offset,
    limit = 50,
    includeCompanyTrades = true,
    includeEjfTrades = true,
  }: {
    /**
     * Either UUID of an EJF-person, unit number of a CVR member, or CVR number of a company
     */
    id: string | number;
    /**
     * Type of the id
     */
    type: 'MEMBER' | 'COMPANY' | 'OTHER';
    offset?: number;
    limit?: number;
    includeCompanyTrades?: boolean;
    includeEjfTrades?: boolean;
  }): CancelablePromise<GenericPageResponseModel_PortfolioTradeResponse_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/trades/portfolio/{type}/{id}',
      path: {
        id: id,
        type: type,
      },
      query: {
        offset: offset,
        limit: limit,
        include_company_trades: includeCompanyTrades,
        include_ejf_trades: includeEjfTrades,
      },
    });
  }
}
