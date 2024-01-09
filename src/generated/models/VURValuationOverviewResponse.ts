/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VURValuationOverviewResponse = {
    ice_number?: number;
    property_value_old?: number;
    land_value_old?: number;
    year_old?: number;
    property_value_new?: number;
    land_value_new?: number;
    year_new?: number;
    property_value_preliminary?: number;
    land_value_preliminary?: number;
    year_preliminary?: number;
    /**
     * Percentage increase of property value from old to new valuation
     */
    change_property_value_old_new?: number;
    /**
     * Percentage increase of land value from old to new valuation
     */
    change_land_value_old_new?: number;
    /**
     * Percentage increase of property value from old to new preliminary valuation
     */
    change_property_value_old_preliminary?: number;
    /**
     * Percentage increase of land value from old to new preliminary valuation
     */
    change_land_value_old_preliminary?: number;
    /**
     * Percentage increase of property value from new to new preliminary valuation
     */
    change_property_value_new_preliminary?: number;
    /**
     * Percentage increase of land value from new to new preliminary valuation
     */
    change_land_value_new_preliminary?: number;
};

