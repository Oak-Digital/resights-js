/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AndelsboligAendringModel } from '../models/AndelsboligAendringModel';
import type { EjendomIdentifikatorAendringModel } from '../models/EjendomIdentifikatorAendringModel';
import type { KoretojerAendringModel } from '../models/KoretojerAendringModel';
import type { PersonVirksomhedAendringModel } from '../models/PersonVirksomhedAendringModel';
import type { TinglysningChangeLatestResponse } from '../models/TinglysningChangeLatestResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TinglysningNdringerService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Changes From To Properties
     * @param dateFrom Dato fra
     * @param dateTo Dato til
     * @param page Side
     * @returns EjendomIdentifikatorAendringModel Successful Response
     * @throws ApiError
     */
    public getChangesFromToProperties(
        dateFrom: string,
        dateTo: string,
        page: number = 1,
    ): CancelablePromise<Array<EjendomIdentifikatorAendringModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/changes/properties',
            query: {
                'date_from': dateFrom,
                'date_to': dateTo,
                'page': page,
            },
        });
    }
    /**
     * Get Changes From To Vehicles
     * @param dateFrom Dato fra
     * @param dateTo Dato til
     * @param page Side
     * @returns KoretojerAendringModel Successful Response
     * @throws ApiError
     */
    public getChangesFromToVehicles(
        dateFrom: string,
        dateTo: string,
        page: number = 1,
    ): CancelablePromise<Array<KoretojerAendringModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/changes/vehicles',
            query: {
                'date_from': dateFrom,
                'date_to': dateTo,
                'page': page,
            },
        });
    }
    /**
     * Get Changes From To Person Company
     * @param dateFrom Dato fra
     * @param dateTo Dato til
     * @param page Side
     * @returns PersonVirksomhedAendringModel Successful Response
     * @throws ApiError
     */
    public getChangesFromToPersonCompany(
        dateFrom: string,
        dateTo: string,
        page: number = 1,
    ): CancelablePromise<Array<PersonVirksomhedAendringModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/changes/person-company',
            query: {
                'date_from': dateFrom,
                'date_to': dateTo,
                'page': page,
            },
        });
    }
    /**
     * Get Changes From To Andelsbolig
     * @param dateFrom Dato fra
     * @param dateTo Dato til
     * @param page Side
     * @returns AndelsboligAendringModel Successful Response
     * @throws ApiError
     */
    public getChangesFromToAndelsbolig(
        dateFrom: string,
        dateTo: string,
        page: number = 1,
    ): CancelablePromise<Array<AndelsboligAendringModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/changes/andelsbolig',
            query: {
                'date_from': dateFrom,
                'date_to': dateTo,
                'page': page,
            },
        });
    }
    /**
     * Get Changes Latest
     * @param landLot Vejnavn
     * @param cadastreNumber Matrikelnummer
     * @returns TinglysningChangeLatestResponse Successful Response
     * @throws ApiError
     */
    public getChangesLatest(
        landLot: string,
        cadastreNumber: string,
    ): CancelablePromise<TinglysningChangeLatestResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/changes/latest',
            query: {
                'land_lot': landLot,
                'cadastre_number': cadastreNumber,
            },
        });
    }
}
