/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EnergyLabelCalculation = {
  /**
   * Energimærkningsnummer
   */
  energy_label_id: number;
  /**
   * Sekundær energikilde til opvarmning
   */
  additional_heat?: string;
  /**
   * Sekundær energikilde udgift
   */
  additional_heat_cost?: number;
  /**
   * Beregnet forbrug
   */
  calculated_consumption?: number;
  /**
   * Beregnet CO2 udledning
   */
  calculated_emission?: number;
  /**
   * Beregnet CO2 nedsættelse
   */
  calculated_emission_lowering?: number;
  /**
   * Beregnet energiforbrug
   */
  calculated_energy_consumption?: number;
  /**
   * Beregnet energibesparelse
   */
  calculated_energy_savings?: number;
  /**
   * El pris
   */
  electricity_price: number;
  /**
   * Ekstra udgift pr år
   */
  extra_cost_per_year?: number;
  /**
   * Fast omkostning
   */
  fixed_charge: number;
  /**
   * Primær energikilde til opvarmning
   */
  heat_supply?: string;
  /**
   * Primær energikilde udgift
   */
  heat_supply_cost?: number;
  /**
   * Investering ved valgte investringer
   */
  total_profitable_investment?: number;
};
