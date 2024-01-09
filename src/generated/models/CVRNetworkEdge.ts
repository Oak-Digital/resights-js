/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRNetworkNodeBase } from './CVRNetworkNodeBase';
import type { CVRNetworkShare } from './CVRNetworkShare';
export type CVRNetworkEdge = {
  id: string;
  source: CVRNetworkNodeBase;
  target: CVRNetworkNodeBase;
  share: CVRNetworkShare;
  unadjusted_share: CVRNetworkShare;
  active: boolean;
};
