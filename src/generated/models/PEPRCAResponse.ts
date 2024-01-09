/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PEPFATFRCATypeEnum } from './PEPFATFRCATypeEnum';
import type { RCASourceTarget } from './RCASourceTarget';
import type { RCAVia } from './RCAVia';
export type PEPRCAResponse = {
    id: string;
    name: string;
    type: PEPFATFRCATypeEnum;
    category: string;
    via?: RCAVia;
    source?: RCASourceTarget;
    target?: RCASourceTarget;
};

