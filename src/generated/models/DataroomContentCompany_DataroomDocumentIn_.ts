/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataroomCollectionType } from './DataroomCollectionType';
import type { DataroomContentProperty_DataroomDocumentIn_ } from './DataroomContentProperty_DataroomDocumentIn_';
import type { DataroomDocumentIn } from './DataroomDocumentIn';
export type DataroomContentCompany_DataroomDocumentIn_ = {
  cvr_number: number;
  properties: Array<DataroomContentProperty_DataroomDocumentIn_>;
  documents: Array<DataroomDocumentIn>;
  type?: DataroomCollectionType;
};
