/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BilbogsattestModel } from '../models/BilbogsattestModel';
import type { SearchBilbogModel } from '../models/SearchBilbogModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TinglysningKRetJService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search Vehicle By Id
     * @param id Stelnummer
     * @returns SearchBilbogModel Successful Response
     * @throws ApiError
     */
    public searchVehicleById(
        id: string,
    ): CancelablePromise<Array<SearchBilbogModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/vehicle/search/id/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Search Vehicle By Cvr Number
     * @param cvrNumber
     * @returns SearchBilbogModel Successful Response
     * @throws ApiError
     */
    public searchVehicleByCvrNumber(
        cvrNumber: number,
    ): CancelablePromise<Array<SearchBilbogModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/vehicle/search/cvr-number/{cvr_number}',
            path: {
                'cvr_number': cvrNumber,
            },
        });
    }
    /**
     * Search Vehicle By Person
     * @param birthDate
     * @param name
     * @returns SearchBilbogModel Successful Response
     * @throws ApiError
     */
    public searchVehicleByPerson(
        birthDate: string,
        name: string,
    ): CancelablePromise<Array<SearchBilbogModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/vehicle/search/person',
            query: {
                'birth_date': birthDate,
                'name': name,
            },
        });
    }
    /**
     * Get Bilbogsattest By Uuid
     * @param uuid
     * @returns BilbogsattestModel Successful Response
     * @throws ApiError
     */
    public getBilbogsattestByUuid(
        uuid: string,
    ): CancelablePromise<BilbogsattestModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/bilbogsattest/{uuid}',
            path: {
                'uuid': uuid,
            },
        });
    }
}
