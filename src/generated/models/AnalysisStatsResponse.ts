/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnalysisStatsBucketResponse } from './AnalysisStatsBucketResponse';
export type AnalysisStatsResponse = {
  key: string;
  count: number;
  bucket: AnalysisStatsBucketResponse;
  buckets: Array<AnalysisStatsBucketResponse>;
};
