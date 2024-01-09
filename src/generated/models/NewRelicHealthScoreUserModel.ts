/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewRelicHealthScoreFieldModel } from './NewRelicHealthScoreFieldModel';
export type NewRelicHealthScoreUserModel = {
  id: string;
  date: string;
  user_id: string;
  company_id?: string;
  score_0_30_days: NewRelicHealthScoreFieldModel;
  score_31_60_days: NewRelicHealthScoreFieldModel;
  score_total: NewRelicHealthScoreFieldModel;
};
