/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SoegPdfIdModel } from '../models/SoegPdfIdModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TinglysningDownloadDocumentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Download Tingbogsattest By Uuid
     * @param uuid
     * @returns any Successful Response
     * @throws ApiError
     */
    public downloadTingbogsattestByUuid(
        uuid: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/download/tingbogsattest/{uuid}',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Download Atd By Uuid
     * @param uuid
     * @returns any Successful Response
     * @throws ApiError
     */
    public downloadAtdByUuid(
        uuid: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/download/atd/{uuid}',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Download Dokumentanmeldelse By Uuid
     * @param documentUuid
     * @param reportUuid
     * @returns any Successful Response
     * @throws ApiError
     */
    public downloadDokumentanmeldelseByUuid(
        documentUuid: string,
        reportUuid: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/download/dokumentanmeldelse/{document_uuid}/{report_uuid}',
            path: {
                'document_uuid': documentUuid,
                'report_uuid': reportUuid,
            },
        });
    }
    /**
     * Download Akt By Uuid
     * @param uuid
     * @param filename
     * @param entity
     * @returns any Successful Response
     * @throws ApiError
     */
    public downloadAktByUuid(
        uuid: string,
        filename: string,
        entity: string = 'akt',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/download/akt/{uuid}',
            path: {
                'uuid': uuid,
            },
            query: {
                'filename': filename,
                'entity': entity,
            },
        });
    }
    /**
     * Download Annex By Uuid
     * @param uuid
     * @returns any Successful Response
     * @throws ApiError
     */
    public downloadAnnexByUuid(
        uuid: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/download/annex/{uuid}',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Convert Pdf Id To Akt Uuid
     * @param pdfId
     * @returns SoegPdfIdModel Successful Response
     * @throws ApiError
     */
    public convertPdfIdToAktUuid(
        pdfId: string,
    ): CancelablePromise<SoegPdfIdModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/convert/{pdf_id}',
            path: {
                'pdf_id': pdfId,
            },
        });
    }
}
