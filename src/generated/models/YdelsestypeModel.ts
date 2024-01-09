/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HaeftelseRenteEnum } from './HaeftelseRenteEnum';
import type { TekstGruppeModel } from './TekstGruppeModel';
export type YdelsestypeModel = {
  /**
   * Angiver ydelsestypen. Fast eller variabel.
   */
  Type?: HaeftelseRenteEnum;
  /**
   * Beloeb med valuta. Kursoplysninger angives i TinglysningAfgift.
   */
  Beloeb?: number;
  /**
   * ISO 4217 valutakode.
   */
  Valuta?: string;
  /**
   * Angivelse af den procentdel af hovedstolen som skal betales hver termin og som ikke kan variere.
   */
  TerminProcentsats?: number;
  /**
   * Angivelse af betingelsen for beregning af ydelserne.
   */
  Tekst?: TekstGruppeModel;
};
