/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BroekModel } from './BroekModel';
import type { DelarealModel } from './DelarealModel';
import type { TekstGruppeDateModel } from './TekstGruppeDateModel';
export type MatrikelStrukturModel = {
    /**
     * Den tekstmæssige betegnelse af et ejerlav. Ejerlavsbetegnelsen er ikke entydig.
     */
    EjerlavNavn?: string;
    /**
     * En på landsbasis entydig identifikation af et ejerlav.
     */
    EjerlavKode?: number;
    /**
     * Entydig identifikation af en flade/parcel (matrikel) inden for et ejerlav. Ikke entydig på landsplan uden LandsejerlavsKoden
     */
    Matrikelnummer?: string;
    /**
     * Udtrykker særlige tilfælde, hvor man har andel af et fælleslod.
     */
    Faelleslod?: BroekModel;
    /**
     * Angiver et delareal, som altid er stedfæstet til netop et matrikelnummer. Delarealer er geografisk afgrænsede områder - benævnt og nummereret som delarealer - der fastlægges af landinspektør i forbindelse med en matrikulær ændring af en fast ejendom. Det er landinspektøren, der fastsætter nummereret på delarealet.
     */
    Delareal?: DelarealModel;
    /**
     * Også kaldet e-ref. UUID der identificere en ejendom på tværs af alle ejendomsregistre som fx tinglysning, kms, skat mv.
     */
    FaellesEjendomId?: string;
    /**
     * Indeholder grundarealets størrelse angivet for matrikel. Informationen er en berigelse, der sket under prøvelsen. Informationen stammer fra Tinglysningsretten.
     */
    Areal: number;
    /**
     * Indeholder matriklens approbationsdato, dvs. dato for godkendelse.
     */
    DatoForGodkendelse: string;
    /**
     * Det areal af et jordstykke (matrikel), der udgøres af vej. Værdien angives som heltal i kvadratmeter.
     */
    Vejareal?: number;
    /**
     * Den af de tidligere 82 retskredse, som ejendommen tilhørte.
     */
    Retskreds?: number;
    /**
     * Samling af noteringer på matriklen
     */
    NoteringTekstSamling?: Array<TekstGruppeDateModel>;
};

