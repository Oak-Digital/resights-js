/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MATStatusEnum } from './MATStatusEnum';
/**
 * Base class for a model representing and defining a Materialized View.
 */
export type MATLandSimple = {
    id: number;
    status: MATStatusEnum;
    registered_area: number;
    land_lot_code: number;
    land_lot_name: string;
    cadastre_number: string;
    geom: string;
};

