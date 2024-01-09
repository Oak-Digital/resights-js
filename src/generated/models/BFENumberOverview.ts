/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BBRBuildingAggsActive } from './BBRBuildingAggsActive';
import type { BBRBuildingAggsBs } from './BBRBuildingAggsBs';
import type { BBRFloorAggs } from './BBRFloorAggs';
import type { BBRUnitAggsActive } from './BBRUnitAggsActive';
import type { BBRUnitAggsBs } from './BBRUnitAggsBs';
import type { BFENumberESRNumber } from './BFENumberESRNumber';
import type { DARAddress } from './DARAddress';
import type { EJFPrimaryOwnerCollection } from './EJFPrimaryOwnerCollection';
import type { EnergyLabelSimple } from './EnergyLabelSimple';
import type { LatestTradeResponse } from './LatestTradeResponse';
import type { MATLandAggs } from './MATLandAggs';
import type { MATLandSimple } from './MATLandSimple';
import type { PropertySubTypeEnum } from './PropertySubTypeEnum';
import type { PropertyTypeEnum } from './PropertyTypeEnum';
import type { resights__models__enums__property__ZoneEnum } from './resights__models__enums__property__ZoneEnum';
import type { VURValuationOverviewResponse } from './VURValuationOverviewResponse';
export type BFENumberOverview = {
  bfe_number: number;
  sfe_number: number;
  slug: string;
  type: PropertyTypeEnum;
  sub_type: PropertySubTypeEnum;
  ownership_code?: number;
  description: string;
  primary_usage?: number;
  construction_year?: number;
  rebuilding_year?: number;
  floor_area_br18?: number;
  constructed_share_br18?: number;
  zone: resights__models__enums__property__ZoneEnum;
  esr_numbers: Array<BFENumberESRNumber>;
  address?: DARAddress;
  energy_label?: EnergyLabelSimple;
  building?: BBRBuildingAggsActive;
  building_bs?: BBRBuildingAggsBs;
  unit?: BBRUnitAggsActive;
  unit_bs?: BBRUnitAggsBs;
  floor: BBRFloorAggs;
  land?: MATLandAggs;
  cadastres: Array<MATLandSimple>;
  primary_owner?: EJFPrimaryOwnerCollection;
  valuation?: VURValuationOverviewResponse;
  latest_trade?: LatestTradeResponse;
  centroid?: string;
  bbox?: string;
};
