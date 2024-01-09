/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomstTypeEnum } from './AdkomstTypeEnum';
import type { HaeftelseTypeEnum } from './HaeftelseTypeEnum';
import type { RettighedModelSimpel } from './RettighedModelSimpel';
import type { ServitutTypeEnum } from './ServitutTypeEnum';
export type DokumentRettighedModel = {
    /**
     * Identifikation af et dokument, som kan være et adkomst-, hæftelses- eller servitutdokument.
     */
    Id: string;
    /**
     * Revisionsnummer for rettighedsdokument.
     */
    RevisionNummer: number;
    /**
     * For konverterede data er dokument-alias dato, løbenummer og retskreds for det konverterede dokument. Elementet er opbygget af dato der består af 8 tal på formen yyyymmdd, herefter kommer bindestreg. Løbenummer indeholder 1 til 6 tal. Der er ikke foranstillede nuller. Herefter kommer en bindestreg. Retskreds består af 2 tal, f. eks. 01 eller 19. Hvis der findes flere konverteret dokumenter med samme dato/løbenummer, får disse tilføjet et suffix på fem tegn: [-][ét tegns dokumenttype][trecifret løbenr]. Dokumentypen er enten A (adkomstdokument), H (hæftelsesdokument) eller S (servitutdokument). Eksempler: 20060304-123456-19, 19950507-12345-04, 19981209-1234-21-H0001 og 11111111-0-10-H0054
     */
    AliasAktHistoriskId?: string;
    /**
     * Angiver adkomsttype.
     */
    AdkomstType?: AdkomstTypeEnum;
    /**
     * Angiver hæftelsetype.
     */
    HaeftelseType?: HaeftelseTypeEnum;
    /**
     * Angiver servituttype.
     */
    ServitutType?: ServitutTypeEnum;
    RettighedSamling: Array<RettighedModelSimpel>;
};

