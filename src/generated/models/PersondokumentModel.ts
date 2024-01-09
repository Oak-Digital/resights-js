/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FristInformationModel } from './FristInformationModel';
import type { LoesoreStamoplysningerModel } from './LoesoreStamoplysningerModel';
import type { PersondokumentTypeEnum } from './PersondokumentTypeEnum';
import type { RolleInformationModel } from './RolleInformationModel';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
import type { TestamenteTypeEnum } from './TestamenteTypeEnum';
export type PersondokumentModel = {
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
     * Tinglysningsdatoen er tidspunktet for modtagelsen af en anmeldelse, der indeholder oprettende ekspeditionstype. Tinglysningsdatoen viser altid datoen for den oprindelige tinglysning. Datoen for eventuelle påtegninger kan udelukkende ses i akten via revisionssporet.
     */
    TinglysningDato: string;
    /**
     * Afgoerelsesdato.
     */
    AfgoerelseDato?: string;
    /**
     * Angiver det faktiske prioritetsnummer for en rettighed.
     */
    RettighedId: string;
    /**
     * Information om kreditorer på det valgte tingslysningsopbjekt
     */
    DisponentSamling?: Array<RolleInformationModel>;
    /**
     * Samling af TekstAngivelse.
     */
    TillaegstekstSamling?: Array<TekstGruppeNestedModel>;
    /**
     * FristInformation ved tinglysning med frist. Her oplyses årsag og fristdato.
     */
    FristInformationSamling?: Array<FristInformationModel>;
    /**
     * Dato for seneste påtegning
     */
    SenestPaategnetDato?: string;
    /**
     * True Angiver at dokumentet er gjort aktuel
     */
    Aktualiseret?: boolean;
    /**
     * Angiver mulige typer af persondokumenter i personbogen
     */
    Type: PersondokumentTypeEnum;
    /**
     * Angiver mulige typer af testamenter.
     */
    TestamenteType?: TestamenteTypeEnum;
    /**
     * CVR-nummer for byret, hvor testamentet er oprettet.
     */
    TestamenteMyndighedCvr?: string;
    /**
     * Navn på byret, hvor testamentet er oprettet.
     */
    TestamenteMyndighedNavn?: string;
    /**
     * Code, which identifies an authority. Every AuthorityCode belongs to a specific authority(reference to data of authorities in CPR). The AuthorityCode is unique.
     */
    TestamenteMyndighedAuthorityCode?: string;
    /**
     * Oplysninger om værgen
     */
    VaergeInformation?: LoesoreStamoplysningerModel;
    /**
     * Tekst som bruges i anmeldelser til personbogen. Her angives selve teksten tilTinglysningVærgemål(144), TinglysningÆgtepagt(145), Testamente(188) og PåtegningÆgtepagt(192)
     */
    TekstSamling?: Array<TekstGruppeNestedModel>;
};

