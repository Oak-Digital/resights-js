/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRNodeBase } from './CVRNodeBase';
import type { CVRShare } from './CVRShare';
export type CVROwnershipEdgeResponse = {
  source: CVRNodeBase;
  target: CVRNodeBase;
  active?: boolean;
  share: CVRShare;
  unadjusted_share: CVRShare;
};
