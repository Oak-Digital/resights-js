/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProAccountantModel } from './DomusProAccountantModel';
import type { DomusProAdministratorModel } from './DomusProAdministratorModel';
import type { DomusProAnnualReportModel } from './DomusProAnnualReportModel';
import type { DomusProBudgetModel } from './DomusProBudgetModel';
import type { DomusProDocumentModel } from './DomusProDocumentModel';
import type { DomusProFiscalYearModel } from './DomusProFiscalYearModel';
import type { DomusProPropertyModel } from './DomusProPropertyModel';
import type { DomusProRenovationPlanModel } from './DomusProRenovationPlanModel';
export type DomusProAssociationResponse = {
  /**
   * Unique identifier
   */
  associationId: number;
  /**
   * External id of the association. This ID will be dependant on who is calling the webservice
   */
  externalId?: string;
  /**
   * CVR number
   */
  cvrNumber?: number;
  /**
   * If the association record is superceded by another record, this field contains the reference to the new identifier
   */
  seeOtherIdentifier?: number;
  /**
   * Name of the association
   */
  name: string;
  searchName: string;
  /**
   * Link to website of the association
   */
  website?: string;
  /**
   * Notes regarding this association
   */
  notes?: string;
  /**
   * Warnings about the association
   */
  warnings?: string;
  /**
   * Indicates if this association is deleted.
   */
  deleted?: boolean;
  /**
   * Zip code, if association spans across several zip codes, this will contain the lowest one.
   */
  zip: number;
  /**
   * City. The city of the zip. If the association spans several zip codes, this will be the name of the city with thelowest zip.
   */
  city: string;
  /**
   * Year of construction
   */
  constructionYear?: number;
  /**
   * Indicates whether the construction year is verified or not
   */
  constructionYearNotVerified: boolean;
  /**
   * The year the association is established
   */
  establishedYear?: number;
  /**
   * Indicates whether the establishment year is verified or not
   */
  establishedYearNotVerified: boolean;
  /**
   * Identifier of the accountant type. Even though the labels for accountant type might change, the ID should be constant.
   */
  accountantTypeId?: number;
  /**
   * Name of the accountant type
   */
  accountantTypeName?: string;
  /**
   * Identifier of the administrator type. Even though the labels for administrator type might change, the ID should be constant.
   */
  administratorTypeId?: number;
  /**
   * Name of the administrator type
   */
  administratorTypeName?: string;
  /**
   * Publication degree. Determines the validity of the data. Higher is better.
   */
  degreePublished: number;
  /**
   * Time of the latest update
   */
  latestUpdate: string;
  /**
   * Identifier of the accountant type. Even though the labels for accountant type might change, the ID should be constant.
   */
  accountant?: DomusProAccountantModel;
  /**
   * Administrating company
   */
  administrator?: DomusProAdministratorModel;
  /**
   * The fiscal year
   */
  fiscalYear: DomusProFiscalYearModel;
  /**
   * End date of the fiscalYear.
   */
  fiscalYearEndDate?: string;
  /**
   * Array of annual reports registered for the association
   */
  annualReports: Array<DomusProAnnualReportModel>;
  documents: Array<DomusProDocumentModel>;
  /**
   * Array of budgets registered for the association
   */
  budgets: Array<DomusProBudgetModel>;
  /**
   * Array of renovation plans for the association
   */
  renovationPlans: Array<DomusProRenovationPlanModel>;
  properties: Array<DomusProPropertyModel>;
};
