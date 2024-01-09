/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ReportFigures = {
  year: string;
  start_date: string;
  end_date: string;
  instant?: string;
  currency?: string;
  cvr_number?: number;
  /**
   * Nettoomsætning
   */
  revenue?: number;
  /**
   * Driftsomkostninger
   */
  operating_cost?: number;
  /**
   * Bruttoresultat
   */
  gross_profit?: number;
  /**
   * Salgsomkostninger
   */
  sales_cost?: number;
  /**
   * Lønninger
   */
  wages_and_salaries?: number;
  /**
   * Pensioner
   */
  post_employment_benefits?: number;
  /**
   * Omkostninger til social sikring
   */
  social_security_contributions?: number;
  /**
   * Øverige personaleomkostninger
   */
  other_employee_expenses?: number;
  /**
   * Personaleomkostninger
   */
  employee_expenses?: number;
  /**
   * Øvrige driftsomkostninger
   */
  other_operating_expenses?: number;
  /**
   * Afskrivninger
   */
  depreciation?: number;
  /**
   * Primært resultat (EBIT)
   */
  ebit?: number;
  /**
   * Finansielle indtægter
   */
  finance_income?: number;
  /**
   * Finansielle udgifter
   */
  finance_costs?: number;
  /**
   * Resultat før skat (EBT)
   */
  profit_loss_before_tax?: number;
  /**
   * Skat af årets resultat
   */
  tax?: number;
  /**
   * Årets resultat
   */
  profit_loss?: number;
  /**
   * Dividende
   */
  dividend?: number;
  /**
   * Goodwill
   */
  goodwill?: number;
  /**
   * Øvrige immaterielle anlægsaktiver
   */
  other_intangible_assets?: number;
  /**
   * Immaterielle aktiver
   */
  intangible_assets?: number;
  /**
   * Investeringsejendomme
   */
  investment_property?: number;
  /**
   * Grunde og bygninger
   */
  land_and_buildings?: number;
  /**
   * Materielle anlægsaktiver (PPE)
   */
  property_plant_and_equipment?: number;
  /**
   * Kapitalandele i tilknyttede virksomheder
   */
  investments_in_group_enterprises?: number;
  /**
   * Kapitalandele i associerede virksomheder
   */
  investments_in_associates?: number;
  /**
   * Andre værdipapirer og kapitalandele
   */
  other_long_term_investments?: number;
  /**
   * Andre langfristede tilgodehavender
   */
  other_long_term_receivables?: number;
  /**
   * Finansielle anlægsaktiver i alt
   */
  long_term_investments_and_receivables?: number;
  /**
   * Anlægsaktiver i alt
   */
  non_current_assets?: number;
  /**
   * Fremstillede varer og handelsvarer
   */
  manufactured_goods?: number;
  /**
   * Varebeholdninger i alt
   */
  inventories?: number;
  /**
   * Tilgodehavender fra salg
   */
  short_term_receivables_trade?: number;
  /**
   * Kortfristede tilgodehavender hos tilknyttede virksomheder
   */
  short_term_receivables_group_enterprises?: number;
  /**
   * Kortfristede tilgodehavender hos associerede virksomheder
   */
  short_term_receivables_associates?: number;
  /**
   * Andre kortfristede tilgodehavender
   */
  short_term_receivables_others?: number;
  /**
   * Udskudt skat, aktiver
   */
  short_term_receivables_deferred_taxes?: number;
  /**
   * Periodeafgrænsningsposter, aktiver
   */
  short_term_receivables_deferred_income?: number;
  /**
   * Tilgodehavender i alt
   */
  short_term_receivables?: number;
  /**
   * Likvide beholdninger i alt
   */
  cash_and_cash_equivalents?: number;
  /**
   * Omsætningsaktiver i alt
   */
  current_assets?: number;
  /**
   * Aktiver i alt
   */
  assets?: number;
  /**
   * Selskabskapital
   */
  contributed_capital?: number;
  /**
   * Overført resultat
   */
  retained_earnings?: number;
  /**
   * Egenkapital i alt
   */
  equity?: number;
  /**
   * Hensættelser til udskudt skat
   */
  provisions_for_deferred_tax?: number;
  /**
   * Hensatte forpligtelser i alt
   */
  provisions?: number;
  /**
   * Gæld til kreditinstitutter i øvrigt
   */
  short_term_debt_credit_institutions?: number;
  /**
   * Modtagne forudbetalinger fra kunder
   */
  short_term_debt_prepayment_customers?: number;
  /**
   * Gæld til leverandører
   */
  short_term_debt_payables?: number;
  /**
   * Gæld til tilknyttede virksomheder
   */
  short_term_debt_group_enterprises?: number;
  /**
   * Kortfristet skyldig skat
   */
  short_term_debt_tax_payables?: number;
  /**
   * Øvrig kortfristet gæld
   */
  short_term_debt_payables_others?: number;
  /**
   * Kortfristet del af langfristet gæld
   */
  short_term_debt_part_of_long_term_liabilities?: number;
  /**
   * Øvrig kortfristet gæld
   */
  short_term_debt?: number;
  /**
   * Gæld til realkreditinstitutter
   */
  long_term_debt_mortgage?: number;
  /**
   * Anden langfritstet gæld
   */
  long_term_debt_others?: number;
  /**
   * Langfristede gældsforpligtelser i alt
   */
  long_term_debt?: number;
  /**
   * Gældsforpligtelser i alt
   */
  debt?: number;
  /**
   * Passiver i alt
   */
  liabilities?: number;
  /**
   * Antal ansatte
   */
  number_employees?: number;
};
