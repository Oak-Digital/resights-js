/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnergyLabelResponse } from '../models/EnergyLabelResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmoEnergimRkeordningenService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Energy Label By Bfe Number
   * @returns EnergyLabelResponse Successful Response
   * @throws ApiError
   */
  public getEnergyLabelByBfeNumber({
    size = 10,
    offset,
    id,
    bfeNumber,
    label,
    status,
  }: {
    size?: number;
    offset?: number;
    /**
     * Energy label ID
     */
    id?: number;
    /**
     * BFE-nummer
     */
    bfeNumber?: number;
    /**
     * Energy label
     */
    label?: string;
    /**
     * Energy label status
     */
    status?: string;
  }): CancelablePromise<Array<EnergyLabelResponse>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/emo/energy',
      query: {
        size: size,
        offset: offset,
        id: id,
        bfe_number: bfeNumber,
        label: label,
        status: status,
      },
    });
  }
  /**
   * Get Energy Label By Id
   * @returns EnergyLabelResponse Successful Response
   * @throws ApiError
   */
  public getEnergyLabelById({
    id,
  }: {
    /**
     * EnergimærkeID
     */
    id: number;
  }): CancelablePromise<EnergyLabelResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/emo/energy/{id}',
      path: {
        id: id,
      },
    });
  }
}
