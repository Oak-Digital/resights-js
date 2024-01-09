/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransactionAdvisor } from './TransactionAdvisor';
import type { TransactionAssetStageEnum } from './TransactionAssetStageEnum';
import type { TransactionAssetTypeEnum } from './TransactionAssetTypeEnum';
import type { TransactionBuyerSeller } from './TransactionBuyerSeller';
import type { TransactionCapRateSourceEnum } from './TransactionCapRateSourceEnum';
import type { TransactionPriceSourceEnum } from './TransactionPriceSourceEnum';
import type { TransactionQualityEnum } from './TransactionQualityEnum';
export type TransactionCreateModel = {
    ejf_id?: string;
    prospectus_id?: string;
    title?: string;
    trade_date?: string;
    price?: number;
    price_lower?: number;
    price_upper?: number;
    price_quality?: TransactionQualityEnum;
    price_source?: TransactionPriceSourceEnum;
    cap_rate?: number;
    cap_rate_lower?: number;
    cap_rate_upper?: number;
    cap_rate_quality?: TransactionQualityEnum;
    cap_rate_source?: TransactionCapRateSourceEnum;
    size_m2?: number;
    size_m2_lower?: number;
    size_m2_upper?: number;
    size_m2_quality?: TransactionQualityEnum;
    comment_public?: string;
    comment_private?: string;
    asset_stages?: Array<TransactionAssetStageEnum>;
    asset_types?: Array<TransactionAssetTypeEnum>;
    advisors?: Array<TransactionAdvisor>;
    bfe_numbers?: Array<number>;
    sources?: Array<string>;
    buyers?: Array<TransactionBuyerSeller>;
    sellers?: Array<TransactionBuyerSeller>;
};

