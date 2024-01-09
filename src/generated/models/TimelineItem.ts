/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimelineItemTypeEnum } from './TimelineItemTypeEnum';
import type { TimelineMember } from './TimelineMember';
export type TimelineItem = {
    type: TimelineItemTypeEnum;
    value_from?: string;
    value_to?: string;
    member?: TimelineMember;
    member_from?: TimelineMember;
    member_to?: TimelineMember;
    last_updated: string;
};

