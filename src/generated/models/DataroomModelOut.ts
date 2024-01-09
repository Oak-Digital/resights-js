/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataroomStateEnum } from './DataroomStateEnum';
import type { DataroomStateSourceEnum } from './DataroomStateSourceEnum';
export type DataroomModelOut = {
    user?: string;
    external_dataroom_id: number;
    id?: string;
    state: DataroomStateEnum;
    name: string;
    type?: string;
    state_source: DataroomStateSourceEnum;
};

