/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilesMetaResponseModel } from './FilesMetaResponseModel';
export type FilesListResponseModel = {
    Key: string;
    LastModified: string;
    ETag: string;
    Size: number;
    StorageClass: string;
    Meta: FilesMetaResponseModel;
    url?: string;
};

