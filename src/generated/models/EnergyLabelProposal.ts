/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EnergyLabelProposal = {
  /**
   * Energimærkningsnummer
   */
  energy_label_id: number;
  /**
   * Intern reference til forbedringsforslag i indberettet Xml.
   */
  id: number;
  /**
   * Investering.
   */
  investment?: number;
  /**
   * True/False : indikation om forbedringsforslag er profitabel.
   */
  profitable: boolean;
  /**
   * Kort beskrivelse af forbedringsforslag.
   */
  proposal_headline?: string;
  /**
   * True/False: indikation om forbedringsforslag er anbefalet af energikonsulent.
   */
  recommended: boolean;
  /**
   * Besparelse.
   */
  savings?: number;
  /**
   * Klassifikation på forbedring.
   */
  seeb_classification: string;
  /**
   * Deskription på seeb_classification
   */
  seeb_classification_description: string;
};
