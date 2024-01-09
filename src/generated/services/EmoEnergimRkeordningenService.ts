/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnergyLabelResponse } from '../models/EnergyLabelResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmoEnergimRkeordningenService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Energy Label By Bfe Number
     * @param size
     * @param offset
     * @param id Energy label ID
     * @param bfeNumber BFE-nummer
     * @param label Energy label
     * @param status Energy label status
     * @returns EnergyLabelResponse Successful Response
     * @throws ApiError
     */
    public getEnergyLabelByBfeNumber(
        size: number = 10,
        offset?: number,
        id?: number,
        bfeNumber?: number,
        label?: string,
        status?: string,
    ): CancelablePromise<Array<EnergyLabelResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/emo/energy',
            query: {
                'size': size,
                'offset': offset,
                'id': id,
                'bfe_number': bfeNumber,
                'label': label,
                'status': status,
            },
        });
    }
    /**
     * Get Energy Label By Id
     * @param id EnergimærkeID
     * @returns EnergyLabelResponse Successful Response
     * @throws ApiError
     */
    public getEnergyLabelById(
        id: number,
    ): CancelablePromise<EnergyLabelResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/emo/energy/{id}',
            path: {
                'id': id,
            },
        });
    }
}
