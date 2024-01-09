/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimelinePriceChangeModel } from './TimelinePriceChangeModel';
import type { TimelineStatusEnum } from './TimelineStatusEnum';
import type { TimelineTradeTypeEnum } from './TimelineTradeTypeEnum';
export type TimelineModel = {
  date: string;
  status: TimelineStatusEnum;
  trade_type?: TimelineTradeTypeEnum;
  price?: number;
  price_change?: TimelinePriceChangeModel;
};
