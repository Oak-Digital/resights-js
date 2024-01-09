/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KreditoplysningerModel } from './KreditoplysningerModel';
import type { OplysningspligtKodeEnum } from './OplysningspligtKodeEnum';
export type LovOmKreditaftalerModel = {
  /**
   * Angiver om og i givet fald hvordan en hæftelse er omfattet af lov om kreditaftaler.
   */
  OplysningspligtKode: OplysningspligtKodeEnum;
  /**
   * Kreditoplysninger som afgives i henhold til lov om kreditaftaler.
   */
  Kreditoplysninger?: KreditoplysningerModel;
};
