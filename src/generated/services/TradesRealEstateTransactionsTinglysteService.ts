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
     * @param id
     * @param ejfId
     * @param bfeNumber
     * @param cvrNumber
     * @param page Page id for pagination
     * @param size
     * @param offset
     * @param sort
     * @param order
     * @param includes
     * @param excludes
     * @returns ESResponseModel_EJFTradeResponse_ Successful Response
     * @throws ApiError
     */
    public getTrades(
        id?: string,
        ejfId?: string,
        bfeNumber?: number,
        cvrNumber?: number,
        page?: string,
        size: number = 10,
        offset?: number,
        sort?: string,
        order?: resights__api__models__response__SortOrder,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<ESResponseModel_EJFTradeResponse_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/trades',
            query: {
                'id': id,
                'ejf_id': ejfId,
                'bfe_number': bfeNumber,
                'cvr_number': cvrNumber,
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
     * Get Trades Advanced
     * @param size
     * @param offset
     * @param requestBody
     * @returns ESResponseModel_EJFTradeResponse_ Successful Response
     * @throws ApiError
     */
    public getTradesAdvanced(
        size: number = 10,
        offset?: number,
        requestBody?: QueryWithTemplate,
    ): CancelablePromise<ESResponseModel_EJFTradeResponse_> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/trades',
            query: {
                'size': size,
                'offset': offset,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Trade By Id
     * @param id UUID of a trade
     * @param includes
     * @param excludes
     * @returns EJFTradeResponse Successful Response
     * @throws ApiError
     */
    public getTradeById(
        id: string,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<EJFTradeResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/trades/{id}',
            path: {
                'id': id,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Portfolio Trades
     * @param id Either UUID of an EJF-person, unit number of a CVR member, or CVR number of a company
     * @param type Type of the id
     * @param offset
     * @param limit
     * @param includeCompanyTrades
     * @param includeEjfTrades
     * @returns GenericPageResponseModel_PortfolioTradeResponse_ Successful Response
     * @throws ApiError
     */
    public getPortfolioTrades(
        id: (string | number),
        type: 'MEMBER' | 'COMPANY' | 'OTHER',
        offset?: number,
        limit: number = 50,
        includeCompanyTrades: boolean = true,
        includeEjfTrades: boolean = true,
    ): CancelablePromise<GenericPageResponseModel_PortfolioTradeResponse_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/trades/portfolio/{type}/{id}',
            path: {
                'id': id,
                'type': type,
            },
            query: {
                'offset': offset,
                'limit': limit,
                'include_company_trades': includeCompanyTrades,
                'include_ejf_trades': includeEjfTrades,
            },
        });
    }
}
