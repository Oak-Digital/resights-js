/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Base class for a model representing and defining a Materialized View.
 */
export type MATLandAggs = {
  count?: number;
  /**
   * Represents the `land_lot_code` of the primary cadastre (sorted by area)
   */
  land_lot_code: number;
  /**
   * Represents the `land_lot_name` of the primary cadastre (sorted by area)
   */
  land_lot_name: string;
  /**
   * Represents the `cadastre_number` of the primary cadastre (sorted by area)
   */
  cadastre_number: string;
  /**
   * Sum of `registered_area` for all cadastres excluding common lots unless the property is the common lot
   */
  land_area?: number;
  /**
   * Sum of `street_area` for all cadastres excluding common lots unless the property is the common lot
   */
  street_area?: number;
  /**
   * Sum of `forest_reserve_area` for all cadastres excluding common lots unless the property is the common lot
   */
  forest_reserve_area?: number;
  /**
   * Sum of `preservation_dunes_area` for all cadastres excluding common lots unless the property is the common lot
   */
  preservation_dunes_area?: number;
  /**
   * Sum of `beach_protection_area` for all cadastres excluding common lots unless the property is the common lot
   */
  beach_protection_area?: number;
};
