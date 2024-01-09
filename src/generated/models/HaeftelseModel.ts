/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnmaerkningModel } from './AnmaerkningModel';
import type { DokumentInformationOverfoertModel } from './DokumentInformationOverfoertModel';
import type { FristInformationModel } from './FristInformationModel';
import type { HaeftelseCompleteTypeEnum } from './HaeftelseCompleteTypeEnum';
import type { HaeftelseLaantypeKodeEnum } from './HaeftelseLaantypeKodeEnum';
import type { HaeftelsePantebrevFormularLovpligtigKodeEnum } from './HaeftelsePantebrevFormularLovpligtigKodeEnum';
import type { HaeftelseRenteModel } from './HaeftelseRenteModel';
import type { ImplicitFuldmagtModel } from './ImplicitFuldmagtModel';
import type { OgsaaLystPaaModel } from './OgsaaLystPaaModel';
import type { RespektModel } from './RespektModel';
import type { RettighedsspaltningStatusEnum } from './RettighedsspaltningStatusEnum';
import type { RolleInformationModel } from './RolleInformationModel';
import type { SaerligeLaanevilkaarEnum } from './SaerligeLaanevilkaarEnum';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
import type { UnderpantrettighedModel } from './UnderpantrettighedModel';
export type HaeftelseModel = {
    /**
     * Identifikation af et dokument, som kan være et adkomst-, hæftelses- eller servitutdokument.
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
     * Angiver hæftelsestypen.
     */
    Type?: HaeftelseCompleteTypeEnum;
    /**
     * Tinglysningsdatoen er tidspunktet for modtagelsen af en anmeldelse, der indeholder oprettende ekspeditionstype. Tinglysningsdatoen viser altid datoen for den oprindelige tinglysning. Datoen for eventuelle påtegninger kan udelukkende ses i akten via revisionssporet.
     */
    TinglysningDato: string;
    /**
     * Dato for seneste påtegning
     */
    SenestPaategnetDato?: string;
    /**
     * Identifikation af en rettighed. Betegnelsen rettighed dækker alle de former for sammenkob- linger som et rettighedsdokument (DokumentIdentifikator) kan registrere i forhold til et tinglysningsobjekt.
     */
    PantrettighedId: string;
    /**
     * Den faktiske prioritet for rettigheden. Ud af dokumentet kan læses respekterne, som angiver den ønskede prioritet. Dette modereres evt. af anmærkninger og giver den faktiske prioritet.
     */
    PantrettighedPrioritetNummer: number;
    /**
     * Angiver koder for Justitsministeriets lovpligtige pantebrevsformularer
     */
    PantebrevFormularLovpligtigKode?: HaeftelsePantebrevFormularLovpligtigKodeEnum;
    /**
     * Information om kreditorer på det valgte tingslysningsopbjekt
     */
    KreditorSamling?: Array<RolleInformationModel>;
    /**
     * Information om debitorer på det valgte tingslysningsopbjekt.
     */
    DebitorSamling?: Array<RolleInformationModel>;
    /**
     * Information om meddelelseshavere på det valgte tingslysningsopbjekt
     */
    MeddelelseshaverSamling?: Array<RolleInformationModel>;
    /**
     * Angiver et underpant i en pantrettighed. Underpant har deres egen underordnede prioritetsstilling og sin egen unikke rettighedsidentifkator. Der returneres identifikation af underpantets dokument i form af DokumenRevisionIdentifikator og underpantets beløb.
     */
    UnderpantrettighedSamling?: Array<UnderpantrettighedModel>;
    /**
     * Beløb på hæftelse.
     */
    Beloeb: number;
    /**
     * ISO 4217 valutakode
     */
    BeloebValuta: string;
    /**
     * Deltabeløb ved forhøjelser og nedsættelser inden for det enkelte tinglysningsobjekt.
     */
    DeltaBeloeb?: number;
    /**
     * Oplysninger om rente på en hæftelse. Rente kan enten være fast eller variabel. Renten skal altid angives. Hvis der er aftale om ingen rente skal den angives som nul i HaeftelseRenteFast.
     */
    Rente?: HaeftelseRenteModel;
    /**
     * Angives for et overført dokument, hvis renten ikke er ændret ved påtegning efter overførslen.
     */
    RenteOverfoert?: string;
    /**
     * Samling af anmaerkninger. Det kan være anmaerkninger om servitutter og hæftelser angivet ved nummer. Anmærkninger vedrører altid respekter. Mangler der i en anmeldelse respekt for en eller flere hæftelser eller servitutter, giver sagsbehandlingen anledning til anmærkninger herom. Anmærkning for servitutter indeholder kode for yderligere oplysninger om servitutten.
     */
    AnmaerkningSamling?: Array<AnmaerkningModel>;
    /**
     * Samling af respekter.
     */
    RespektSamling?: Array<RespektModel>;
    /**
     * Her angives information i fri tekst, som ikke kan placeres andensteds. Der vil ikke optræde koder i dette felt og man skal vise indholdet som fri tekst. Feltet er relateret til arbejdet med med den interne sagsportal.
     */
    FritekstInformationTekst?: string;
    /**
     * Det totale tinglysningsbeløb i danske kroner, der er betalt for anmeldelsen, der berørte det pågældende dokument. Beløbet kan dække flere dokumenter, hvis behandlingen af anmeldelsen har resulteret i flere dokumenter eller dokumentrevisioner.
     */
    TinglysningAfgiftBetalt?: number;
    /**
     * True angiver at der findes en erklæring om at hæftelse alene indestår med henblik på overførsel af tinglysningsafgift.
     */
    TinglysningAfgiftOverfoerselIndikator: boolean;
    /**
     * Kun for overførte dokumenter: True angiver at pantebrevet er digitaliseret og papir udgaven hermed er ugyldig.
     */
    KonverteretDigitalPantebrevIndikator?: boolean;
    /**
     * Angiver status for en spaltet rettighed.
     */
    RettighedsspaltningStatusTekst?: RettighedsspaltningStatusEnum;
    /**
     * Særlige lånevilkår for en fremtidig hæftelse.
     */
    SaerligeLaanevilkaarSamling?: Array<SaerligeLaanevilkaarEnum>;
    /**
     * Type af lån i pantebrev.
     */
    LaantypeKode?: HaeftelseLaantypeKodeEnum;
    /**
     * Kreditors egen populær betegnelse for lånet. Undgå gentagelse af vilkår som er angivet andet sted.
     */
    KreditorbetegnelseTekst?: TekstGruppeNestedModel;
    /**
     * Angiver enten en oplysende tekst givet af Tinglysningsmedarbejderen i den interne sagsportal eller et antal tillægstekster fra overførslen.
     */
    TillaegstekstSamling?: Array<TekstGruppeNestedModel>;
    /**
     * FristInformation ved tinglysning med frist. Her oplyses årsag og fristdato.
     */
    FristInformationSamling?: Array<FristInformationModel>;
    /**
     * Angiver eventuelt yderligere matrikler/biler rettigheden er lyst på. Matrikler gives via EjendomIdentifikatorer. Antallet fremgår af OgsaaLystPaaAntal.
     */
    OgsaaLystPaa?: OgsaaLystPaaModel;
    /**
     * Dokument information for et fra TLS overført dokument, som ikke er angivet andre steder i strukturen.
     */
    InformationOverfoert?: DokumentInformationOverfoertModel;
    Andel?: number;
    AndelTaeller?: number;
    AndelNaevner?: number;
    /**
     * Samling af anmeldte fuldmagter.
     */
    ImplicitFuldmagtSamling?: Array<ImplicitFuldmagtModel>;
};

