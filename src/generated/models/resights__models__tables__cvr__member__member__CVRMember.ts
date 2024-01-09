/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRAddress } from './CVRAddress';
import type { CVRCompanyRelation } from './CVRCompanyRelation';
import type { CVRContactInfoAttribute } from './CVRContactInfoAttribute';
import type { CVREffectActorEnum } from './CVREffectActorEnum';
import type { CVRKeyCompanyRelation } from './CVRKeyCompanyRelation';
import type { CVRMemberStats } from './CVRMemberStats';
import type { CVRNameAttribute } from './CVRNameAttribute';
import type { CVRNetwork } from './CVRNetwork';
import type { CVRSequenceMemberAttributes } from './CVRSequenceMemberAttributes';
import type { CVRUnitTypeEnum } from './CVRUnitTypeEnum';
import type { DARAddress } from './DARAddress';
import type { PortfolioAggs } from './PortfolioAggs';
import type { TimelineDate } from './TimelineDate';
export type resights__models__tables__cvr__member__member__CVRMember = {
    unit_number: number;
    unit_type?: CVRUnitTypeEnum;
    business_key?: number;
    name?: string;
    position?: string;
    address_secret?: boolean;
    address_secret_exemption?: boolean;
    address_update_stopped?: boolean;
    address_id?: string;
    address?: CVRAddress;
    addresses: Array<CVRAddress>;
    email?: string;
    phone_number?: string;
    status_code?: number;
    effect_actor?: CVREffectActorEnum;
    data_access?: boolean;
    error_import: boolean;
    /**
     * Nogle enheder kan ligge med denne værdi, hvis de er blevet registreret som følge af en systemfejl.
     */
    error_registration: boolean;
    has_future_change?: boolean;
    nearest_future_date?: string;
    /**
     * Version id
     */
    samt_id?: number;
    last_imported: string;
    last_updated?: string;
    names: Array<CVRNameAttribute>;
    postal_address?: CVRAddress;
    postal_addresses: Array<CVRAddress>;
    emails: Array<CVRContactInfoAttribute>;
    phone_numbers: Array<CVRContactInfoAttribute>;
    relations: Array<CVRCompanyRelation>;
    key_relations: Array<CVRKeyCompanyRelation>;
    attributes: Array<CVRSequenceMemberAttributes>;
    address_info?: DARAddress;
    stats: CVRMemberStats;
    portfolio_aggs: PortfolioAggs;
    title?: string;
    ejf_id?: string;
    timeline: Array<TimelineDate>;
    network: CVRNetwork;
};

