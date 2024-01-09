/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRCreditInformationTextEnum } from './CVRCreditInformationTextEnum';
export type CVRStatusAttribute = {
    valid_from?: string;
    valid_to?: string;
    last_updated?: string;
    code: number;
    text?: string;
    credit_information_code: number;
    credit_information_text?: CVRCreditInformationTextEnum;
};

