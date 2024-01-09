/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdresseModel } from './AdresseModel';
import type { BroekModel } from './BroekModel';
import type { EjendomVurderingModel } from './EjendomVurderingModel';
import type { HovedNoteringEnum } from './HovedNoteringEnum';
import type { MatrikelStrukturModel } from './MatrikelStrukturModel';
import type { TekstGruppeDateModel } from './TekstGruppeDateModel';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
import type { UmatrikuleretArealModel } from './UmatrikuleretArealModel';
export type EjendomStamoplysningerModel = {
    /**
     * Indeholder oplysninger for en adresse baseret på koder. Det kan fx være i en RolleStrukur (også fra snapshots), hvor adressen på en person eller virksomhed er angivet som standard OIO-adresse med vejkode/kommunekode (AddressSpecific), eller det kan være fra en adresseangivelse på en ejendom i selve anmeldelsen.
     */
    Adresse?: AdresseModel;
    /**
     * BestemtFastEjendomNummer
     */
    BestemtFastEjendomNummer?: number;
    /**
     * Ejendommens hovednotering
     */
    HovedNotering?: HovedNoteringEnum;
    /**
     * Samling af identifikatorer paa indskannede akter for en ejendom. Hver identifikator er filnavnet.
     */
    IndskannetAktSamling?: Array<string>;
    /**
     * Der kan være mere end en ejendomsvurdering knyttet til en ejendom identificeret via EjendomIdentifikator. Dette sker i de situationer, hvor der for en EjendomIdentifikator eksisterer flere BBR numre. Der er en vurdering per BBR nummer (RealPropertyStructure).
     */
    VurderingSamling?: Array<EjendomVurderingModel>;
    /**
     * Resulterende tekst fra Tinglysningsrettens behandling af særllige ekspeditionstyper af kategorien meddeleleser. Indholdet er relateret til den interne sagsportal.
     */
    TillaegstekstSamling?: Array<TekstGruppeNestedModel>;
    /**
     * AgriculturalNotationTypeText
     */
    Landbrugsnotering?: string;
    /**
     * Indeholder berigede matrikler.
     */
    MatrikelStrukturSamling?: Array<MatrikelStrukturModel>;
    /**
     * Angiver fordelingstal for ejerlejligheder og anparter.
     */
    Fordelingtal?: BroekModel;
    /**
     * Samling af noteringer på ejendommen
     */
    NoteringTekstSamling?: Array<TekstGruppeDateModel>;
    /**
     * Specificerer identifikation hvis et areal ikke er matrikuleret.
     */
    Umatrikuleretareal?: UmatrikuleretArealModel;
};

