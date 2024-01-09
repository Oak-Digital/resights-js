/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EJFPUnit = {
  /**
   * Angiver produktionsenhedens p-nr.
   */
  p_number: string;
  status: string;
  registration_from: string;
  registration_actor: string;
  effect_from: string;
  effect_actor: string;
  /**
   * Angiver virksomhedens navn.
   */
  name?: string;
  /**
   * Angiver om virksomheden er reklamebeskyttet.
   */
  marketing_protection: boolean;
  address_text?: string;
  street_code?: number;
  street_name?: string;
  house_number_from?: string;
  house_number_to?: string;
  floor?: string;
  door?: string;
  supplementary_city_name?: string;
  zip_name?: string;
  zip_code?: string;
  municipality_code?: number;
  municipality_name?: string;
  country_code?: string;
  co_name?: string;
};
