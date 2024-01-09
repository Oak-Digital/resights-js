/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProDocumentModel } from './DomusProDocumentModel';
export type DomusProRenovationPlanModel = {
  /**
   * Arbejdets type
   */
  amount?: number;
  /**
   * Dette er normalt datoen for den generalforsamling hvor det blev vedtaget at der planlægges efter denne opgave
   */
  decisionDate: string;
  /**
   * Er renoveringsplanen markeret til sletning
   */
  deleted: boolean;
  /**
   * Året hvor opgaven planlægges gennemført. Hvis der f.eks. står 'Påbegyndes regnskabsåret 2019/20', så angives det laveste: '2019'
   */
  executionYear?: number;
  /**
   * Eksterne bemærkninger
   */
  externalComments?: string;
  /**
   * Senest opdateret
   */
  latestUpdate: string;
  renovationTypeIdentifier: number;
  /**
   * Arbejdets type
   */
  renovationTypeName: string;
  /**
   * Typer af arbejde som typisk indgår under dette hovedpunkt. Kan dog variere efter lokal praksis
   */
  renovationTypeIncludes: string;
  /**
   * Generalforsamlingsreferatet som oplysningen er hentet fra
   */
  associationDocument?: DomusProDocumentModel;
};
