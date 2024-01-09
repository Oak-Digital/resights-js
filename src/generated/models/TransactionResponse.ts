/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcquisitionMethodEnum } from './AcquisitionMethodEnum';
import type { TransactionActorResponse } from './TransactionActorResponse';
import type { TransactionAdvisorResponse } from './TransactionAdvisorResponse';
import type { TransactionAssetStageEnum } from './TransactionAssetStageEnum';
import type { TransactionAssetTypeEnum } from './TransactionAssetTypeEnum';
import type { TransactionMeasureCapRateResponse } from './TransactionMeasureCapRateResponse';
import type { TransactionMeasurePriceResponse } from './TransactionMeasurePriceResponse';
import type { TransactionMeasureResponse } from './TransactionMeasureResponse';
import type { TransactionMeasureSqmResponse } from './TransactionMeasureSqmResponse';
import type { TransactionPropertiesResponse } from './TransactionPropertiesResponse';
import type { TransactionProspectusESModel } from './TransactionProspectusESModel';
import type { TransactionSourceResponse } from './TransactionSourceResponse';
import type { TransactionStatsResponse } from './TransactionStatsResponse';
import type { TransactionTradeTypeEnum } from './TransactionTradeTypeEnum';
import type { TransactionTypeEnum } from './TransactionTypeEnum';
export type TransactionResponse = {
    /**
     * Transaction ID from either EJF or internal ID
     */
    id: string;
    /**
     * Transaction type to distinguish between EJF and internal transactions
     */
    type: TransactionTypeEnum;
    /**
     * Trade type to distinguish commercial trades
     */
    trade_type: TransactionTradeTypeEnum;
    /**
     * Transaction title which is taken either automatically based on the address or from manually reported field
     */
    title: string;
    /**
     * We need to make research how to calculate this in the best way
     */
    trade_date: string;
    /**
     * Decide whether we need to streamline this
     */
    trade_method?: AcquisitionMethodEnum;
    asset_type: TransactionAssetTypeEnum;
    asset_stage: TransactionAssetStageEnum;
    buyers: Array<TransactionActorResponse>;
    sellers: Array<TransactionActorResponse>;
    municipality_code?: number;
    municipality_codes: Array<number>;
    zip_code?: number;
    zip_codes: Array<number>;
    street_code?: number;
    street_codes: Array<number>;
    price: TransactionMeasurePriceResponse;
    area?: TransactionMeasureResponse;
    sqm_price?: TransactionMeasureSqmResponse;
    cap_rate?: TransactionMeasureCapRateResponse;
    /**
     * Whether this transaction has been enriched by Resights
     */
    enriched: boolean;
    centroid?: string;
    comment?: string;
    advisors: Array<TransactionAdvisorResponse>;
    properties: Array<TransactionPropertiesResponse>;
    sources: Array<TransactionSourceResponse>;
    economy?: TransactionProspectusESModel;
    stats: TransactionStatsResponse;
};

