/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvgAgg } from './AvgAgg';
import type { MaxAgg } from './MaxAgg';
import type { MinAgg } from './MinAgg';
import type { PercentilesAgg } from './PercentilesAgg';
import type { resights__api__query_dsl__query__SortOrder } from './resights__api__query_dsl__query__SortOrder';
import type { SumAgg } from './SumAgg';
import type { ValueCountAgg } from './ValueCountAgg';
export type TermsTemplate = {
  template_name: 'terms';
  field: string;
  size?: number;
  order?: Record<string, resights__api__query_dsl__query__SortOrder>;
  aggs?: Record<
    string,
    AvgAgg | MinAgg | MaxAgg | SumAgg | ValueCountAgg | PercentilesAgg
  >;
};
