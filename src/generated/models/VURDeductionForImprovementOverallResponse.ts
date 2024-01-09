/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VURDeductionForImprovement } from './VURDeductionForImprovement';
export type VURDeductionForImprovementOverallResponse = {
  /**
   * Summen af værdierne for fradrag for forbedringer.
   */
  value: number;
  /**
   * Årstallet angiver det år, hvor fradrag for forbedringer første gang blev givet.
   */
  first_year: number;
  deduction_for_improvement: Array<VURDeductionForImprovement>;
};
