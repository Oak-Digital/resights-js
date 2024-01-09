/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AVMNearestNeighbors } from './AVMNearestNeighbors';
export type AVMResponse = {
    floor_area: number;
    sqm_price_building_area_pic: number;
    catboost_sqm_price_prediction: number;
    lgbm_sqm_price_prediction: number;
    knn_sqm_price_prediction: number;
    knn_lower_prediction_bound: number;
    knn_upper_prediction_bound: number;
    knn_variation_coefficient: number;
    sqm_price_building_area_prediction_unrounded: number;
    trade_price_prediction_unrounded: number;
    sqm_price_building_area_prediction: number;
    trade_price_prediction: number;
    variation_coefficient: number;
    neighbors: Array<AVMNearestNeighbors>;
};

