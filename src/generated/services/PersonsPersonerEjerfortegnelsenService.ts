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
     * @param id
     * @param unitNumber
     * @param name
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
     * @returns ESResponseModel_EJFOwnerPersonResponse_ Successful Response
     * @throws ApiError
     */
    public getEjfPersons(
        id?: string,
        unitNumber?: number,
        name?: string,
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
    ): CancelablePromise<ESResponseModel_EJFOwnerPersonResponse_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/ejf/persons',
            query: {
                'id': id,
                'unit_number': unitNumber,
                'name': name,
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
     * Get Ejf Persons Advanced
     * @param size
     * @param offset
     * @param requestBody
     * @returns ESResponseModel_EJFOwnerPersonResponse_ Successful Response
     * @throws ApiError
     */
    public getEjfPersonsAdvanced(
        size: number = 10,
        offset?: number,
        requestBody?: QueryWithTemplate,
    ): CancelablePromise<ESResponseModel_EJFOwnerPersonResponse_> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/ejf/persons',
            query: {
                'size': size,
                'offset': offset,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Ejf Person By Id
     * @param id UUID of an EJF Person
     * @param includes
     * @param excludes
     * @returns EJFOwnerPersonResponse Successful Response
     * @throws ApiError
     */
    public getEjfPersonById(
        id: string,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<EJFOwnerPersonResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/ejf/persons/{id}',
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
     * Get Ejf Person Portfolio By Id
     * @param id Either unit number of a CVR member or an EJF id
     * @returns PortfolioAggs Successful Response
     * @throws ApiError
     */
    public getEjfPersonPortfolioById(
        id: (number | string),
    ): CancelablePromise<PortfolioAggs> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/ejf/persons/{id}/portfolio',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get Ejf Others
     * @param id
     * @param name
     * @param page Page id for pagination
     * @param size
     * @param offset
     * @param sort
     * @param order
     * @param includes
     * @param excludes
     * @returns ESResponseModel_EJFOwnerOtherResponse_ Successful Response
     * @throws ApiError
     */
    public getEjfOthers(
        id?: string,
        name?: string,
        page?: string,
        size: number = 10,
        offset?: number,
        sort?: string,
        order?: resights__api__models__response__SortOrder,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<ESResponseModel_EJFOwnerOtherResponse_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/ejf/others',
            query: {
                'id': id,
                'name': name,
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
     * Get Ejf Others Advanced
     * @param size
     * @param offset
     * @param requestBody
     * @returns ESResponseModel_EJFOwnerOtherResponse_ Successful Response
     * @throws ApiError
     */
    public getEjfOthersAdvanced(
        size: number = 10,
        offset?: number,
        requestBody?: QueryWithTemplate,
    ): CancelablePromise<ESResponseModel_EJFOwnerOtherResponse_> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/ejf/others',
            query: {
                'size': size,
                'offset': offset,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Ejf Other By Id
     * @param id UUID of an EJF other
     * @param includes
     * @param excludes
     * @returns EJFOwnerOtherResponse Successful Response
     * @throws ApiError
     */
    public getEjfOtherById(
        id: string,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<EJFOwnerOtherResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/ejf/others/{id}',
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
