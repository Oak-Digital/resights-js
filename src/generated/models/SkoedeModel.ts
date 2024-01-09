/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomstInformationModel } from './AdkomstInformationModel';
import type { BygningsforholdKodeEnum } from './BygningsforholdKodeEnum';
import type { EjendomKategoriModel } from './EjendomKategoriModel';
import type { FuldmagtAnmeldtModel } from './FuldmagtAnmeldtModel';
import type { HandelKodeEnum } from './HandelKodeEnum';
import type { SkoedeHandelsbetingelserModel } from './SkoedeHandelsbetingelserModel';
import type { SkoedeKoebesumModel } from './SkoedeKoebesumModel';
import type { SkoedeUdenforKoebesumModel } from './SkoedeUdenforKoebesumModel';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
export type SkoedeModel = {
    /**
     * Angiver hvilken kategori som ejendommen tilhører.
     */
    EjendomKategori: EjendomKategoriModel;
    /**
     * Angiver oplysninger om eventuelle bygninger der er omfattet af handlen.
     */
    BygningsforholdKode?: BygningsforholdKodeEnum;
    /**
     * ISO 4217 valutakode.
     */
    ValutaKode?: string;
    /**
     * Angiver hvilken type handel som adkomstdokumentet indeholder.
     */
    HandelKode: HandelKodeEnum;
    /**
     * Til vurdering af fast ejendom knyttes informationer til hjælp af dette.
     */
    Information?: AdkomstInformationModel;
    /**
     * SkoedeOvertagelsesDato.
     */
    SkoedeOvertagelsesDato: string;
    /**
     * SkoedeKoebsaftaleDato.
     */
    SkoedeKoebsaftaleDato?: string;
    /**
     * Angiver et eventuelt internt referencenummer hos brugeren for købsaftalen..
     */
    SkoedeKoebsaftaleReference?: string;
    /**
     * Angiver den pris, som ejendommen er købt for. Alle beløb der angives skal være positive. I alt købesummen beregnes (IAltKoebesum = KontantKoebesum + ArvGaveBeloeb + OvertagneRestancer + AfloesningsbareServitutter + AnlaegsBidrag).
     */
    SkoedeKoebesum: SkoedeKoebesumModel;
    /**
     * Oplysninger om aktiver der overtages af køber udenfor købesummen.
     */
    SkoedeUdenforKoebesum?: SkoedeUdenforKoebesumModel;
    /**
     * Samling af anmeldte fuldmagter.
     */
    FuldmagtAnmeldtSamling?: Array<FuldmagtAnmeldtModel>;
    /**
     * True angiver at ejendommen overdrages som led i en virksomhedsoverdragelse. False angiver at ejendommen ikke overdrages som led i en virksomhedsoverdragelse.
     */
    VirksomhedOverdragelseIndikator: boolean;
    /**
     * Skal angives for ekspeditionstyperne 3, 4 og 207.
     */
    SkoedeHandelsbetingelser?: SkoedeHandelsbetingelserModel;
    /**
     * Skødetekst
     */
    SkoedeTekst?: Array<TekstGruppeNestedModel>;
};

