/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TekstGruppeModel } from './TekstGruppeModel';
export type FraseModel = {
    /**
     * Angiver formatet for en identifikation af en erklæring, som er A eller T efterfulgt af 1-9 efterfulgt af et tal fra 0 til 3 gange.
     */
    Id: string;
    /**
     * Påtegningstekst, som angives via en Bemaerkningskode. Systemet tilføjer den tilhørende tekst.Hvis bemærkningskode angiver fritekst, bliver teksten angivet af tinglysningsrettenssagsbehandler. Hvis købesummen er mindre end halvdelen af den offentlige vurdering skal derangives en nærmere begrundelse for dette.
     */
    Tekst?: Array<TekstGruppeModel>;
};

