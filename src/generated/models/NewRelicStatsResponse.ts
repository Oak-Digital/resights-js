/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewRelicStatsModel } from './NewRelicStatsModel';
export type NewRelicStatsResponse = {
    timestamp?: string;
    number_requests_daily: number;
    number_requests_total: number;
    number_unique_users_daily: number;
    number_unique_users_total: number;
    ips: Array<NewRelicStatsModel>;
    endpoints: Array<NewRelicStatsModel>;
    user_agents: Array<NewRelicStatsModel>;
    map_layers: Array<NewRelicStatsModel>;
};

