/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FuldmagtAnmeldtModel } from './FuldmagtAnmeldtModel';
import type { HaeftelsePantebrevFormularLovpligtigKodeEnum } from './HaeftelsePantebrevFormularLovpligtigKodeEnum';
import type { HaeftelseVilkaarRenteModel } from './HaeftelseVilkaarRenteModel';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
import type { VilkaarOpskrivningModel } from './VilkaarOpskrivningModel';
export type EjerpantebrevFastEjendomModel = {
    /**
     * Hovedstolen for et lån.
     */
    Beloeb: number;
    /**
     * ISO 4217 valutakode.
     */
    Valuta?: string;
    /**
     * Bruges hvis renten tillægges hovedstolen (HæftelseBeløb). Angives af hensyn til beregning af tinglysningsafgift og til vurdering af pantets stoerrelse.
     */
    VilkaarOpskrivning?: VilkaarOpskrivningModel;
    /**
     * Rentevilkår på en hæftelse.
     */
    VilkaarRente: HaeftelseVilkaarRenteModel;
    /**
     * HaeftelseVilkaarOpsigelseSamling
     */
    VilkaarOpsigelseSamling?: Array<TekstGruppeNestedModel>;
    /**
     * True angiver at haeftelsen er med oprykningsret. False angiver at automatisk oprykningsret er fravalgt.
     */
    OprykningsretIndikator: boolean;
    /**
     * Samling af saerlige bestemmelser og individuelle vilkaar som anvendes i haeftelser
     */
    SaerligBestemmelseSamling?: Array<TekstGruppeNestedModel>;
    /**
     * Samling af anden tekst som anvendes i haeftelser
     */
    AndenTekstSamling?: Array<TekstGruppeNestedModel>;
    /**
     * Angiver om hæftelsen har eller ikke har rektaklausul. True angiver at haeftelsen har rektaklausul. False angiver at haeftelsen ikke har rektaklausul.
     */
    KlausulRektaIndikator: boolean;
    /**
     * Angiver om der er forbud mod retsforfølgning i forbindelse med hæftelsen. Resulterer i teksten Dette pantebrev kan ikke gøres til genstand for individuel retsforfølgning.
     */
    RetsforfoelgningsforbudIndikator: boolean;
    /**
     * Samling af anmeldte fuldmagter.
     */
    FuldmagtAnmeldtSamling?: Array<FuldmagtAnmeldtModel>;
    /**
     * Angiver koder for Justitsministeriets lovpligtige pantebrevsformularer
     */
    PantebrevFormularLovpligtigKode?: HaeftelsePantebrevFormularLovpligtigKodeEnum;
    /**
     * Hvis true, indgår underpantbeløb med samme værdi som hæftelsesbeløb. Hvis false indgår ikke underpant.
     */
    UnderpantIndikator: boolean;
};

