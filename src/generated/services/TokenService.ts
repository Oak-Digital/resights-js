/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenResponse } from '../models/TokenResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TokenService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Token
   * @returns TokenResponse Successful Response
   * @throws ApiError
   */
  public token(): CancelablePromise<TokenResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/token',
    });
  }
}
