/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BBRBuildingResponse } from './BBRBuildingResponse';
import type { BBRCaseLevelResponse } from './BBRCaseLevelResponse';
import type { BBRFloorResponse } from './BBRFloorResponse';
import type { BBRPlotResponse } from './BBRPlotResponse';
import type { BBRPropertyRelation } from './BBRPropertyRelation';
import type { BBRStaircaseResponse } from './BBRStaircaseResponse';
import type { BBRTechnicalInstallationResponse } from './BBRTechnicalInstallationResponse';
import type { BBRUnitResponse } from './BBRUnitResponse';
export type BBRResponse = {
    property_relations: Array<BBRPropertyRelation>;
    plots: Array<BBRPlotResponse>;
    buildings: Array<BBRBuildingResponse>;
    units: Array<BBRUnitResponse>;
    staircases: Array<BBRStaircaseResponse>;
    floors: Array<BBRFloorResponse>;
    technical_installations: Array<BBRTechnicalInstallationResponse>;
    case_levels: Array<BBRCaseLevelResponse>;
};

