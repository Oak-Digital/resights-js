/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProAssociationDetailCommentTypeEnum } from './DomusProAssociationDetailCommentTypeEnum';
export type DomusProAssociationDetailCommentCreateModel = {
  type: DomusProAssociationDetailCommentTypeEnum;
  comment?: string;
  association_id?: number;
  annualreport_id?: number;
  start_date?: string;
  end_date?: string;
};
