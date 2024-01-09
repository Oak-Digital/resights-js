/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DK118DirectoryTypeEnum } from './DK118DirectoryTypeEnum';
import type { DK118GenderEnum } from './DK118GenderEnum';
import type { DK118OperatorAuthorizationEnum } from './DK118OperatorAuthorizationEnum';
import type { DK118SecretEnum } from './DK118SecretEnum';
import type { DK118SubscriberTypeEnum } from './DK118SubscriberTypeEnum';
import type { DK118TelephoneTypeEnum } from './DK118TelephoneTypeEnum';
export type DK118SubscriberModel = {
  serialnumberidentifier: number;
  record_id?: string;
  subscr_id?: string;
  subscr_type?: DK118SubscriberTypeEnum;
  first_name?: string;
  last_name?: string;
  gender?: DK118GenderEnum;
  robinson: number;
  dir_type?: DK118DirectoryTypeEnum;
  main_no?: number;
  tel_no?: string;
  tel_type?: DK118TelephoneTypeEnum;
  telephonesubscriberprotection_?: string;
  select_disp?: string;
  secret: DK118SecretEnum;
  indent?: number;
  ex_op?: DK118OperatorAuthorizationEnum;
  vendor_valid?: string;
  ranking: number;
  street?: string;
  house_no?: string;
  floor?: string;
  postal_code?: number;
  po_name?: string;
  town?: string;
  coy?: number;
  cox?: number;
  movementdate?: number;
  update_date: string;
  valid_from: number;
};
