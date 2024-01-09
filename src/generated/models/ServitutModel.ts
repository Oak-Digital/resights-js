/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnmaerkningModel } from './AnmaerkningModel';
import type { DokumentInformationOverfoertModel } from './DokumentInformationOverfoertModel';
import type { FristInformationModel } from './FristInformationModel';
import type { OgsaaLystPaaModel } from './OgsaaLystPaaModel';
import type { PaataleberettigetModel } from './PaataleberettigetModel';
import type { RettighedsspaltningStatusEnum } from './RettighedsspaltningStatusEnum';
import type { ServitutInformationModel } from './ServitutInformationModel';
import type { ServitutTypeEnum } from './ServitutTypeEnum';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
export type ServitutModel = {
  /**
   * Identifikation af et dokument, som kan være et adkomst-, hæftelses- eller servitutdokument. Kunne også kaldes en sagsreference
   */
  Id: string;
  /**
   * Revisionsnummer for rettighedsdokument.
   */
  RevisionNummer: number;
  /**
   * Unikt dokument-alias bestående af dags dato og et løbenummer. F.eks. 20080304-1234567890
   */
  AliasId?: string;
  /**
   * For konverterede data er dokument-alias dato, løbenummer og retskreds for det konverterede dokument. Elementet er opbygget af dato der består af 8 tal på formen yyyymmdd, herefter kommer bindestreg. Løbenummer indeholder 1 til 6 tal. Der er ikke foranstillede nuller. Herefter kommer en bindestreg. Retskreds består af 2 tal, f. eks. 01 eller 19. Hvis der findes flere konverteret dokumenter med samme dato/løbenummer, får disse tilføjet et suffix på fem tegn: [-][ét tegns dokumenttype][trecifret løbenr]. Dokumentypen er enten A (adkomstdokument), H (hæftelsesdokument) eller S (servitutdokument). Eksempler: 20060304-123456-19, 19950507-12345-04, 19981209-1234-21-H0001 og 11111111-0-10-H0054
   */
  AliasAktHistoriskId?: string;
  /**
   * Angiver om dokumentet oprindeligt blev oprettet i e-akten som resultat af overførslen fra TLS. True angiver at dokumentet blev oprettet i e-akten ifm. overførslen. False angiver at dokumentet ikke blev oprettet i e-akten ifm. overførslen.
   */
  Overfoert: boolean;
  /**
   * Paataleberettiget oplysninger.
   */
  PaataleberettigetSamling?: Array<PaataleberettigetModel>;
  /**
   * Dokument information for et fra TLS overført dokument, som ikke er angivet andre steder i strukturen.
   */
  InformationOverfoert?: DokumentInformationOverfoertModel;
  /**
   * ServitutType beskriver hvilke kategoriseringklasser af servituter der findes. Anden_servitut kan yderligere opdeles i kategorier og emner. Andet kan i servitutindhold bestå af kategorierne Andet, Anvendelse, Bebyggelse, BrugsLejeForhold, Ejendomsforhold, Faerdsel, Forsyning, KoebSalg, Ledninger, TekniskeAnlaeg.
   */
  Type: ServitutTypeEnum;
  /**
   * Tinglysningsdatoen er tidspunktet for modtagelsen af en anmeldelse, der indeholder oprettende ekspeditionstype. Tinglysningsdatoen viser altid datoen for den oprindelige tinglysning. Datoen for eventuelle påtegninger kan udelukkende ses i akten via revisionssporet.
   */
  TinglysningDato: string;
  /**
   * Tinglysningsdatoen er tidspunktet for modtagelsen af en anmeldelse, der indeholder oprettende ekspeditionstype. Tinglysningsdatoen viser altid datoen for den oprindelige tinglysning. Datoen for eventuelle påtegninger kan udelukkende ses i akten via revisionssporet.
   */
  RettighedId: string;
  /**
   * Tinglysningsdatoen er tidspunktet for modtagelsen af en anmeldelse, der indeholder oprettende ekspeditionstype. Tinglysningsdatoen viser altid datoen for den oprindelige tinglysning. Datoen for eventuelle påtegninger kan udelukkende ses i akten via revisionssporet.
   */
  PrioritetNummer: number;
  /**
   * Dato for seneste påtegning
   */
  SenestPaategnetDato?: string;
  /**
   * Summarisk udgave af servituttekst. Der returneres kun overskrift fra ServitutTekst. De samme regler gælder hvis der i e-TL er gemt i FraseIdentifikator, som indeholder overskrift og afsnit. Hvis der ikke er angivet overskrift optræder elementet ikke.
   */
  TekstSummarisk?: string;
  /**
   * Det totale tinglysningsbeløb i danske kroner, der er betalt for anmeldelsen, der berørte det pågældende dokument. Beløbet kan dække flere dokumenter, hvis behandlingen af anmeldelsen har resulteret i flere dokumenter eller dokumentrevisioner.
   */
  TinglysningAfgiftBetalt?: number;
  /**
   * Angiver eventuelt yderligere matrikler/biler rettigheden er lyst på. Matrikler gives via EjendomIdentifikatorer. Antallet fremgår af OgsaaLystPaaAntal.
   */
  OgsaaLystPaa?: OgsaaLystPaaModel;
  /**
   * Samling af anmaerkninger. Det kan være anmaerkninger om servitutter og hæftelser angivet ved nummer. Anmærkninger vedrører altid respekter. Mangler der i en anmeldelse respekt for en eller flere hæftelser eller servitutter, giver sagsbehandlingen anledning til anmærkninger herom. Anmærkning for servitutter indeholder kode for yderligere oplysninger om servitutten.
   */
  AnmaerkningSamling?: Array<AnmaerkningModel>;
  /**
   * Samling af TekstAngivelse.
   */
  TillaegstekstSamling?: Array<TekstGruppeNestedModel>;
  /**
   * Angiver status for en spaltet rettighed.
   */
  RettighedsspaltningStatusTekst?: RettighedsspaltningStatusEnum;
  /**
   * FristInformation ved tinglysning med frist. Her oplyses årsag og fristdato.
   */
  FristInformationSamling?: Array<FristInformationModel>;
  /**
   * Angiver detaljer om servitut, der kun vedrører servituttyperne AndenServitut. Reference til bilag af typen GML (Geographical Markup Language) filer til brug for Kort og Matrikelstyrelsens senere stedfæstelse af servituten, skal angives i bilagssamlingen i anmelderinformation.
   */
  Information?: ServitutInformationModel;
};
