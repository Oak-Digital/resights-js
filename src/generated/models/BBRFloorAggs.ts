/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BBRFloorAggs = {
    /**
     * A derived sum from `eta020_area_total_floor` - `eta021_area_utilized_attic` when `eta025_floor_type == 1`
     */
    area_unused_attic?: number;
    eta020_area_total_floor?: number;
    eta021_area_utilized_attic?: number;
    eta022_area_basement?: number;
    /**
     * A derived sum by Resights from `eta020_area_total_floor` when `eta006_floor_name_building` starts with `k`
     */
    eta022_area_basement_calculated?: number;
    eta023_area_legal_residential_basement?: number;
    eta026_basement_commercial?: number;
};

