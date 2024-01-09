/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AndelsboligattestModel } from '../models/AndelsboligattestModel';
import type { SearchAndelsboligModel } from '../models/SearchAndelsboligModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TinglysningAndelsboligService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search Andelsbolig By Address
     * @param streetName Vejnavn
     * @param houseNumber Husnummer
     * @param zipCode Postnummer
     * @param floor Etage
     * @param door Dør
     * @returns SearchAndelsboligModel Successful Response
     * @throws ApiError
     */
    public searchAndelsboligByAddress(
        streetName: string,
        houseNumber: string,
        zipCode: string,
        floor?: string,
        door?: string,
    ): CancelablePromise<Array<SearchAndelsboligModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/andelsbolig/search/address',
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
     * Search Andelsbolig By Municipality
     * @param municipalityCode Kommunekode
     * @param streetCode Vejkode
     * @param houseNumber Husnummer
     * @param floor Etage
     * @param door Dør
     * @returns SearchAndelsboligModel Successful Response
     * @throws ApiError
     */
    public searchAndelsboligByMunicipality(
        municipalityCode: number,
        streetCode: string,
        houseNumber: string,
        floor?: string,
        door?: string,
    ): CancelablePromise<Array<SearchAndelsboligModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/andelsbolig/search/municipality',
            query: {
                'municipality_code': municipalityCode,
                'street_code': streetCode,
                'house_number': houseNumber,
                'floor': floor,
                'door': door,
            },
        });
    }
    /**
     * Search Andelsbolig By Zip Code
     * @param zipCode Kommunekode
     * @param streetName Vejnavn
     * @param houseNumber Husnummer
     * @param floor Etage
     * @param door Dør
     * @returns SearchAndelsboligModel Successful Response
     * @throws ApiError
     */
    public searchAndelsboligByZipCode(
        zipCode: number,
        streetName: string,
        houseNumber: string,
        floor?: string,
        door?: string,
    ): CancelablePromise<Array<SearchAndelsboligModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/andelsbolig/search/zip_code',
            query: {
                'zip_code': zipCode,
                'street_name': streetName,
                'house_number': houseNumber,
                'floor': floor,
                'door': door,
            },
        });
    }
    /**
     * Search Andelsbolig By Person
     * @param birthDate Fødselsdato
     * @param name Navn
     * @returns SearchAndelsboligModel Successful Response
     * @throws ApiError
     */
    public searchAndelsboligByPerson(
        birthDate: string,
        name: string,
    ): CancelablePromise<Array<SearchAndelsboligModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/andelsbolig/search/person',
            query: {
                'birth_date': birthDate,
                'name': name,
            },
        });
    }
    /**
     * Search Andelsbolig By Cvr Number
     * @param cvrNumber CVR-nummer
     * @returns SearchAndelsboligModel Successful Response
     * @throws ApiError
     */
    public searchAndelsboligByCvrNumber(
        cvrNumber: number,
    ): CancelablePromise<Array<SearchAndelsboligModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/andelsbolig/search/cvr-number/{cvr_number}',
            path: {
                'cvr_number': cvrNumber,
            },
        });
    }
    /**
     * Get Andelsboligattest By Uuid
     * Svar understøtter endnu ikke MeddelelseSamling
     * @param uuid UUID på attest
     * @returns AndelsboligattestModel Successful Response
     * @throws ApiError
     */
    public getAndelsboligattestByUuid(
        uuid: string,
    ): CancelablePromise<AndelsboligattestModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/andelsbolig/attest/{uuid}',
            path: {
                'uuid': uuid,
            },
        });
    }
}
