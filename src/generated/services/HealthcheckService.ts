/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HealthcheckResponse } from '../models/HealthcheckResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HealthcheckService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Healthcheck
     * @returns HealthcheckResponse Successful Response
     * @throws ApiError
     */
    public healthcheck(): CancelablePromise<HealthcheckResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/healthcheck',
        });
    }
}
