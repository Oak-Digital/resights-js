/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomstStrukturModel } from './AdkomstStrukturModel';
import type { AendringspaategningModel } from './AendringspaategningModel';
import type { AnmaerkningModel } from './AnmaerkningModel';
import type { AnmeldelseInformationModel } from './AnmeldelseInformationModel';
import type { DokumentTypeEnum } from './DokumentTypeEnum';
import type { FastEjendomMedRettighederModel } from './FastEjendomMedRettighederModel';
import type { FristInformationModel } from './FristInformationModel';
import type { HaeftelseStrukturModel } from './HaeftelseStrukturModel';
import type { SenesteAnmeldelseSvarModel } from './SenesteAnmeldelseSvarModel';
import type { ServitutStrukturModel } from './ServitutStrukturModel';
import type { SnapshotModel } from './SnapshotModel';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
export type ATDModel = {
  /**
   * Identifikation af et dokument, som kan være et adkomst-, hæftelses- eller servitutdokument. Kunne også kaldes en sagsreference
   */
  Id: string;
  /**
   * Angiver dokumentets type
   */
  Type?: DokumentTypeEnum;
  /**
   * Revisionsnummer for rettighedsdokument.
   */
  RevisionNummer: number;
  /**
   * Unikt dokument-alias bestående af dags dato og et løbenummer. F.eks. 20080304-1234567890
   */
  AliasId?: string;
  /**
   * Tinglysningsdatoen er tidspunktet for modtagelsen af en anmeldelse, der indeholder oprettende ekspeditionstype. Tinglysningsdatoen viser altid datoen for den oprindelige tinglysning. Datoen for eventuelle påtegninger kan udelukkende ses i akten via revisionssporet.
   */
  TinglysningDato: string;
  /**
   * Samling af faste ejendomme, med tilhørende pantrettigheder
   */
  FastEjendomMedRettighederSamling?: Array<FastEjendomMedRettighederModel>;
  /**
   * Detail informationer om adkomster. Der indgår ikke identifikatorer på adkomstdokumentet i denne.
   */
  AdkomstStruktur?: AdkomstStrukturModel;
  /**
   * Detail informationer om hæftelser. Der indgår ikke identifikatorer på hæftelsesdokumentet i denne. Der oplyses også her information evt. underpant.
   */
  HaeftelseStruktur?: HaeftelseStrukturModel;
  /**
   * Beskrivelse af servitut.
   */
  ServitutStruktur?: ServitutStrukturModel;
  /**
   * Angiver anmeldelsesinformation som er relevant i den elektroniske akt.
   */
  AnmeldelseInformation?: AnmeldelseInformationModel;
  /**
   * Samling af anmaerkninger. Det kan være anmaerkninger om servitutter og hæftelser angivet ved nummer. Anmærkninger vedrører altid respekter. Mangler der i en anmeldelse respekt for en eller flere hæftelser eller servitutter, giver sagsbehandlingen anledning til anmærkninger herom. Anmærkning for servitutter indeholder kode for yderligere oplysninger om servitutten.
   */
  AnmaerkningSamling?: Array<AnmaerkningModel>;
  /**
   * FristInformation ved tinglysning med frist. Her oplyses årsag og fristdato.
   */
  FristInformationSamling?: Array<FristInformationModel>;
  /**
   * Formålet med snapshotsamlingen er at give supplerende information til identifikatorer, der er angivet i anmeldensen, samt supplere med information fra eksterne registre. Der er derfor ikke i snapshotsamlingens informationer direkte relation mellem identifikatorer i de forskellige samlinger. SnapshotSamling indeholder lister af nøgler og tilhørende datastrukturer udvalgte dele af en anmeldelse til e-TL.
   */
  Snapshot: SnapshotModel;
  /**
   * Oplysende tekster som tinglysningsretten i form af en berigelse påfører dokumentet.
   */
  TillaegstekstSamling?: Array<TekstGruppeNestedModel>;
  /**
   * Påtegninger som ligger på dokumentet, men som er tinglyst med frist eller hvor en forhøjelse er spaltet og som derfor ikke er 'flettet' ind i ATR-dokumentet endnu. I en anmeldelse med en kombinationspåtegning kan der indgå flere forskellige ændringer, som alle bliver samlet i én ny version af dokumentet. For ekspeditionstype 80 omsætter sagsbehandleren påtegningsteksten til én eller flere elementer under kombipåtegningen. Således er der ikke behov for at gemme og returnere selve den inddaterede påtegningstekst. Ændringer i roller (kreditorskift/transport, debitorskift, ændring af meddelelseshavere samt fuldmagtsændringer) er afspejlet i rollesamlingen og indgår derfor ikke som ændringspåtegning.
   */
  AendringspaategningSamling?: Array<AendringspaategningModel>;
  /**
   * True angiver at der findes en erklæring om at hæftelse alene indestår med henblik på overførsel af tinglysningsafgift.
   */
  TinglysningAfgiftOverfoerselIndikator: boolean;
  /**
   * Returnerer seneste anmeldelsessvar på dokumentet
   */
  SenesteAnmeldelseSvar?: SenesteAnmeldelseSvarModel;
  /**
   * Tidspunktet for en udskrift
   */
  UdskriftDatoTid: string;
};
