/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AndenHaeftelseFastEjendomModel } from './AndenHaeftelseFastEjendomModel';
import type { ArrestFastEjendomModel } from './ArrestFastEjendomModel';
import type { EjerpantebrevFastEjendomModel } from './EjerpantebrevFastEjendomModel';
import type { HaeftelseTypeEnum } from './HaeftelseTypeEnum';
import type { IndekspantebrevFastEjendomModel } from './IndekspantebrevFastEjendomModel';
import type { PantebrevFastEjendomModel } from './PantebrevFastEjendomModel';
import type { RealkreditpantebrevModel } from './RealkreditpantebrevModel';
import type { SkadesloesbrevFastEjendomModel } from './SkadesloesbrevFastEjendomModel';
import type { UdlaegFastEjendomModel } from './UdlaegFastEjendomModel';
import type { UnderpantrettighedModel } from './UnderpantrettighedModel';
export type HaeftelseStrukturModel = {
  /**
   * Det tinglyste hæftelses dokument.
   */
  Type: HaeftelseTypeEnum;
  /**
   * Anden hæftelse omfatter f.eks. servitutter lyst pantstiftende i fast ejendom.
   */
  AndenHaeftelseFastEjendom?: AndenHaeftelseFastEjendomModel;
  /**
   * Arrest i fast ejendom.
   */
  ArrestFastEjendom?: ArrestFastEjendomModel;
  /**
   * Ejerpantebrev for fast ejendom. Oenskes underpantsaetning foretaget samtidig med det paagaeldende ejerpantebrev, angives dette i separat ekspeditionstype (Underpant).
   */
  EjerpantebrevFastEjendom?: EjerpantebrevFastEjendomModel;
  /**
   * Indekspantebrev til fast ejendom.
   */
  IndekspantebrevFastEjendom?: IndekspantebrevFastEjendomModel;
  /**
   * Pantebrev for fast ejendom
   */
  PantebrevFastEjendom?: PantebrevFastEjendomModel;
  /**
   * Realkreditpantebrev
   */
  Realkreditpantebrev?: RealkreditpantebrevModel;
  /**
   * Skadesløsbrev for fast ejendom.
   */
  SkadesloesbrevFastEjendom?: SkadesloesbrevFastEjendomModel;
  /**
   * Udlæg i fast ejendom.
   */
  UdlaegFastEjendom?: UdlaegFastEjendomModel;
  /**
   * Angiver et underpant i en pantrettighed. Underpant har deres egen underordnede prioritetsstilling og sin egen unikke rettighedsidentifkator. Der returneres identifikation af underpantets dokument i form af DokumenRevisionIdentifikator og underpantets beløb.
   */
  UnderpantrettighedSamling?: Array<UnderpantrettighedModel>;
};
