/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServitutInformationModel } from './ServitutInformationModel';
import type { ServitutTypeEnum } from './ServitutTypeEnum';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
export type ServitutStrukturModel = {
  /**
   * ServitutType beskriver hvilke kategoriseringklasser af servituter der findes. Anden_servitut kan yderligere opdeles i kategorier og emner. Disse er beskrevet i XML-skemaerne ServitutIndhold****Kode.xsd, hvor **** kan være følgende værdier Andet, Anvendelse, Bebyggelse, BrugsLejeForhold, Ejendomsforhold, Faerdsel, Forsyning, KoebSalg, Ledninger, TekniskeAnlaeg.
   */
  Type: ServitutTypeEnum;
  /**
   * Angiver detaljer om servitut, der kun vedrører servituttyperne AndenServitut. Reference til bilag af typen GML (Geographical Markup Language) filer til brug for Kort og Matrikelstyrelsens senere stedfæstelse af servituten, skal angives i bilagssamlingen i anmelderinformation.
   */
  Information?: ServitutInformationModel;
  /**
   * Samling af servituttekster. Der skal angives minimum 1 afsnit. Hvis der ikke angives en overskrift vil indhold af første afsnit blive vist som overskrift i summariske informationer om servitut.
   */
  TekstSamling: Array<TekstGruppeNestedModel>;
};
