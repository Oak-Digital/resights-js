/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GrundejernesInvesteringsfondResponse } from '../models/GrundejernesInvesteringsfondResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GiGrundejernesInvesteringsfondService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Gi Documents
   * @returns GrundejernesInvesteringsfondResponse Successful Response
   * @throws ApiError
   */
  public getGiDocuments({
    bfeNumber,
  }: {
    bfeNumber: string;
  }): CancelablePromise<GrundejernesInvesteringsfondResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/gi/{bfe_number}',
      path: {
        bfe_number: bfeNumber,
      },
    });
  }
}
