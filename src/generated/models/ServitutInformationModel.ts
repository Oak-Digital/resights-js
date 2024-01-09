/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServitutAndetEnum } from './ServitutAndetEnum';
import type { ServitutAnvendelseEnum } from './ServitutAnvendelseEnum';
import type { ServitutBebyggelseEnum } from './ServitutBebyggelseEnum';
import type { ServitutBrugsLejeForholdEnum } from './ServitutBrugsLejeForholdEnum';
import type { ServitutEjendomsforholdEnum } from './ServitutEjendomsforholdEnum';
import type { ServitutFaerdselEnum } from './ServitutFaerdselEnum';
import type { ServitutForsyningEnum } from './ServitutForsyningEnum';
import type { ServitutKoebSalgEnum } from './ServitutKoebSalgEnum';
import type { ServitutLedningerEnum } from './ServitutLedningerEnum';
import type { ServitutTekniskeAnlaegEnum } from './ServitutTekniskeAnlaegEnum';
export type ServitutInformationModel = {
  /**
   * Angiver sidste dato for en anmodet tidsbegrænsning for et tinglysningsdokument.
   */
  Tidsbegraensning?: string;
  /**
   * Angiver en kode for indholdet af et afsnit om køb og salg i en servitut.
   */
  KoebSalg?: ServitutKoebSalgEnum;
  /**
   * Angiver en kode for indholdet af et afsnit om anvendelse i en servitut.
   */
  Anvendelse?: ServitutAnvendelseEnum;
  /**
   * Angiver en kode for indholdet af et afsnit om bebyggelse i en servitut.
   */
  Bebyggelse?: ServitutBebyggelseEnum;
  /**
   * Udgået - bibeholdt aht. bagudkompatibilitet
   */
  Ejendomsforhold?: ServitutEjendomsforholdEnum;
  /**
   * Angiver en kode for indholdet af et afsnit om tekniske anlæg i en servitut.
   */
  TekniskeAnlaeg?: ServitutTekniskeAnlaegEnum;
  /**
   * Udgået - bibeholdt aht. bagudkompatibilitet
   */
  Ledninger?: ServitutLedningerEnum;
  /**
   * Angiver en kode for indholdet af et afsnit om færdsel i en servitut.
   */
  Faerdsel?: ServitutFaerdselEnum;
  /**
   * Udgået - bibeholdt aht. bagudkompatibilitet
   */
  Forsyning?: ServitutForsyningEnum;
  /**
   * Angiver en kode for indholdet af et afsnit om brugs- eller lejeforhold i en servitut.
   */
  BrugsLejeForhold?: ServitutBrugsLejeForholdEnum;
  /**
   * Angiver en kode for indholdet af et afsnit om andet i en servitut. I forbindelse med kategoriseringen af de nuværende servitutter, er der foretaget inddeling af de servitutter, der er tinglyst på mere end 2.000 ejendomme. De øvrige servitutter, dog med undtagelse af lokalplaner, byplanvedtægter, samejeover- enskomster og salgs- og pantsætningsforbud, er alle angivet i kategorien 'ikke-kategoriseret'. Denne kategori er således en opsamling af de servitutter, hvor der ikke konkret er taget stilling til, hvilken kategori som den pågældende servitut tilhører. Denne kategori skal således ikke sammenblandes med kategorien 'Andet - andet', hvor man konkret har taget stilling til, at servitutindholdet ikke berettiger til at blive placeret i en af de andre kategorier.
   */
  Andet?: ServitutAndetEnum;
  /**
   * Her angives information i fri tekst. Der vil ikke optræde koder i dette felt og man skal vise indholdet som fri tekst.
   */
  Fritekst?: string;
  /**
   * Angiver om servitutten kan tinglyses med fortrinsret.
   */
  Fortrinsret?: boolean;
  /**
   * Tekst fir servitut som kan tinglyses med fortingsret.
   */
  FortrinsretTekst?: string;
  /**
   * True angiver at servitutten kan tinglyses uden ejers tiltrædelse.
   */
  KanTinglysesUdenEjersTiltraedelse?: boolean;
  /**
   * True angiver at servitutten tinglyses med prioritet forud for gæld og servitutter
   */
  KanTinglysesMedPrioritetForudForGaeldOgServitutter?: boolean;
  /**
   * True angiver at servitutten har betydning for ejendommens værdi
   */
  HarBetydningForEjendommensVaerdi?: boolean;
};
