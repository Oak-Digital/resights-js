/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TekstGruppeModel } from './TekstGruppeModel';
export type SkoedeKoebesumModel = {
    /**
     * Kontant købesum
     */
    KontantKoebesum: number;
    /**
     * Der er tale om arv, når en persons formue eller ejendele helt eller delvis udloddes til en anden pga. slægtskab eller ifølge testamentarisk bestemmelse - både ved a conto-udlodning eller ved den endelige udlodning. Der er tale om en gave, når man giver eller modtager noget af værdi, og der ikke skal betales fuldt ud for det.
     */
    ArvGaveBeloeb?: number;
    /**
     * Overtagne restancer
     */
    OvertagneRestancer?: number;
    /**
     * Afløsningsbare servitutter
     */
    AfloesningsbareServitutter?: number;
    /**
     * Anlægsbidrag
     */
    AnlaegsBidrag?: number;
    /**
     * Hvis købesummen er mindre end halvdelen af den offentlige vurdering skal der angives en nærmere begrundelse for dette.
     */
    IAltKoebesum: number;
    /**
     * Hvis købesummen er mindre end halvdelen af den offentlige vurdering skal der angives en nærmere begrundelse for dette.
     */
    KoebesumTekst?: Array<TekstGruppeModel>;
};

