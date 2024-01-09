/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistoriskAdkomsthaverModel } from '../models/HistoriskAdkomsthaverModel';
import type { OgsaaLystPaa } from '../models/OgsaaLystPaa';
import type { SearchEjendomModel } from '../models/SearchEjendomModel';
import type { TingbogsattestModel } from '../models/TingbogsattestModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TinglysningEjendomService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search Tinglysning By Address
     * @param streetName Vejnavn
     * @param houseNumber Husnummer
     * @param zipCode Postnummer
     * @param floor Etage
     * @param door Dør
     * @returns SearchEjendomModel Successful Response
     * @throws ApiError
     */
    public searchTinglysningByAddress(
        streetName: string,
        houseNumber: string,
        zipCode: string,
        floor?: string,
        door?: string,
    ): CancelablePromise<Array<SearchEjendomModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/property/search/address',
            query: {
                'street_name': streetName,
                'house_number': houseNumber,
                'zip_code': zipCode,
                'floor': floor,
                'door': door,
            },
        });
    }
    /**
     * Search Tinglysning By Address Limited
     * @param zipCode Postnummer
     * @param streetName Vejnavn
     * @param houseNumber Husnummer
     * @param floor Etage
     * @param door Dør
     * @param maxResults Maks antal resultater
     * @returns SearchEjendomModel Successful Response
     * @throws ApiError
     */
    public searchTinglysningByAddressLimited(
        zipCode: string,
        streetName: string,
        houseNumber?: string,
        floor?: string,
        door?: string,
        maxResults: number = 2000,
    ): CancelablePromise<Array<SearchEjendomModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/property/search/address-limited',
            query: {
                'zip_code': zipCode,
                'street_name': streetName,
                'house_number': houseNumber,
                'floor': floor,
                'door': door,
                'max_results': maxResults,
            },
        });
    }
    /**
     * Search Tinglysning By Bfe Number
     * @param bfeNumber Hovednoteringsnummer (BFE-nummer)
     * @returns SearchEjendomModel Successful Response
     * @throws ApiError
     */
    public searchTinglysningByBfeNumber(
        bfeNumber: number,
    ): CancelablePromise<Array<SearchEjendomModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/property/search/bfe-number/{bfe_number}',
            path: {
                'bfe_number': bfeNumber,
            },
        });
    }
    /**
     * Search Tinglysning By Municipality
     * @param municipalityCode Kommunekode
     * @param propertyNumber Ejendomsnummer
     * @returns SearchEjendomModel Successful Response
     * @throws ApiError
     */
    public searchTinglysningByMunicipality(
        municipalityCode: string,
        propertyNumber: string,
    ): CancelablePromise<Array<SearchEjendomModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/property/search/esr-number/{municipality_code}/{property_number}',
            path: {
                'municipality_code': municipalityCode,
                'property_number': propertyNumber,
            },
        });
    }
    /**
     * Search Tinglysning By Cadastre
     * @param landLot Ejerlav
     * @param cadastreNumber
     * @returns SearchEjendomModel Successful Response
     * @throws ApiError
     */
    public searchTinglysningByCadastre(
        landLot: string,
        cadastreNumber: string,
    ): CancelablePromise<Array<SearchEjendomModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/property/search/cadastre/{land_lot}/{cadastre_number}',
            path: {
                'land_lot': landLot,
                'cadastre_number': cadastreNumber,
            },
        });
    }
    /**
     * Search Tinglysning By Umatrikuleret Areal
     * @param uma Umatrikuleret areal
     * @returns SearchEjendomModel Successful Response
     * @throws ApiError
     */
    public searchTinglysningByUmatrikuleretAreal(
        uma: string,
    ): CancelablePromise<Array<SearchEjendomModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/property/search/uma/{uma}',
            path: {
                'uma': uma,
            },
        });
    }
    /**
     * Get Tingbogsattest By Uuid
     * @param uuid
     * @returns TingbogsattestModel Successful Response
     * @throws ApiError
     */
    public getTingbogsattestByUuid(
        uuid: string,
    ): CancelablePromise<TingbogsattestModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/tingbogsattest/{uuid}',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get Historic Claims By Uuid
     * @param uuid
     * @returns HistoriskAdkomsthaverModel Successful Response
     * @throws ApiError
     */
    public getHistoricClaimsByUuid(
        uuid: string,
    ): CancelablePromise<Array<HistoriskAdkomsthaverModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/tingbogsattest/historic/{uuid}',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get Ogsaa Lyst Paa
     * @param documentUuid
     * @param tinglysningUuid
     * @returns OgsaaLystPaa Successful Response
     * @throws ApiError
     */
    public getOgsaaLystPaa(
        documentUuid: string,
        tinglysningUuid?: string,
    ): CancelablePromise<OgsaaLystPaa> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/ogsaalystpaa',
            query: {
                'document_uuid': documentUuid,
                'tinglysning_uuid': tinglysningUuid,
            },
        });
    }
}
