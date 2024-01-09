/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvgAgg } from './AvgAgg';
import type { MaxAgg } from './MaxAgg';
import type { MinAgg } from './MinAgg';
import type { PercentilesAgg } from './PercentilesAgg';
import type { SumAgg } from './SumAgg';
import type { ValueCountAgg } from './ValueCountAgg';
export type ClustersTemplate = {
  template_name: 'clusters';
  field: string;
  top_left?: Array<any>;
  bottom_right?: Array<any>;
  precision?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  size?: number;
  aggs?: Record<
    string,
    AvgAgg | MinAgg | MaxAgg | SumAgg | ValueCountAgg | PercentilesAgg
  >;
};
