/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FuldmagtOmfangTekstEnum } from './FuldmagtOmfangTekstEnum';
import type { PersonVirksomhedEnum } from './PersonVirksomhedEnum';
export type FuldmagtAnmeldtModel = {
  /**
   * CprNummer eller CvrNummer eller Myndighedskode
   */
  Id?: string;
  /**
   * Angiver typen af anmelder.
   */
  FuldmagtType?: PersonVirksomhedEnum;
  /**
   * CprNummer eller CvrNummer
   */
  FuldmagtId?: string;
  /**
   * Angiver de mulige værdier for omfanget af en fuldmagt.
   */
  FuldmagtOmfangIdentifikator: number;
  /**
   * Angiver de mulige værdier for omfanget af en fuldmagt.
   */
  FuldmagtOmfangTekst?: FuldmagtOmfangTekstEnum;
  /**
   * Angiver en reference til en rolle for fuldmagtsgiver. Der kan angives fuldmagtsgiver ved implicit fuldmagt.
   */
  FuldmagtGiver?: string;
};
