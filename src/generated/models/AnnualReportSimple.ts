/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportDocuments } from './ReportDocuments';
import type { ReportFieldAuditor } from './ReportFieldAuditor';
import type { ReportFigures } from './ReportFigures';
import type { ReportRatio } from './ReportRatio';
export type AnnualReportSimple = {
    id: string;
    cvr_number?: number;
    reg_number?: string;
    case_number: string;
    import_id?: string;
    import_date: string;
    accounting_period_start: string;
    accounting_period_end: string;
    chairman?: string;
    verification_date?: string;
    publication_date: string;
    publication_type: string;
    last_update: string;
    alteration: boolean;
    documents: Array<ReportDocuments>;
    figures?: ReportFigures;
    ratios?: ReportRatio;
    auditors: Array<ReportFieldAuditor>;
};

