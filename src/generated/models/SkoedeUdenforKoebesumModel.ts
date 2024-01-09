/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
export type SkoedeUdenforKoebesumModel = {
    /**
     * Angiver en enterprise beløb
     */
    EnterpriseBeloeb?: number;
    /**
     * Tekst til en enterprise.
     */
    EnterpriseTekst?: Array<TekstGruppeNestedModel>;
    /**
     * Under løsøre henregnes inventar og maskiner, varelager og materialer, husdyrbesætning beholdning af indhøstet avl, foderstoffer og kunstgødning, kvoter, leveringsrettigheder, betalingsrettigheder samt goodwill.
     */
    LoesoereDriftsmaterielBeloeb?: number;
    /**
     * DriftsmaterielTekst
     */
    LoesoereDriftsmaterielTekst?: Array<TekstGruppeNestedModel>;
    /**
     * Under husdyrbesætning henregnes kreaturer, svin og andre husdyr, der kan indgå i driften af et landbrug.
     */
    HusdyrbesaetningBeloeb?: number;
    /**
     * HusdyrTekst
     */
    HusdyrbesaetningTekst?: Array<TekstGruppeNestedModel>;
};

