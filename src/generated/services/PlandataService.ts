/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocalPlan } from '../models/LocalPlan';
import type { MunicipalityPlan } from '../models/MunicipalityPlan';
import type { SubareaPlan } from '../models/SubareaPlan';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PlandataService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Plandata
   * @returns any Successful Response
   * @throws ApiError
   */
  public getPlandata({
    landId,
    bfeNumber,
  }: {
    /**
     * LandID of a cadastre
     */
    landId?: number;
    /**
     * BFE-number of a property
     */
    bfeNumber?: number;
  }): CancelablePromise<Array<SubareaPlan | LocalPlan | MunicipalityPlan>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/plandata',
      query: {
        land_id: landId,
        bfe_number: bfeNumber,
      },
    });
  }
}
