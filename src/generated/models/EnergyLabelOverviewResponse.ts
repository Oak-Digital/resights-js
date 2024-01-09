/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnergyLabelProposal } from './EnergyLabelProposal';
export type EnergyLabelOverviewResponse = {
    /**
     * Energimærkningsnummer
     */
    energy_label_id: number;
    /**
     * Ekstra udgift pr år.
     */
    extra_cost_per_year?: number;
    /**
     * Ekstra udgift pr år for alle forbedringsforslag
     */
    extra_cost_per_year_all_proposals?: number;
    /**
     * Ekstra udgift pr år for alle anbefalede forbedringsforslag
     */
    extra_cost_per_year_recommended_proposals?: number;
    /**
     * Mulig energi klassifikation ved alle profitable forbedringsforslag.
     */
    possible_energy_label_all_profitable_proposals?: string;
    /**
     * Mulig energi klassifikation ved alle forbedringsforslag.
     */
    possible_energy_label_all_proposals?: string;
    /**
     * Investering ved alle profitable forbedringsforslag.
     */
    total_profitable_investment?: number;
    /**
     * Investering ved alle anbefalede forbedringsforslag.
     */
    total_recommended_investment?: number;
    proposals: Array<EnergyLabelProposal>;
};

