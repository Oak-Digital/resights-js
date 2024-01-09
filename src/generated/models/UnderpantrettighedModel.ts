/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnmaerkningModel } from './AnmaerkningModel';
import type { FristInformationModel } from './FristInformationModel';
import type { RolleInformationModel } from './RolleInformationModel';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
export type UnderpantrettighedModel = {
  /**
   * Identifikation af et dokument, som kan være et adkomst-, hæftelses- eller servitutdokument.
   */
  Id: string;
  /**
   * Unikt dokument-alias bestående af dags dato og et løbenummer. F.eks. 20080304-1234567890
   */
  AliasId?: string;
  /**
   * For konverterede data er dokument-alias dato, løbenummer og retskreds for det konverterede dokument. Elementet er opbygget af dato der består af 8 tal på formen yyyymmdd, herefter kommer bindestreg. Løbenummer indeholder 1 til 6 tal. Der er ikke foranstillede nuller. Herefter kommer en bindestreg. Retskreds består af 2 tal, f. eks. 01 eller 19. Hvis der findes flere konverteret dokumenter med samme dato/løbenummer, får disse tilføjet et suffix på fem tegn: [-][ét tegns dokumenttype][trecifret løbenr]. Dokumentypen er enten A (adkomstdokument), H (hæftelsesdokument) eller S (servitutdokument). Eksempler: 20060304-123456-19, 19950507-12345-04, 19981209-1234-21-H0001 og 11111111-0-10-H0054
   */
  AliasAktHistoriskId?: string;
  /**
   * Identifikation af en rettighed. Betegnelsen rettighed dækker alle de former for sammenkoblinger som et rettighedsdokument (DokumentIdentifikator) kan registrere i forhold til et tinglysningsobjekt.
   */
  RettighedId?: string;
  /**
   * Beløbsværdi. Tallet skal være nul eller positivt tal. Det kan maximalt være på 20 cifre og der kan maksimalt angives 2 decimaler.
   */
  UnderpantBeloeb?: number;
  /**
   * ISO 4217 valutakode.
   */
  UnderpantValuta?: string;
  /**
   * rioriteten for underpantet, ikke at forveksle med prioriteten for selve pantebrevet.
   */
  PrioritetNummer?: string;
  /**
   * Underpanthavere
   */
  UnderpanthaverSamling?: Array<RolleInformationModel>;
  /**
   * Samling af anmaerkninger. Det kan være anmaerkninger om servitutter og hæftelser angivet ved nummer. Anmærkninger vedrører altid respekter. Mangler der i en anmeldelse respekt for en eller flere hæftelser eller servitutter, giver sagsbehandlingen anledning til anmærkninger herom. Anmærkning for servitutter indeholder kode for yderligere oplysninger om servitutten.
   */
  AnmaerkningSamling?: Array<AnmaerkningModel>;
  /**
   * Samling af TekstAngivelse.
   */
  TillaegstekstSamling?: Array<TekstGruppeNestedModel>;
  /**
   * FristInformation ved tinglysning med frist. Her oplyses årsag og fristdato.
   */
  FristInformationSamling?: Array<FristInformationModel>;
};
