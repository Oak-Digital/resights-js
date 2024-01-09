/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseNodeResponse } from './BaseNodeResponse';
import type { GraphRelationEnum } from './GraphRelationEnum';
export type CEOResponse = {
    source: BaseNodeResponse;
    target: BaseNodeResponse;
    relationship_type: GraphRelationEnum;
    valid_from?: string;
    valid_to?: string;
    value?: any;
};

