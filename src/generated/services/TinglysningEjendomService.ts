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
   * @returns SearchEjendomModel Successful Response
   * @throws ApiError
   */
  public searchTinglysningByAddress({
    streetName,
    houseNumber,
    zipCode,
    floor,
    door,
  }: {
    /**
     * Vejnavn
     */
    streetName: string;
    /**
     * Husnummer
     */
    houseNumber: string;
    /**
     * Postnummer
     */
    zipCode: string;
    /**
     * Etage
     */
    floor?: string;
    /**
     * Dør
     */
    door?: string;
  }): CancelablePromise<Array<SearchEjendomModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/property/search/address',
      query: {
        street_name: streetName,
        house_number: houseNumber,
        zip_code: zipCode,
        floor: floor,
        door: door,
      },
    });
  }
  /**
   * Search Tinglysning By Address Limited
   * @returns SearchEjendomModel Successful Response
   * @throws ApiError
   */
  public searchTinglysningByAddressLimited({
    zipCode,
    streetName,
    houseNumber,
    floor,
    door,
    maxResults = 2000,
  }: {
    /**
     * Postnummer
     */
    zipCode: string;
    /**
     * Vejnavn
     */
    streetName: string;
    /**
     * Husnummer
     */
    houseNumber?: string;
    /**
     * Etage
     */
    floor?: string;
    /**
     * Dør
     */
    door?: string;
    /**
     * Maks antal resultater
     */
    maxResults?: number;
  }): CancelablePromise<Array<SearchEjendomModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/property/search/address-limited',
      query: {
        zip_code: zipCode,
        street_name: streetName,
        house_number: houseNumber,
        floor: floor,
        door: door,
        max_results: maxResults,
      },
    });
  }
  /**
   * Search Tinglysning By Bfe Number
   * @returns SearchEjendomModel Successful Response
   * @throws ApiError
   */
  public searchTinglysningByBfeNumber({
    bfeNumber,
  }: {
    /**
     * Hovednoteringsnummer (BFE-nummer)
     */
    bfeNumber: number;
  }): CancelablePromise<Array<SearchEjendomModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/property/search/bfe-number/{bfe_number}',
      path: {
        bfe_number: bfeNumber,
      },
    });
  }
  /**
   * Search Tinglysning By Municipality
   * @returns SearchEjendomModel Successful Response
   * @throws ApiError
   */
  public searchTinglysningByMunicipality({
    municipalityCode,
    propertyNumber,
  }: {
    /**
     * Kommunekode
     */
    municipalityCode: string;
    /**
     * Ejendomsnummer
     */
    propertyNumber: string;
  }): CancelablePromise<Array<SearchEjendomModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/property/search/esr-number/{municipality_code}/{property_number}',
      path: {
        municipality_code: municipalityCode,
        property_number: propertyNumber,
      },
    });
  }
  /**
   * Search Tinglysning By Cadastre
   * @returns SearchEjendomModel Successful Response
   * @throws ApiError
   */
  public searchTinglysningByCadastre({
    landLot,
    cadastreNumber,
  }: {
    /**
     * Ejerlav
     */
    landLot: string;
    cadastreNumber: string;
  }): CancelablePromise<Array<SearchEjendomModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/property/search/cadastre/{land_lot}/{cadastre_number}',
      path: {
        land_lot: landLot,
        cadastre_number: cadastreNumber,
      },
    });
  }
  /**
   * Search Tinglysning By Umatrikuleret Areal
   * @returns SearchEjendomModel Successful Response
   * @throws ApiError
   */
  public searchTinglysningByUmatrikuleretAreal({
    uma,
  }: {
    /**
     * Umatrikuleret areal
     */
    uma: string;
  }): CancelablePromise<Array<SearchEjendomModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/property/search/uma/{uma}',
      path: {
        uma: uma,
      },
    });
  }
  /**
   * Get Tingbogsattest By Uuid
   * @returns TingbogsattestModel Successful Response
   * @throws ApiError
   */
  public getTingbogsattestByUuid({
    uuid,
  }: {
    uuid: string;
  }): CancelablePromise<TingbogsattestModel> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/tingbogsattest/{uuid}',
      path: {
        uuid: uuid,
      },
    });
  }
  /**
   * Get Historic Claims By Uuid
   * @returns HistoriskAdkomsthaverModel Successful Response
   * @throws ApiError
   */
  public getHistoricClaimsByUuid({
    uuid,
  }: {
    uuid: string;
  }): CancelablePromise<Array<HistoriskAdkomsthaverModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/tingbogsattest/historic/{uuid}',
      path: {
        uuid: uuid,
      },
    });
  }
  /**
   * Get Ogsaa Lyst Paa
   * @returns OgsaaLystPaa Successful Response
   * @throws ApiError
   */
  public getOgsaaLystPaa({
    documentUuid,
    tinglysningUuid,
  }: {
    documentUuid: string;
    tinglysningUuid?: string;
  }): CancelablePromise<OgsaaLystPaa> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/ogsaalystpaa',
      query: {
        document_uuid: documentUuid,
        tinglysning_uuid: tinglysningUuid,
      },
    });
  }
}
