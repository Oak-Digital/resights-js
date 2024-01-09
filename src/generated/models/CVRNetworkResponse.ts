/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditsResponse } from './AuditsResponse';
import type { BaseNodeResponse } from './BaseNodeResponse';
import type { BoardMemberResponse } from './BoardMemberResponse';
import type { CEOResponse } from './CEOResponse';
import type { DerivedLegalOwnershipResponse } from './DerivedLegalOwnershipResponse';
import type { DerivedRealOwnershipResponse } from './DerivedRealOwnershipResponse';
import type { DirectorResponse } from './DirectorResponse';
import type { FounderResponse } from './FounderResponse';
import type { LegalOwnershipResponse } from './LegalOwnershipResponse';
import type { LiquidatorResponse } from './LiquidatorResponse';
import type { RealOwnershipResponse } from './RealOwnershipResponse';
import type { RelatedToResponse } from './RelatedToResponse';
import type { ResidesAtResponse } from './ResidesAtResponse';
import type { StakeholderResponse } from './StakeholderResponse';
export type CVRNetworkResponse = {
    nodes: Array<BaseNodeResponse>;
    edges: Array<(LegalOwnershipResponse | DerivedLegalOwnershipResponse | RealOwnershipResponse | DerivedRealOwnershipResponse | AuditsResponse | CEOResponse | DirectorResponse | FounderResponse | BoardMemberResponse | LiquidatorResponse | StakeholderResponse | ResidesAtResponse | RelatedToResponse)>;
};

