/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRShare } from './CVRShare';
import type { GraphNodeEnum } from './GraphNodeEnum';
export type CVROwnershipNodeResponse = {
  id: string;
  name: string;
  depth: number;
  type: GraphNodeEnum;
  active?: boolean;
  real_share: CVRShare;
  meta?: Record<string, any>;
};
