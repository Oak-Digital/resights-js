/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVROffice } from './CVROffice';
import type { CVROrganisation } from './CVROrganisation';
import type { resights__models__tables__cvr__company__member_relation__CVRMember } from './resights__models__tables__cvr__company__member_relation__CVRMember';
export type CVRMemberRelation = {
    member?: resights__models__tables__cvr__company__member_relation__CVRMember;
    offices: Array<CVROffice>;
    organisations: Array<CVROrganisation>;
};

