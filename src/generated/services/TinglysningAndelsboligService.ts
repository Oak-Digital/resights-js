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
   * @returns SearchAndelsboligModel Successful Response
   * @throws ApiError
   */
  public searchAndelsboligByAddress({
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
  }): CancelablePromise<Array<SearchAndelsboligModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/andelsbolig/search/address',
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
   * Search Andelsbolig By Municipality
   * @returns SearchAndelsboligModel Successful Response
   * @throws ApiError
   */
  public searchAndelsboligByMunicipality({
    municipalityCode,
    streetCode,
    houseNumber,
    floor,
    door,
  }: {
    /**
     * Kommunekode
     */
    municipalityCode: number;
    /**
     * Vejkode
     */
    streetCode: string;
    /**
     * Husnummer
     */
    houseNumber: string;
    /**
     * Etage
     */
    floor?: string;
    /**
     * Dør
     */
    door?: string;
  }): CancelablePromise<Array<SearchAndelsboligModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/andelsbolig/search/municipality',
      query: {
        municipality_code: municipalityCode,
        street_code: streetCode,
        house_number: houseNumber,
        floor: floor,
        door: door,
      },
    });
  }
  /**
   * Search Andelsbolig By Zip Code
   * @returns SearchAndelsboligModel Successful Response
   * @throws ApiError
   */
  public searchAndelsboligByZipCode({
    zipCode,
    streetName,
    houseNumber,
    floor,
    door,
  }: {
    /**
     * Kommunekode
     */
    zipCode: number;
    /**
     * Vejnavn
     */
    streetName: string;
    /**
     * Husnummer
     */
    houseNumber: string;
    /**
     * Etage
     */
    floor?: string;
    /**
     * Dør
     */
    door?: string;
  }): CancelablePromise<Array<SearchAndelsboligModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/andelsbolig/search/zip_code',
      query: {
        zip_code: zipCode,
        street_name: streetName,
        house_number: houseNumber,
        floor: floor,
        door: door,
      },
    });
  }
  /**
   * Search Andelsbolig By Person
   * @returns SearchAndelsboligModel Successful Response
   * @throws ApiError
   */
  public searchAndelsboligByPerson({
    birthDate,
    name,
  }: {
    /**
     * Fødselsdato
     */
    birthDate: string;
    /**
     * Navn
     */
    name: string;
  }): CancelablePromise<Array<SearchAndelsboligModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/andelsbolig/search/person',
      query: {
        birth_date: birthDate,
        name: name,
      },
    });
  }
  /**
   * Search Andelsbolig By Cvr Number
   * @returns SearchAndelsboligModel Successful Response
   * @throws ApiError
   */
  public searchAndelsboligByCvrNumber({
    cvrNumber,
  }: {
    /**
     * CVR-nummer
     */
    cvrNumber: number;
  }): CancelablePromise<Array<SearchAndelsboligModel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/andelsbolig/search/cvr-number/{cvr_number}',
      path: {
        cvr_number: cvrNumber,
      },
    });
  }
  /**
   * Get Andelsboligattest By Uuid
   * Svar understøtter endnu ikke MeddelelseSamling
   * @returns AndelsboligattestModel Successful Response
   * @throws ApiError
   */
  public getAndelsboligattestByUuid({
    uuid,
  }: {
    /**
     * UUID på attest
     */
    uuid: string;
  }): CancelablePromise<AndelsboligattestModel> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/tinglysning/andelsbolig/attest/{uuid}',
      path: {
        uuid: uuid,
      },
    });
  }
}
