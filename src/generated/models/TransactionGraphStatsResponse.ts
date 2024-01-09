/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransactionGraphStatsBucketResponse } from './TransactionGraphStatsBucketResponse';
export type TransactionGraphStatsResponse = {
    key: string;
    count: number;
    bucket: TransactionGraphStatsBucketResponse;
    buckets: Array<TransactionGraphStatsBucketResponse>;
};

