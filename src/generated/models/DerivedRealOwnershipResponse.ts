/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseNodeResponse } from './BaseNodeResponse';
import type { CVRShare } from './CVRShare';
import type { GraphRelationEnum } from './GraphRelationEnum';
export type DerivedRealOwnershipResponse = {
    source: BaseNodeResponse;
    target: BaseNodeResponse;
    relationship_type: GraphRelationEnum;
    valid_from?: string;
    valid_to?: string;
    value?: any;
    share: CVRShare;
};

