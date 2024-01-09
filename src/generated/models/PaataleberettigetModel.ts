/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EjendomIdentifikatorModel } from './EjendomIdentifikatorModel';
import type { PaataleberettigetTypeEnum } from './PaataleberettigetTypeEnum';
export type PaataleberettigetModel = {
  /**
   * CVR-nummer eller fødselsdato
   */
  Id?: string;
  /**
   * Navn på virksomhed eller person
   */
  Navn?: string;
  /**
   * EJENDOM eller VIRKSOMHED eller PERSON eller UKENDT
   */
  Type?: PaataleberettigetTypeEnum;
  /**
   * Identifikation af en ejendom.
   */
  EjendomIdentifikator?: EjendomIdentifikatorModel;
};
