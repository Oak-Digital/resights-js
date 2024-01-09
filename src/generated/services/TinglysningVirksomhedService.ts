/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookEnum } from '../models/BookEnum';
import type { DokTypeEnum } from '../models/DokTypeEnum';
import type { VirksomhedRolleEnum } from '../models/VirksomhedRolleEnum';
import type { VirksomhedSoegningInformationSamling } from '../models/VirksomhedSoegningInformationSamling';
import type { VirksomhedSoegningRegistreringerModel } from '../models/VirksomhedSoegningRegistreringerModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TinglysningVirksomhedService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Search Company Registrations
     * @param cvrNumber CVR-nummer
     * @returns VirksomhedSoegningRegistreringerModel Successful Response
     * @throws ApiError
     */
    public searchCompanyRegistrations(
        cvrNumber: number,
    ): CancelablePromise<VirksomhedSoegningRegistreringerModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/companies/registrations/{cvr_number}',
            path: {
                'cvr_number': cvrNumber,
            },
        });
    }
    /**
     * Search Company Documents
     * Her kan du fremsøge en liste over samtlige dokumenter for fast ejendom hvor i en given virksomhed er part.
     *
     * Indeholder listen mange resultater, vil listen være fordelt på flere sider.
     *
     * Ønskes søgningen begrænset udfyld et eller flere søgekritier.
     * @param cvrNumber CVR-nummer
     * @param book
     * @param documentType
     * @param role
     * @param dateFrom
     * @param dateTo
     * @param page Side
     * @param perPage
     * @returns VirksomhedSoegningInformationSamling Successful Response
     * @throws ApiError
     */
    public searchCompanyDocuments(
        cvrNumber: number,
        book?: BookEnum,
        documentType?: DokTypeEnum,
        role?: VirksomhedRolleEnum,
        dateFrom?: string,
        dateTo?: string,
        page: number = 1,
        perPage: number = 25,
    ): CancelablePromise<Array<VirksomhedSoegningInformationSamling>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/companies/documents/{cvr_number}',
            path: {
                'cvr_number': cvrNumber,
            },
            query: {
                'book': book,
                'document_type': documentType,
                'role': role,
                'date_from': dateFrom,
                'date_to': dateTo,
                'page': page,
                'per_page': perPage,
            },
        });
    }
}
