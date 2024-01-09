/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataroomDocumentStateEnum } from './DataroomDocumentStateEnum';
export type DataroomDocumentState = {
    messages?: Array<string>;
    document_states?: Record<string, DataroomDocumentStateEnum>;
    document_ids?: Record<string, number>;
    general_state?: DataroomDocumentStateEnum;
};

