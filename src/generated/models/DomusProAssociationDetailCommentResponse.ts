/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProAssociationDetailCommentTypeEnum } from './DomusProAssociationDetailCommentTypeEnum';
export type DomusProAssociationDetailCommentResponse = {
  /**
   * domuspro_webservice_documentstore_domain_model_comment.persistence_object_identifier
   */
  id: string;
  /**
   * domuspro_webservice_documentstore_domain_model_comment.partner
   */
  partner_id: string;
  /**
   * domuspro_webservice_documentstore_domain_model_comment.association
   */
  association_id?: number;
  /**
   * domuspro_webservice_documentstore_domain_model_comment.annualreport
   */
  annualreport_id?: number;
  /**
   * RegnskabStartDato
   */
  start_date?: string;
  /**
   * RegnskabSlutDato
   */
  end_date?: string;
  /**
   * domuspro_webservice_documentstore_domain_model_comment.type
   */
  type: DomusProAssociationDetailCommentTypeEnum;
  /**
   * domuspro_webservice_documentstore_domain_model_comment.comment
   */
  comment: string;
};
