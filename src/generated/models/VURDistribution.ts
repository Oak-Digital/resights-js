/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VURDistribution = {
    /**
     * Den del af grundværdien som svarer til den tilknyttede ejerboligværdikode.
     */
    land_value: number;
    /**
     * Den del af ejendomsværdien som svarer til den tilknyttede ejeboligværdikode.
     */
    property_value: number;
    /**
     * Kode, som indeholder oplysning om, hvilken type benyttelse, ejerboligværdien skal henføres til. Koden angiver typen på ejerbolig med værdier. Typen matcher stk. nr. i VL §§ 33. Bogstaver angiver kombination af 2 eller 3 forskellige typer ejerbolig.
     */
    property_value_code?: string;
};

