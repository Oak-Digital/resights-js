/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRNetworkEdge } from './CVRNetworkEdge';
import type { CVRNetworkNode } from './CVRNetworkNode';
import type { CVRNetworkStats } from './CVRNetworkStats';
export type CVRNetwork = {
  nodes: Array<CVRNetworkNode>;
  edges: Array<CVRNetworkEdge>;
  stats: CVRNetworkStats;
};
