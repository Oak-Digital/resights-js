/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AfdragsfrihedModel } from './AfdragsfrihedModel';
import type { BeloebModel } from './BeloebModel';
import type { BetalingTerminModel } from './BetalingTerminModel';
import type { HaeftelseBidragModel } from './HaeftelseBidragModel';
import type { MorarenteModel } from './MorarenteModel';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
import type { TilbagebetalingsmaadeKodeEnum } from './TilbagebetalingsmaadeKodeEnum';
import type { YdelsestypeModel } from './YdelsestypeModel';
export type VilkaarBetalingModel = {
  /**
   * Angiver terminsperioder og tilhørende forfaldstidspunkter. Skal altid anføres når der er aftalt betalinger af ydelser eller rente på hæftelsen. Er optional i forbindelse med stående lån uden rente.
   */
  BetalingTerminSamling?: Array<BetalingTerminModel>;
  /**
   * Dato for betaling af første ydelse. Ikke nødvendig at opgive for realkreditpantebreve.
   */
  FoersteBetalingDato?: string;
  /**
   * HaeftelseBetalingTerminFoerste
   */
  BetalingTerminFoerste?: BetalingTerminModel;
  /**
   * HaeftelseBetalingTerminSidste
   */
  BetalingTerminSidste?: BetalingTerminModel;
  /**
   * Anvendes alene på realkreditpantebreve.
   */
  Bidrag?: HaeftelseBidragModel;
  /**
   * HaeftelseBetalingerAarligtAntal
   */
  BetalingerAarligtAntal?: number;
  /**
   * Angiver oplysninger om morarente.
   */
  Morarente?: MorarenteModel;
  /**
   * Tilbagebetalingsmaade angiver hvorledes laanet tilbagebetales.
   */
  TilbagebetalingsmaadeKode: TilbagebetalingsmaadeKodeEnum;
  /**
   * HaeftelseYdelseAarligtSamlet
   */
  YdelseAarligtSamlet?: BeloebModel;
  /**
   * Kun relevant ved ikke-realkreditpantebreve.
   */
  Ydelsestype?: YdelsestypeModel;
  /**
   * Hvis denne ikke er angivet betyder det at der ikke er og ikke er mulighed for afdragsfrihed.
   */
  Afdragsfrihed?: AfdragsfrihedModel;
  /**
   * HaeftelseVilkaarSamling
   */
  VilkaarSamling?: Array<TekstGruppeNestedModel>;
};
