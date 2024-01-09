/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewRelicHealthScoreFieldModel } from './NewRelicHealthScoreFieldModel';
import type { NewRelicHealthScoreUserModel } from './NewRelicHealthScoreUserModel';
export type NewRelicHealthScoreCompanyWithUsersModel = {
    id: string;
    date: string;
    company_id: string;
    score_0_30_days: NewRelicHealthScoreFieldModel;
    score_31_60_days: NewRelicHealthScoreFieldModel;
    score_total: NewRelicHealthScoreFieldModel;
    users: Array<NewRelicHealthScoreUserModel>;
};

