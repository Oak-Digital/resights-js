/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TinglysningspaategningModel } from './TinglysningspaategningModel';
export type SenesteAnmeldelseSvarModel = {
    /**
     * Identifikation af en anmeldelse.
     */
    Id: string;
    /**
     * Tidspunktet for modtagelsen af anmeldelsen. AnmeldelsesTidspunktet er det tidspunktet anmeldelsen er gældende fra og er samtidigt det juridiske tinglysningstidspunkt. AnmeldelsesTidpunktet tildeles af e-TL systemet ved modtagelsen af en anmeldelse. AnmeldelsesTidspunktet indeholder dato og tid. AnmeldelsesTidspunktet er angivet som GMT +1 uden sommer- eller vintertid
     */
    AnmeldelsesTidspunkt: string;
    /**
     * Indeholder Tinglysningsrettens endelige tinglysningspåtegning til de tinglysningsobjekter, der berøres af anmeldelsen. Tinglysningspåtegningen er en samling af tinglysningspåtegningselementer, men skal betragtes som en samlet påtegning. Tinglysningspåtegningen skabes efter behandling af anmeldelsen. Dette skaber evt. anmærkninger og bemærkninger, samt listning af de dokumenter og rettigheder, som anmeldelsen skaber i Aktuelt Tinglyste Rettigheder. Påtegningen er generisk i forhold til forskellige ekspeditionstyper. Hvert TinglysningPaategningElement udtaler sig om status i forhold til kombination af tinglysningsobjekt og ekspeditionstype. Herunder er eksempler der skal illustrere, hvordan indholdet af TinglysningspaategningElementSamling kan være. Oprettende dokumenter: Hvis et ejerpantebrev anmeldes med angivelse af en underpant, bliver der oprettet to Tinglysningpaategning elementer. Første element vil vedrøre det oprettede ejerpantebrev. Det andet element vil vedrøre den oprettede underpanterklæring. Påtegning: Hvis der er tale om en påtegning af et ejerpantebrev, der vedrører tre ejendomme, oprettes der tre TinglysningspaategningElement elementer, nemlig et for hver ejendom. I første TinglysningspaategningElement element indgår EjendomIdentifikator for ejendom-1 som TinlysningsObjektIdentifikator og ejerpantebrevets nye DokumentRevisionIdentifikator i DokumentRevisionIdentikator. Alle bemærkninger, anmærkninger og frister vedr. ejendom-1 angives i dette TinglysningspaategningElement element. I Rettighed, angives den RettighedIdentifikator, der binder den nye revision af Ejerpantebrevet sammen med ejendom-1. Hvis der ikke er tale om prioritetsspaltning er denne RettighedIdentifikator den samme ved tidligere version af dokumentet. I anden TinglysningspaategningElement element indgår EjendomIdentifikator for ejendom-2 og ejerpantebrevets DokumentRevisionIdentifikator. Alle anmærkninger og frister vedr. ejendom-2 angives i dette TinglysningspaategningElement element. Ejerpantebrevets nye DokumentRevisionIdentifikator angives (samme som ved ejendom-1). I RettighedsSamling angives den RettighedsIdentifikator, der binder den nye revision af Ejerpantebrevet sammen med ejendom-2. Tredie TinglysningspaategningElement element for ejendom-3 udfyldes efter samme metodik som ejendom-1 og ejendom-2. Prioritetsspaltning: Hvis der er tale om prioritetsspaltning, vil det fremgå af den RettighedIdentifikator og prioritet, der indgår i TinglysningpaategningElementet for ejendom-1, ejendom-2 og ejendom-3'. RettighedIdentifikator vil være forskellig fra den RettighedIdentifikator, der hører til den oprindelige version af ejerpantebrevet. Man finder den oprindelige RettighedIdentifikator ved at kigge i snapshotsamlingens RettighedIdentifikatorSamling (RettighedIdentifikatorStruktur). Her skal man finde det element, der indeholder en TinglysningObjektIdentifikator med den DokumentRevisionIdentifikator, der er lig med DokumentRevisionIdentifikator angivet i anmeldelsen. Man finder samme sted prioriteten og kan dermed se om de er højere end den oprindelige version af ejerpantebrevet.
     */
    TinglysningspaategningSamling: Array<TinglysningspaategningModel>;
};

