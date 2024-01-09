/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RolleAdresseModel = {
    /**
     * The code of a municipality. The plain text of a municipality is to be found by reference to the authority-data in the civilregistrationsystem. The code will always be unique.
     */
    Kommunekode: number;
    /**
     * Declares a named street, road, square, path or the like in code. Streetcode in combination with municipalitycode constitutes an unique code for a road in Denmark.
     */
    Vejkode: number;
    /**
     * Numeric identification (da: house number ~ husnummer) including an optional letter, which identifies a certain access to a building, a plot/piece of land or a plant etc. based on the named road or street which gives access hereto. The identifier is determined in increasing numerical and letter order along the road, normally with even numbers on the right side and odd numbers on the left side of the road.
     */
    Husnummer: string;
    /**
     * Identification which describes the floor or level on which a specific entrance door, appartment or suite is placed, in the staircase refered to.
     */
    Etage?: string;
    /**
     * Identification which describes the location of a specific entrance door on a floor or level (repos) in the staircase referred to.
     */
    Doer?: string;
};

