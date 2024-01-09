/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HaeftelseRenteEnum } from './HaeftelseRenteEnum';
export type LoebetidModel = {
    /**
     * Skal angives for realkredit. Maksimal løbetid i antal måneder uanset den på nuværende tidspunkt aftalte løbetid. Eksempelvis hvis afviklingsperioden på lånet er aftalt til 360 månder (30 år) og der er mulighed for 240 månders (20 år) afdragsfrihed, skal værdien angives til 600 måneder (50 år).
     */
    MaksimalLoebetidMaaneder?: number;
    /**
     * Aftalt løbetid i antal måneder.
     */
    LoebetidMaaneder: number;
    /**
     * Angiver om det aftalte er med fast eller variabel løbetid. Vaerdien fast angives når afviklingsperioden er endelig fastlagt og ikke kan ændres f.eks. i forbindelse med afdragsfrie perioder. Værdien variabel angives når afvilkingsperioden kan ændres som følge af eksempelvis refinansiering eller i forbindelse med afdragsfrie perioder.
     */
    FastVariabelIndikator: HaeftelseRenteEnum;
};

