/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnmelderBilagReferenceModel } from './AnmelderBilagReferenceModel';
import type { AnmelderTypeEnum } from './AnmelderTypeEnum';
import type { SupplerendeAdresseModel } from './SupplerendeAdresseModel';
export type AnmelderModel = {
  /**
   * CprNummer eller CvrNummer eller Myndighedskode
   */
  Id?: string;
  /**
   * Anmelders ID for reference til SnapshotSamling
   */
  SnapshotId?: string;
  /**
   * Angiver typen af anmelder.
   */
  Type?: AnmelderTypeEnum;
  /**
   * Navn
   */
  Navn?: string;
  /**
   * Telefon
   */
  Telefon?: string;
  /**
   * Email
   */
  Email?: string;
  /**
   * Addressetekst
   */
  AdresseTekst?: string;
  /**
   * Kontaktinformation for andre end anmelder.
   */
  SeparatAdresse?: Array<string>;
  /**
   * Kontaktinformation for andre end anmelder med sagsreference.
   */
  SupplerendeAdresseSamling?: Array<SupplerendeAdresseModel>;
  /**
   * Identifikation af eksternt sags nummer/referencenummer.
   */
  Sagsreference?: string;
  /**
   * Anmelders reference til et bilag, som ligger i Bilagsbanken. Disse bilag er at sammenligne med en følgeskrivelse til tinglysningsretten.
   */
  AnmelderBilagSamling?: Array<AnmelderBilagReferenceModel>;
};
