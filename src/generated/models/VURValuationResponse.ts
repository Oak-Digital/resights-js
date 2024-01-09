/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VURCeilingResponse } from './VURCeilingResponse';
import type { VURDeductionForImprovementOverallResponse } from './VURDeductionForImprovementOverallResponse';
import type { VURDistribution } from './VURDistribution';
import type { VURExemption } from './VURExemption';
import type { VURLandValueSpecification } from './VURLandValueSpecification';
import type { VURValuationProperty } from './VURValuationProperty';
export type VURValuationResponse = {
    /**
     * Nøgle der entydig identificerer en ejendomsvurdering.
     */
    id: number;
    /**
     * Timestamp for hvornår en vurdering, en eventuel vurderingsændring, årsregulering eller §4/4A vurdering er opdateret enten maskinelt ved en batch-kørsel eller i forbindelse med sagsbehandling.
     */
    updated_at: string;
    /**
     * Liste af BFE-numre som er omfattet af vurderingen.
     */
    bfe_numbers?: Array<number>;
    /**
     * Det år vurderingen gælder for.
     */
    year: number;
    /**
     * Antal medvurderede lejligheder i den vurderede ejendom
     */
    number_valued_apartments: number;
    /**
     * Benyttelseskode angiver ejendommens benyttelse, som den er blevet fastlagt i forbindelse med en vurdering.
     */
    usage_code?: number;
    /**
     * Dækningsafgiftspligtig forskelsværdi for erhvervsejendomme eller dækningsafgiftspligtig forskelsværdi for offentlige ejendomme, der er fritaget for grundskyld.
     */
    coverage_charge_difference_value: number;
    /**
     * Kode, der angiver om ejendommen er helt eller delvis dækningsafgiftspligtig.
     */
    coverage_charge_duty_code?: string;
    /**
     * Koden angiver typen af dækningsafgiftspligten, enten afhængig af ejertype (offentlig) eller af ejendomstypen (erhvervsmæssig).
     */
    coverage_charge_duty_code_type?: string;
    /**
     * Den ved en vurdering ansatte ejendomsværdi (i hele kroner).
     */
    property_value: number;
    /**
     * Den ved vurdering ansatte grundværdi (i hele kroner).
     */
    land_value: number;
    /**
     * Kode der angiver den juridiske kategori, som ejendommen er tildelt ved denne ejendomsvurdering.
     */
    legal_category_code?: number;
    /**
     * Tekst, der beskriver den juridiske kategori, som ejendommen er tildelt ved denne ejendomsvurdering
     */
    legal_category_text?: string;
    /**
     * Kode der angiver den juridiske underkategori, som ejendommen er blevet tildelt ved denne ejendomsvurdering
     */
    legal_subcategory_code?: number;
    /**
     * Tekst der beskriver den juridiske underkategori, som er blevet tildelt ved denne vurdering.
     */
    legal_subcategory_text?: string;
    /**
     * Angiver kilde-system og type for vurderingen
     */
    vur_mark?: number;
    /**
     * Vurderet grundareal. Ejendommens samlede vurderede areal i m2 (incl. Vejareal).
     */
    area_valued: number;
    /**
     * Underinddeling af en kommune, som benyttes ved vurdering.
     */
    valuation_area_code: string;
    /**
     * Dato for seneste gældende vurdering.
     */
    change_date: string;
    /**
     * Årsagen til ændringen af ejendomsvurderingen. Kode, der angiver type af vurdering eller myndighed, der har afgjort en vurdering.
     */
    change_code?: string;
    valuation_property?: VURValuationProperty;
    mother_property?: VURValuationProperty;
    valued_under?: VURValuationProperty;
    land_value_specifications: Array<VURLandValueSpecification>;
    distributions: Array<VURDistribution>;
    exemptions: Array<VURExemption>;
    ceiling?: VURCeilingResponse;
    deduction_for_improvement_overall?: VURDeductionForImprovementOverallResponse;
};

