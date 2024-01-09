/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TekstGruppeModel } from './TekstGruppeModel';
export type FristInformationModel = {
    /**
     * FristDato
     */
    FristDato: string;
    /**
     * Bemærkningskode identificerer en standard bemærkningtekst, som tinglysningsretten kan anvende tilpåtegninger under behandlingen af en anmeldelse.
     */
    BemaerkningKode?: string;
    /**
     * Påtegningstekst, som angives via en Bemaerkningskode. Systemet tilføjer den tilhørende tekst.Hvis bemærkningskode angiver fritekst, bliver teksten angivet af tinglysningsrettenssagsbehandler. Hvis købesummen er mindre end halvdelen af den offentlige vurdering skal derangives en nærmere begrundelse for dette.
     */
    BemaerkningTekstAngivelse?: Array<TekstGruppeModel>;
};

