/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UmatrikuleretTypeEnum } from './UmatrikuleretTypeEnum';
export type UmatrikuleretArealModel = {
  /**
   * UmatikuleretIdentifikator er et løbenummer på mellem 1 og 7 tal
   */
  Id: number;
  /**
   * Type på det umatrikuleretareal. UMA = Umatrikuleretareal, Søterritorie = Soeterritorie
   */
  Type?: UmatrikuleretTypeEnum;
  /**
   * Den af de tidligere 82 retskredse, som ejendommen tilhørte.
   */
  Retskreds?: number;
  /**
   * Umatrikuleretareal beskrivelse
   */
  Beskrivelse?: string;
};
