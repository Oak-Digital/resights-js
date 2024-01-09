/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExistsQ } from './ExistsQ';
import type { GeoBBoxQ } from './GeoBBoxQ';
import type { GeoDistanceQ } from './GeoDistanceQ';
import type { GeoShapeQ } from './GeoShapeQ';
import type { MatchQ } from './MatchQ';
import type { RangeQ } from './RangeQ';
import type { TermsQ } from './TermsQ';
export type BooleanQueryNode = {
  and?: Array<
    | GeoShapeQ
    | TermsQ
    | MatchQ
    | RangeQ
    | ExistsQ
    | GeoDistanceQ
    | GeoBBoxQ
    | BooleanQueryNode
  >;
  or?: Array<
    | GeoShapeQ
    | TermsQ
    | MatchQ
    | RangeQ
    | ExistsQ
    | GeoDistanceQ
    | GeoBBoxQ
    | BooleanQueryNode
  >;
  not?: Array<
    | GeoShapeQ
    | TermsQ
    | MatchQ
    | RangeQ
    | ExistsQ
    | GeoDistanceQ
    | GeoBBoxQ
    | BooleanQueryNode
  >;
  and_filter?: Array<
    | GeoShapeQ
    | TermsQ
    | MatchQ
    | RangeQ
    | ExistsQ
    | GeoDistanceQ
    | GeoBBoxQ
    | BooleanQueryNode
  >;
  minimum_should_match?: number;
};
