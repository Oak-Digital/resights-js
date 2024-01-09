/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FuldmagtAnmeldtModel } from './FuldmagtAnmeldtModel';
import type { SaerligLovgivningModel } from './SaerligLovgivningModel';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
export type SkadesloesbrevFastEjendomModel = {
    /**
     * Hovedstolen for et lån.
     */
    Beloeb: number;
    /**
     * ISO 4217 valutakode.
     */
    Valuta?: string;
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
     * True angiver at haeftelsen er med oprykningsret. False angiver at automatisk oprykningsret er fravalgt.
     */
    OprykningsretIndikator: boolean;
    /**
     * Indeholder oplysninger om lovgivning, som en anmeldelse kan henvise til, f.eks. omkring særlige vilkår for prioritering ved pantsætning af fast ejendom eller tinglysning af servitutter, der skal tillægges forrang. Felterne er opsat således, at alene det ene er nødvendigt, idet lovgivningen kan angives både struktureret eller som en tekststreng. Alle lovhenvisninger medfører, at anmeldelsen udtages til manuel behandling.
     */
    SaerligLovgivning?: SaerligLovgivningModel;
    /**
     * HaeftelseVilkaarSamling
     */
    VilkaarSamling?: Array<TekstGruppeNestedModel>;
    /**
     * Samling af anmeldte fuldmagter.
     */
    FuldmagtAnmeldtSamling?: Array<FuldmagtAnmeldtModel>;
};

