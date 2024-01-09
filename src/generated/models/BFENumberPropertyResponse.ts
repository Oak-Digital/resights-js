/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BBRResponse } from './BBRResponse';
import type { BFENumberOverview } from './BFENumberOverview';
import type { EBRPropertyLocationResponse } from './EBRPropertyLocationResponse';
import type { EJFAdministratorResponse } from './EJFAdministratorResponse';
import type { EJFOwnershipResponse } from './EJFOwnershipResponse';
import type { MATBPFGPoint } from './MATBPFGPoint';
import type { MATCondominium } from './MATCondominium';
import type { MATSFEResponse } from './MATSFEResponse';
import type { SKATTaxResponse } from './SKATTaxResponse';
import type { TenantsResponse } from './TenantsResponse';
import type { VURValuationResponse } from './VURValuationResponse';
export type BFENumberPropertyResponse = {
  bfe_number: number;
  bbr: BBRResponse;
  ebr: EBRPropertyLocationResponse;
  sfe?: MATSFEResponse;
  bpfg?: MATBPFGPoint;
  bpfgs: Array<MATBPFGPoint>;
  condominium?: MATCondominium;
  condominiums: Array<MATCondominium>;
  owners: Array<EJFOwnershipResponse>;
  administrator?: EJFAdministratorResponse;
  valuation?: VURValuationResponse;
  tax?: SKATTaxResponse;
  tenants: TenantsResponse;
  overview: BFENumberOverview;
};
