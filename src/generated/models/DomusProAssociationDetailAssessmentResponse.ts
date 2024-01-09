/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DomusProAssociationDetailAssessmentResponse = {
    /**
     * b_kRegnskVurdering.kRegnskVurderID
     */
    id: number;
    /**
     * b_kRegnskVurdering.KundeID
     */
    customer_id: number;
    /**
     * b_kRegnskVurdering.ForeningID
     */
    association_id: number;
    /**
     * b_kRegnskVurdering.RegnskabID
     */
    report_id?: number;
    /**
     * b_kRegnskVurdering.ExtranetBrugerID
     */
    username: string;
    /**
     * b_kRegnskVurdering.EjdVaerdiKontrol
     */
    control_value: number;
    /**
     * b_kRegnskVurdering.Vurderingsdato
     */
    valuation_date: string;
    /**
     * b_kRegnskVurdering.Aendret
     */
    changed_date: string;
    /**
     * b_kRegnskVurdering.AendretTimestamp
     */
    changed_timestamp: string;
};

