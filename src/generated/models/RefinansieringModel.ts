/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RefinansieringEnum } from './RefinansieringEnum';
export type RefinansieringModel = {
    /**
     * Her angives om refinansiering er aftalt eller muligt.
     */
    RefinansieringIndikator: RefinansieringEnum;
    /**
     * Angiver normal intervallet i maaneder hvorefter refinansiering foretages.
     */
    IntervalMaaneder?: number;
    /**
     * Første refinansiering år måned
     */
    FoersteRefinansieringAarMaaned?: string;
};

