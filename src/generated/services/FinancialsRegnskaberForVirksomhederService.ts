/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnualReportSimple } from '../models/AnnualReportSimple';
import type { ESResponseModel_AnnualReportSimple_ } from '../models/ESResponseModel_AnnualReportSimple_';
import type { QueryWithTemplate } from '../models/QueryWithTemplate';
import type { resights__api__models__response__SortOrder } from '../models/resights__api__models__response__SortOrder';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FinancialsRegnskaberForVirksomhederService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Financials
     * @param id
     * @param cvrNumber
     * @param mneNumber
     * @param auditorCvrNumber
     * @param page Page id for pagination
     * @param size
     * @param offset
     * @param sort
     * @param order
     * @param includes
     * @param excludes
     * @returns ESResponseModel_AnnualReportSimple_ Successful Response
     * @throws ApiError
     */
    public getFinancials(
        id?: string,
        cvrNumber?: number,
        mneNumber?: string,
        auditorCvrNumber?: number,
        page?: string,
        size: number = 10,
        offset?: number,
        sort?: string,
        order?: resights__api__models__response__SortOrder,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<ESResponseModel_AnnualReportSimple_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/financials',
            query: {
                'id': id,
                'cvr_number': cvrNumber,
                'mne_number': mneNumber,
                'auditor_cvr_number': auditorCvrNumber,
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
     * Get Financials Advanced
     * @param size
     * @param offset
     * @param requestBody
     * @returns ESResponseModel_AnnualReportSimple_ Successful Response
     * @throws ApiError
     */
    public getFinancialsAdvanced(
        size: number = 10,
        offset?: number,
        requestBody?: QueryWithTemplate,
    ): CancelablePromise<ESResponseModel_AnnualReportSimple_> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/cvr/financials',
            query: {
                'size': size,
                'offset': offset,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Financials By Id
     * @param id UUID of a trade
     * @param includes
     * @param excludes
     * @returns AnnualReportSimple Successful Response
     * @throws ApiError
     */
    public getFinancialsById(
        id: string,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<AnnualReportSimple> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/financials/{id}',
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
