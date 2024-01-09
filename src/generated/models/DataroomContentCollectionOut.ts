/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataroomContentCollection_DataroomDocumentOut_ } from './DataroomContentCollection_DataroomDocumentOut_';
import type { DataroomStateEnum } from './DataroomStateEnum';
export type DataroomContentCollectionOut = {
  template_id?: string;
  content: Array<DataroomContentCollection_DataroomDocumentOut_>;
  state: DataroomStateEnum;
  created_at?: string;
  started_at?: string;
  updated_at?: string;
  ended_at?: string;
};
