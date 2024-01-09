/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SlksTypeEnum } from './SlksTypeEnum';
export type SLKSFBB = {
  id: number;
  type: SlksTypeEnum;
  preservation_status: number;
  conservation_value: number;
  address?: string;
  municipality_name?: string;
  esr_number?: number;
  municipality_code?: number;
  property_number?: number;
  building_number?: number;
  bbr_number?: string;
  preserved: boolean;
  geom: string;
};
