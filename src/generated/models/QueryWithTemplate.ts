/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BooleanQueryNode } from './BooleanQueryNode';
import type { ClustersTemplate } from './ClustersTemplate';
import type { QuerySort } from './QuerySort';
import type { SourceDetail } from './SourceDetail';
import type { TermsTemplate } from './TermsTemplate';
export type QueryWithTemplate = {
    source?: (Array<string> | SourceDetail);
    page?: string;
    sort?: (Array<QuerySort> | QuerySort);
    query?: BooleanQueryNode;
    aggregations?: Array<(ClustersTemplate | TermsTemplate)>;
};

