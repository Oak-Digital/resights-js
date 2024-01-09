/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AbestemEnum } from './AbestemEnum';
import type { ObjectcodeEnum } from './ObjectcodeEnum';
import type { PlanStatusEnum } from './PlanStatusEnum';
import type { PlantypeEnum } from './PlantypeEnum';
import type { resights__models__enums__plandata__ZoneEnum } from './resights__models__enums__plandata__ZoneEnum';
import type { ZonestatusEnum } from './ZonestatusEnum';
export type MunicipalityPlan = {
    id: number;
    oid: number;
    /**
     * Planid for planen. Genereres af systemet.
     */
    plan_id?: number;
    municipality_plan_id?: number;
    municipality_additional_id?: number;
    /**
     * Det trecifrede kommunenummer for den kommune som planen findes i.
     */
    municipality_code?: number;
    /**
     * Kode for generel plantype.
     */
    object_code?: ObjectcodeEnum;
    /**
     * Koden for plantypen.
     */
    plan_type?: PlantypeEnum;
    /**
     * Planens plannummer. Hvis der uploades til en plan, og det eksisterende plannr skal bevares, kan feltet udelades.
     */
    plan_number?: string;
    /**
     * Byggefeltets navn.
     */
    plan_name?: string;
    plan_status?: PlanStatusEnum;
    /**
     * Koden for planens generelle anvendelse.
     */
    usage?: number;
    usage_general?: string;
    /**
     * Datoen hvor kommunalbestyrelsen vedtog forslagets udformning.
     */
    date_proposal?: string;
    /**
     * Vedtagelsesdato for planen.
     */
    date_adopted?: string;
    /**
     * Dato for aflysning af planen.
     */
    date_cancelled?: string;
    /**
     * Dato for planens ikrafttrædelse.
     */
    date_in_force?: string;
    /**
     * Startdatoen for gyldighedsperioden for den aktuelle version af planen.
     */
    date_start?: string;
    /**
     * Slutdatoen for gyldighedsperioden for den aktuelle version af planen.
     */
    date_end?: string;
    date_attributes?: string;
    date_geometry?: string;
    date_created?: string;
    date_updated?: string;
    link?: string;
    district?: string;
    /**
     * Kode for delområdets zonestatus.
     */
    zone?: resights__models__enums__plandata__ZoneEnum;
    zone_status?: ZonestatusEnum;
    f_zone?: resights__models__enums__plandata__ZoneEnum;
    /**
     * Arealenheden som Bebygpct beregnses ud fra.
     */
    constructed_percentage_valid_for?: number;
    /**
     * Mindste tilladte miljøklasse (talværdi fra 1-7).
     */
    min_environment_class_allowed?: number;
    /**
     * Højeste tilladte kiljøklasse (talværdi fra 1-7).
     */
    max_environment_class_allowed?: number;
    /**
     * Angivelse af 'særlige forhold' i planen. Særlige forhold i Plandata.dk er beskrevet i vejledningen til indberetning af lokalplaner.
     */
    supplementary_conditions?: string;
    /**
     * Angiver om planen ikke regulerer omfang. Sættes per default til 'false'.
     */
    scope_regulated?: boolean;
    /**
     * Angiver om planen ikke regulerer udstykning. Sættes per default til 'false'.
     */
    parcel_size_regulated?: boolean;
    wind_description?: string;
    note_usage_general?: string;
    note_usage_area?: string;
    note_construction?: string;
    note_free_areas?: string;
    note_environment?: string;
    note_infrastrukture?: string;
    note_zone?: string;
    note_local_plans?: string;
    notat?: string;
    /**
     * Angives hvis planen indeholder bestemmelser vedrørende skilte eller facader.
     */
    signs_facade_regulated_1?: AbestemEnum;
    /**
     * Angives hvis planen indeholder bevaringsbestemmelser.
     */
    signs_facade_regulated_2?: AbestemEnum;
    /**
     * Feltet benyttes ikke.
     */
    signs_facade_regulated_3?: AbestemEnum;
    /**
     * Angivelse af specifik anvendelse. Der kan angives op til 10 specifikke anvendelser gennem uplaodmodulet. Disse angives hver især i felterne 'Anvspec1', 'Anvspec2' ... 'Anvspec10'.
     */
    usage_specific_1?: number;
    usage_specific_2?: number;
    usage_specific_3?: number;
    usage_specific_4?: number;
    usage_specific_5?: number;
    usage_specific_6?: number;
    usage_specific_7?: number;
    usage_specific_8?: number;
    usage_specific_9?: number;
    usage_specific_10?: number;
    /**
     * Maksimalt tilladte bebyggelsesprocent.
     */
    max_constructed_percentage_area?: number;
    /**
     * Bebyggelsesprocent tilknyttet en specifik anvendelse.
     */
    max_constructed_percentage_area_1?: number;
    max_constructed_percentage_area_2?: number;
    max_constructed_percentage_area_3?: number;
    max_constructed_percentage_area_4?: number;
    max_constructed_percentage_area_5?: number;
    max_constructed_percentage_area_6?: number;
    max_constructed_percentage_area_7?: number;
    max_constructed_percentage_area_8?: number;
    max_constructed_percentage_area_9?: number;
    max_constructed_percentage_area_10?: number;
    /**
     * Arealenheden som Bebygpct beregnes ud fra tilknyttet en specifik anvendelse.
     */
    max_constructed_share_calculated_from_1?: number;
    max_constructed_share_calculated_from_2?: number;
    max_constructed_share_calculated_from_3?: number;
    max_constructed_share_calculated_from_4?: number;
    max_constructed_share_calculated_from_5?: number;
    max_constructed_share_calculated_from_6?: number;
    max_constructed_share_calculated_from_7?: number;
    max_constructed_share_calculated_from_8?: number;
    max_constructed_share_calculated_from_9?: number;
    max_constructed_share_calculated_from_10?: number;
    /**
     * Arealenheden som BEBYGPCT beregnses ud fra.
     */
    max_share_land_construction?: number;
    /**
     * Den højeste andel (%) af grundarealet som må bebygges tilknyttet en specifik anvendelse.
     */
    max_share_land_construction_1?: number;
    max_share_land_construction_2?: number;
    max_share_land_construction_3?: number;
    max_share_land_construction_4?: number;
    max_share_land_construction_5?: number;
    max_share_land_construction_6?: number;
    max_share_land_construction_7?: number;
    max_share_land_construction_8?: number;
    max_share_land_construction_9?: number;
    max_share_land_construction_10?: number;
    /**
     * Maksimalt tilladt antal etager.
     */
    max_floors?: number;
    /**
     * Det højeste tilladte antal etager. Udnyttet tagetage angives som en halv etage tilknyttet en specifik anvendelse.
     */
    max_floors_1?: number;
    max_floors_2?: number;
    max_floors_3?: number;
    max_floors_4?: number;
    max_floors_5?: number;
    max_floors_6?: number;
    max_floors_7?: number;
    max_floors_8?: number;
    max_floors_9?: number;
    max_floors_10?: number;
    /**
     * Det maksimale tilladte etageareal der må være inden for planområdet. Udfyldes af systemet.
     */
    max_floor_area?: number;
    /**
     * Det største tilladte etageareal i området angivet i etagekvadratmeter tilknyttet en specifik anvendelse.
     */
    max_floor_area_1?: number;
    max_floor_area_2?: number;
    max_floor_area_3?: number;
    max_floor_area_4?: number;
    max_floor_area_5?: number;
    max_floor_area_6?: number;
    max_floor_area_7?: number;
    max_floor_area_8?: number;
    max_floor_area_9?: number;
    max_floor_area_10?: number;
    /**
     * Arealenheden som EAREAL er tilknyttet.
     */
    max_floor_area_valid_for?: number;
    /**
     * Arealenheden som Eareal er gældende for tilknyttet en specifik anvendelse.
     */
    max_floor_area_valid_for_1?: number;
    max_floor_area_valid_for_2?: number;
    max_floor_area_valid_for_3?: number;
    max_floor_area_valid_for_4?: number;
    max_floor_area_valid_for_5?: number;
    max_floor_area_valid_for_6?: number;
    max_floor_area_valid_for_7?: number;
    max_floor_area_valid_for_8?: number;
    max_floor_area_valid_for_9?: number;
    max_floor_area_valid_for_10?: number;
    /**
     * Højest tilladte bygningsrumfang per arealenhed. Angives i m3 per m2.
     */
    max_sqm3_per_sqm2?: number;
    /**
     * Det størst tilladte bygningsrumfang per arealenhed, angivet i m3 per m2 tilknyttet en specifik anvendelse.
     */
    max_sqm3_per_sqm2_1?: number;
    max_sqm3_per_sqm2_2?: number;
    max_sqm3_per_sqm2_3?: number;
    max_sqm3_per_sqm2_4?: number;
    max_sqm3_per_sqm2_5?: number;
    max_sqm3_per_sqm2_6?: number;
    max_sqm3_per_sqm2_7?: number;
    max_sqm3_per_sqm2_8?: number;
    max_sqm3_per_sqm2_9?: number;
    max_sqm3_per_sqm2_10?: number;
    /**
     * Arealenhed som rumfangsbestemmelsen, M3_M2 beregnses ud fra.
     */
    max_sqm3_per_sqm2_valid_for?: number;
    /**
     * Arealenheden som m3_m2 er gældende for tilknyttet en specifik anvendelse.
     */
    max_sqm3_per_sqm2_valid_for_1?: number;
    max_sqm3_per_sqm2_valid_for_2?: number;
    max_sqm3_per_sqm2_valid_for_3?: number;
    max_sqm3_per_sqm2_valid_for_4?: number;
    max_sqm3_per_sqm2_valid_for_5?: number;
    max_sqm3_per_sqm2_valid_for_6?: number;
    max_sqm3_per_sqm2_valid_for_7?: number;
    max_sqm3_per_sqm2_valid_for_8?: number;
    max_sqm3_per_sqm2_valid_for_9?: number;
    max_sqm3_per_sqm2_valid_for_10?: number;
    /**
     * Maksimal tilladt bygningshøjde.
     */
    max_building_height?: number;
    /**
     * Den højeste tilladte bygningshøjde agivet i meter tilknyttet en specifik anvendelse.
     */
    max_building_height_1?: number;
    max_building_height_2?: number;
    max_building_height_3?: number;
    max_building_height_4?: number;
    max_building_height_5?: number;
    max_building_height_6?: number;
    max_building_height_7?: number;
    max_building_height_8?: number;
    max_building_height_9?: number;
    max_building_height_10?: number;
    /**
     * Mindste tilladte udstykningsstørrelse. Angives i m2
     */
    min_parcel_size?: number;
    /**
     * Den mindste tilladte grundstørrelse ved udstykning tilknyttet en specifik anvendelse.
     */
    min_parcel_size_1?: number;
    min_parcel_size_2?: number;
    min_parcel_size_3?: number;
    min_parcel_size_4?: number;
    min_parcel_size_5?: number;
    min_parcel_size_6?: number;
    min_parcel_size_7?: number;
    min_parcel_size_8?: number;
    min_parcel_size_9?: number;
    min_parcel_size_10?: number;
    /**
     * Angiver at planområdet ikke må udstykkes. Hvis udstykningsforbudet er tilknyttet en anvendelse, benyttes feltet Udstykb under den specifikke anvendelse.
     */
    parcel_subdivision_regulated?: boolean;
    /**
     * Angivelse af om planen forbyder udstykning i planområdet tilknyttet en specifik anvendelse.
     */
    parcel_subdivision_regulated_1?: boolean;
    parcel_subdivision_regulated_2?: boolean;
    parcel_subdivision_regulated_3?: boolean;
    parcel_subdivision_regulated_4?: boolean;
    parcel_subdivision_regulated_5?: boolean;
    parcel_subdivision_regulated_6?: boolean;
    parcel_subdivision_regulated_7?: boolean;
    parcel_subdivision_regulated_8?: boolean;
    parcel_subdivision_regulated_9?: boolean;
    parcel_subdivision_regulated_10?: boolean;
    /**
     * Objektets geografiske placering.
     */
    geom?: string;
};

