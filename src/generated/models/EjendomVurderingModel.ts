/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EjendomVurderingModel = {
  /**
   * The code of a municipality. The plain text of a municipality is to be found by reference to the authority-data in the civilregistrationsystem. The code will always be unique.
   */
  Kommunekode: number;
  /**
   * The real property identifier is composed of 5 digits and a control number. The real property identifier is unique within the single municipality. The real property identifier identifies the single property within the municipality. When the real property identifier is complemented with the municipality code, it uniquely identifies the single property nationally.
   */
  Ejendomsnummer: number;
  /**
   * Da ESR og Tinglysningsretten ikke har samme ejendomsbegreb er der ikke altid 100% match mellem en ejendom i e-TL og ESR. Denne indikator er false, hvis det positivt kan afgøres, at der IKKE er 100% match mellem EjendomIdentifikator og RealPropertyIdentifier. Denne indikator er true, hvis det positivt kan afgøres, at der er 100% match mellem EjendomIdentifikator og RealPropertyIdentifier. Denne indikator udelades, hvis det ikke er muligt at afgøre graden af match.
   */
  DelvistBeroertESREjendomIndikator?: boolean;
  /**
   * Den samlede ejendomsværdi i hele kroner.
   */
  Ejendomsvaerdi?: number;
  /**
   * Den beregnede grundværdi fra hele kroner. Grundværdien er en del af den samlede ejendomsværdi.
   */
  Grundvaerdi?: number;
  /**
   * Dato for seneste ejendomsvurdering eller regulering af ejendomsværdien.
   */
  VurderingDato?: string;
};
