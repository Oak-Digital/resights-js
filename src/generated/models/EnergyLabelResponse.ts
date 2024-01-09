/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnergyLabelCalculation } from './EnergyLabelCalculation';
import type { EnergyLabelOverviewResponse } from './EnergyLabelOverviewResponse';
export type EnergyLabelResponse = {
  /**
   * Energimærkningsnummer
   */
  energy_label_id: number;
  /**
   * Identitetsstreng på ”entitet” (energimærkning i søgeresultat) Vil være det samme som energimærkningsnummeret, men det kan evt. ændre sig.
   */
  id: number;
  /**
   * Energimærket er et udtryk for bygningens energieffektivitet. Energieffektiviteten beskrives på en skala med mærkerne A2020, A2015, A2010, B, C, D, E, F og G.
   */
  energy_label?: string;
  /**
   * Grundlag for energimærkning (fx CalculatedConsumption)
   */
  energy_label_based_on: string;
  /**
   * Anvendelse (fx SingleFamily)
   */
  energy_label_type_usage: string;
  /**
   * Tekst på enum-værdien af status_code
   */
  status: string;
  /**
   * 0: UNSPECIFIED ERROR - Uspecificeret fejl
   * 1: VALID - Energimærkning er gyldig
   * 2: INCOMPATIBLE - Energimærkning er gyldig, men indberetningsformat et er ikke understøttet
   * 3: EXPIRED - Fås normalt ikke, da udløbne energimærker frasorteres
   * 4: CORRECTED - Der er indsendt en korrektion til energimærket
   * 5: INVALID - Energimærket er ugyldigt
   * 6: INCOMPLETE - Energimærket er ikke komplet
   */
  status_code: number;
  /**
   * Kommunekode + ejendomsnummer.
   */
  esr_number: number;
  /**
   * Kommunekode i BBR-nummer
   */
  muncipality_code: number;
  /**
   * Ejendomsnummer i BBR-nummer. Some property numbers are invalid.
   */
  property_number: number;
  /**
   * Bygningsnummer i BBR-nummer. Hvis energimærkning omfatter flere bygninger, så angivers alle bygningsnumre adskilt med komma.
   */
  building_number: Array<number>;
  /**
   * Anvendelseskode (på indberetningstidspunktet)
   */
  usage_code: Array<number>;
  /**
   * Opførelsesår. Hvis energimærkning omfatter flere bygninger, så angives alle opføreslesår adskilt med komma
   */
  construction_year: Array<number>;
  /**
   * Primær energikilde til opvarmning
   */
  heat_supply?: string;
  /**
   * Hvis anvendelseskoden er 110, 120, eller 130, så angives link til den digitale energimærkningsordning på adressen. I øvrige tilfælde angives link til pdf-dokument på energimærkning.
   */
  link: string;
  /**
   * PDF rapport er tilgængelig
   */
  has_pdf: boolean;
  /**
   * XML på indberetning er tilgængelig.
   */
  has_xml: boolean;
  /**
   * ??
   */
  is_hidden: boolean;
  /**
   * true/false ved ikke hvad det betyder
   */
  is_mixed_usage: boolean;
  /**
   * Indberetningsformat på XML
   */
  schema_version: string;
  /**
   * Id på firma.
   */
  submitter_company_id?: number;
  /**
   * Navn på firma som energikonsulent er tilknyttet.
   */
  submitter_company_name: string;
  /**
   * Navn på energikonsulent
   */
  submitter_consultant_name?: string;
  /**
   * Gyldighedsdato fra (YYYY-MM-DD)
   */
  valid_from: string;
  /**
   * Gyldighedsdato til (YYYY-MM-DD)
   */
  valid_to: string;
  /**
   * Vejnavn
   */
  street_name: string;
  /**
   * Husnummer
   */
  house_number?: string;
  /**
   * Bynavn
   */
  zip_name?: string;
  /**
   * Postnummer
   */
  zip_code?: number;
  /**
   * Angiver koordinatet for bygningen energimærket omhandler.
   */
  geom?: string;
  overview?: EnergyLabelOverviewResponse;
  calculation?: EnergyLabelCalculation;
};
