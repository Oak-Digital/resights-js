/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRNetworkShare } from './CVRNetworkShare';
import type { CVRUnitTypeEnum } from './CVRUnitTypeEnum';
export type CVRNetworkNode = {
  id: number;
  name: string;
  depth: number;
  type: CVRUnitTypeEnum;
  real_share: CVRNetworkShare;
  active: boolean;
};
