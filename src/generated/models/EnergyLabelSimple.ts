/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Base class for a model (Pydantic/SQLModel) representing and defining a selectable.
 */
export type EnergyLabelSimple = {
    /**
     * Energimærkningsnummer
     */
    energy_label_id: number;
    /**
     * Identitetsstreng på ”entitet” (energimærkning i søgeresultat) Vil være det samme som energimærkningsnummeret, men det kan evt. ændre sig.
     */
    id: number;
    /**
     * Energimærket er et udtryk for bygningens energieffektivitet. Energieffektiviteten beskrives på en skala med mærkerne A2020, A2015, A2010, B, C, D, E, F og G.
     */
    energy_label?: string;
    /**
     * Tekst på enum-værdien af status_code
     */
    status: string;
    /**
     * Gyldighedsdato fra (YYYY-MM-DD)
     */
    valid_from: string;
    /**
     * Gyldighedsdato til (YYYY-MM-DD)
     */
    valid_to: string;
};

