/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatstidendeMessageFieldgroup } from './StatstidendeMessageFieldgroup';
export type StatstidendeMessage = {
    message_number: string;
    href: string;
    publication_date: string;
    message_type_public_key: string;
    field_groups: Array<StatstidendeMessageFieldgroup>;
    correction_of_message_number?: any;
    corrected_by_message_number?: any;
    is_corrected_by_of_type_reprint?: any;
};

