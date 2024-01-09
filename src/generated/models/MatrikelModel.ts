/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MatrikelModel = {
  /**
   * Den tekstmæssige betegnelse af et ejerlav. Ejerlavsbetegnelsen er ikke entydig.
   */
  EjerlavNavn?: string;
  /**
   * En på landsbasis entydig identifikation af et ejerlav.
   */
  EjerlavKode?: number;
  /**
   * Entydig identifikation af en flade/parcel (matrikel) inden for et ejerlav. Ikke entydig på landsplan uden LandsejerlavsKoden
   */
  Matrikelnummer?: string;
};
