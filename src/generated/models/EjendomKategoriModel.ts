/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EjendomKategoriEnum } from './EjendomKategoriEnum';
import type { TekstGruppeModel } from './TekstGruppeModel';
export type EjendomKategoriModel = {
    /**
     * Angiver hvilken kategori som ejendommen tilhører.
     */
    Kategori?: EjendomKategoriEnum;
    /**
     * Anvendes ikke efter 18.06.2016 iht VUA028 True angiver at koebesummen omfatter alle omkostninger til byggemodning. False angiver at koebesummen ikke omfatter disse omkostninge
     */
    ByggemodningsomkostningIndikator?: boolean;
    /**
     * Hvis antallet er 2 eller mere skal der vaere afgivet erklaering T13-21.
     */
    AntalBeboelseslejligheder?: number;
    /**
     * True angiver at mere end 50 procent af erhvervs- og boligarealerne har vaeret udlejet i seneste kalenderaar. False angiver at mindre end eller lig med 50 procent af erhvervs- og boligarealerne har vaeret udlejet i seneste kalenderaar.
     */
    UdlejningsgradIndikator?: boolean;
    /**
     * True angiver at ejendommen har vaeret anvendt til momspligtige formaal. False angiver at ejendommen ikke har vaeret anvendt til momspligtige formaal. En ejendom har vaeret anvendt til momspligtige formål, når en momsregistreret virksomhed har anvendt ejendommen til sine momspligtige aktiviteter, f.eks. som administrationsbygning, fabrikationsbygning, lagerbygning m.m. Der kan også være tale om, at overdrageren har opnået tilladelse til frivillig momsregistrering for udlejning, bortforpagtning eller salg af ejendommen, og ejendommen har været anvendt til disse formål.
     */
    MomspligtigeformaalIndikator?: boolean;
    /**
     * True angiver at der er tale om en udlejningsejendom og der skal angives antallet af beboelseslejemaal og antallet af erhvervslejemaal med tilhoerende erklaering T22-30. False angiver at der ikke er tale om en udlejningsejendom.
     */
    UdlejningsejendomIndikator?: boolean;
    /**
     * Hvis der er tale om en udlejningsejendom skal antallet af beboelseslejemaal angives. Hvis antallet er større end 5 skal der laves en tilhoerende erklæring T22-30.
     */
    AntalBeboelseslejemaal?: number;
    /**
     * Hvis der er tale om en udlejningsejendom skal antallet af erhvervslejemaal angives. Hvis antallet af beboelseslejemaal og erhvervslejemaal er stoeere end 12 skal der afgives en tilhoerende erklaering T22-30
     */
    AntalErhvervslejemaal?: number;
    /**
     * EjendomKategoriTekst
     */
    Tekst?: string;
    /**
     * EjendomKategoriBeskrivelse for valg EjendomKategoriAnden i EjendomKategori
     */
    Beskrivelse?: Array<TekstGruppeModel>;
};

