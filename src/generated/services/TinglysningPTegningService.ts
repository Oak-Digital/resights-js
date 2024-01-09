/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TinglysningPTegningService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Paategninger By Alias Id
     * @param aliasId DokumentAliasIdentifikator
     * @param cancelled
     * @returns any Successful Response
     * @throws ApiError
     */
    public getPaategningerByAliasId(
        aliasId: string,
        cancelled: boolean = false,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/paategning/aliasid/{alias_id}',
            path: {
                'alias_id': aliasId,
            },
            query: {
                'cancelled': cancelled,
            },
        });
    }
    /**
     * Get Paategninger By Uuid
     * @param uuid
     * @param cancelled
     * @returns any Successful Response
     * @throws ApiError
     */
    public getPaategningerByUuid(
        uuid: string,
        cancelled: boolean = false,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/tinglysning/paategning/uuid/{uuid}',
            path: {
                'uuid': uuid,
            },
            query: {
                'cancelled': cancelled,
            },
        });
    }
}
