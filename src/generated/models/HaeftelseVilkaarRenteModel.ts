/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HaeftelseRenteModel } from './HaeftelseRenteModel';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
export type HaeftelseVilkaarRenteModel = {
  /**
   * Oplysninger om rente på en hæftelse. Rente kan enten være fast eller variabel. Renten skal altid angives. Hvis der er aftale om ingen rente skal den angives som nul i HaeftelseRenteFast.
   */
  Rente: HaeftelseRenteModel;
  /**
   * ForrentningDato
   */
  ForrentningDato?: string;
  /**
   * Angiver at i tilfælde af tvangsauktion over den/de pantsatte genstand/e forrentes ejerpantebrevet fra tidspunktet for tvangsauktion til betaling finder sted. Bruges kun på ejerpantebreve.
   */
  ForrentningTvangsauktionIndikator?: boolean;
  /**
   * HaeftelseVilkaarSamling
   */
  VilkaarSamling?: Array<TekstGruppeNestedModel>;
};
