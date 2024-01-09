/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VURCeilingDeductionForImprovementOverallResponse } from './VURCeilingDeductionForImprovementOverallResponse';
export type VURCeilingResponse = {
  /**
   * Basisår er et år der ligger forud for det aktuelle vurderingsår, tidligst år 2001, og i hvis vurderingsniveau der skal foretages den nye ansættelse af grundværdi.
   */
  base_year: number;
  /**
   * Beregnet grundværdi i basisår. Dette er værdien, som danner grundlag for hele beregningen af grundskatteloftet.
   */
  land_value: number;
  /**
   * Kode for om basisåret er en Pgf 11 vurdering. Anvendes for Grundværdier med Basisår 2003, hvor der er to aktive vurderingsidenter med datoerne 1.1. og 1.10 Hvis værdien er J er det 1.1., ellers er det 1.10.
   */
  par11?: string;
  ceiling_deduction_for_improvement_overall?: VURCeilingDeductionForImprovementOverallResponse;
};
