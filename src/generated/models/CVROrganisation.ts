/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRNameAttribute } from './CVRNameAttribute';
import type { CVROrganisationMainTypeEnum } from './CVROrganisationMainTypeEnum';
import type { CVRSequenceMemberRelations } from './CVRSequenceMemberRelations';
import type { CVRSequenceOrganisations } from './CVRSequenceOrganisations';
export type CVROrganisation = {
  unit_number: number;
  main_type: CVROrganisationMainTypeEnum;
  names: Array<CVRNameAttribute>;
  attributes: Array<CVRSequenceOrganisations>;
  member_data: Array<Array<CVRSequenceMemberRelations>>;
};
