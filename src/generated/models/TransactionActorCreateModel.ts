/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryEnum } from './CountryEnum';
import type { TransactionActorTypeEnum } from './TransactionActorTypeEnum';
import type { TransactionSubsidiaryCreateModel } from './TransactionSubsidiaryCreateModel';
export type TransactionActorCreateModel = {
    name: string;
    type?: TransactionActorTypeEnum;
    country?: CountryEnum;
    id: number;
    subsidiaries?: Array<TransactionSubsidiaryCreateModel>;
};

