/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnualReportSimple } from '../models/AnnualReportSimple';
import type { CVRCompany } from '../models/CVRCompany';
import type { CVRNetworkResponse } from '../models/CVRNetworkResponse';
import type { CVROwnershipNetworkResponse } from '../models/CVROwnershipNetworkResponse';
import type { CVRPUnit } from '../models/CVRPUnit';
import type { ESResponseModel_CVRCompany_ } from '../models/ESResponseModel_CVRCompany_';
import type { ESResponseModel_CVRMember_ } from '../models/ESResponseModel_CVRMember_';
import type { ESResponseModel_CVRPUnit_ } from '../models/ESResponseModel_CVRPUnit_';
import type { GraphNodeEnum } from '../models/GraphNodeEnum';
import type { GraphRelationEnum } from '../models/GraphRelationEnum';
import type { QueryWithTemplate } from '../models/QueryWithTemplate';
import type { resights__api__models__response__SortOrder } from '../models/resights__api__models__response__SortOrder';
import type { resights__models__tables__cvr__member__member__CVRMember } from '../models/resights__models__tables__cvr__member__member__CVRMember';
import type { TimelineDate } from '../models/TimelineDate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CvrDetCentraleVirksomhedsregisterService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get Cvr Companies
   * @returns ESResponseModel_CVRCompany_ Successful Response
   * @throws ApiError
   */
  public getCvrCompanies({
    name,
    cvrNumber,
    address,
    status,
    member,
    industry,
    x,
    y,
    distance = '100m',
    page,
    size = 10,
    offset,
    sort,
    order,
    includes,
    excludes,
  }: {
    name?: string;
    cvrNumber?: number;
    address?: string;
    status?: string;
    member?: string;
    industry?: string;
    /**
     * Longitude. Example: 12.5494
     */
    x?: number;
    /**
     * Latitute. Example: 55.6722
     */
    y?: number;
    /**
     * Distance from x, y
     */
    distance?: string;
    /**
     * Page id for pagination
     */
    page?: string;
    size?: number;
    offset?: number;
    sort?: string;
    order?: resights__api__models__response__SortOrder;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<ESResponseModel_CVRCompany_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/companies',
      query: {
        name: name,
        cvr_number: cvrNumber,
        address: address,
        status: status,
        member: member,
        industry: industry,
        x: x,
        y: y,
        distance: distance,
        page: page,
        size: size,
        offset: offset,
        sort: sort,
        order: order,
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Cvr Companies Advanced
   * @returns ESResponseModel_CVRCompany_ Successful Response
   * @throws ApiError
   */
  public getCvrCompaniesAdvanced({
    size = 10,
    offset,
    requestBody,
  }: {
    size?: number;
    offset?: number;
    requestBody?: QueryWithTemplate;
  }): CancelablePromise<ESResponseModel_CVRCompany_> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v2/cvr/companies',
      query: {
        size: size,
        offset: offset,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Cvr Company
   * @returns CVRCompany Successful Response
   * @throws ApiError
   */
  public getCvrCompany({
    cvrNumber,
    includes,
    excludes,
  }: {
    /**
     * CVR-number of a company
     */
    cvrNumber: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<CVRCompany> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/companies/{cvr_number}',
      path: {
        cvr_number: cvrNumber,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Company Timeline
   * @returns TimelineDate Successful Response
   * @throws ApiError
   */
  public getCompanyTimeline({
    cvrNumber,
  }: {
    /**
     * CVR-number of a company
     */
    cvrNumber: number;
  }): CancelablePromise<Array<TimelineDate>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/companies/{cvr_number}/timeline',
      path: {
        cvr_number: cvrNumber,
      },
    });
  }
  /**
   * Get Company Financials
   * @returns AnnualReportSimple Successful Response
   * @throws ApiError
   */
  public getCompanyFinancials({
    cvrNumber,
    size = 100,
    includes,
    excludes,
  }: {
    /**
     * CVR-number of a company
     */
    cvrNumber: number;
    size?: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<Array<AnnualReportSimple>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/companies/{cvr_number}/financials',
      path: {
        cvr_number: cvrNumber,
      },
      query: {
        size: size,
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Company Financials Latest
   * @returns AnnualReportSimple Successful Response
   * @throws ApiError
   */
  public getCompanyFinancialsLatest({
    cvrNumber,
    includes,
    excludes,
  }: {
    /**
     * CVR-number of a company
     */
    cvrNumber: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<AnnualReportSimple> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/companies/{cvr_number}/financials/latest',
      path: {
        cvr_number: cvrNumber,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Cvr Members
   * @returns ESResponseModel_CVRMember_ Successful Response
   * @throws ApiError
   */
  public getCvrMembers({
    name,
    unitNumber,
    address,
    type,
    company,
    x,
    y,
    distance = '100m',
    size = 10,
    offset,
    sort,
    order,
    includes,
    excludes,
    page,
  }: {
    name?: number;
    unitNumber?: number;
    address?: string;
    type?: string;
    company?: string;
    /**
     * Longitude. Example: 12.5494
     */
    x?: number;
    /**
     * Latitute. Example: 55.6722
     */
    y?: number;
    /**
     * Distance from x, y
     */
    distance?: string;
    size?: number;
    offset?: number;
    sort?: string;
    order?: resights__api__models__response__SortOrder;
    includes?: string;
    excludes?: string;
    /**
     * Page id for pagination
     */
    page?: string;
  }): CancelablePromise<ESResponseModel_CVRMember_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/members',
      query: {
        name: name,
        unit_number: unitNumber,
        address: address,
        type: type,
        company: company,
        x: x,
        y: y,
        distance: distance,
        size: size,
        offset: offset,
        sort: sort,
        order: order,
        includes: includes,
        excludes: excludes,
        page: page,
      },
    });
  }
  /**
   * Get Cvr Members Advanced
   * @returns ESResponseModel_CVRMember_ Successful Response
   * @throws ApiError
   */
  public getCvrMembersAdvanced({
    size = 10,
    offset,
    requestBody,
  }: {
    size?: number;
    offset?: number;
    requestBody?: QueryWithTemplate;
  }): CancelablePromise<ESResponseModel_CVRMember_> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v2/cvr/members',
      query: {
        size: size,
        offset: offset,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Cvr Member
   * @returns resights__models__tables__cvr__member__member__CVRMember Successful Response
   * @throws ApiError
   */
  public getCvrMember({
    unitNumber,
    includes,
    excludes,
  }: {
    /**
     * Unit-number of a member
     */
    unitNumber: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<resights__models__tables__cvr__member__member__CVRMember> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/members/{unit_number}',
      path: {
        unit_number: unitNumber,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Member Timeline
   * @returns TimelineDate Successful Response
   * @throws ApiError
   */
  public getMemberTimeline({
    cvrNumber,
  }: {
    /**
     * Unit-number of a member
     */
    cvrNumber: number;
  }): CancelablePromise<Array<TimelineDate>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/members/{cvr_number}/timeline',
      path: {
        cvr_number: cvrNumber,
      },
    });
  }
  /**
   * Get Cvr P Units
   * @returns ESResponseModel_CVRPUnit_ Successful Response
   * @throws ApiError
   */
  public getCvrPUnits({
    name,
    pNumber,
    cvrNumber,
    address,
    status,
    x,
    y,
    distance = '100m',
    page,
    size = 10,
    offset,
    sort,
    order,
    includes,
    excludes,
  }: {
    name?: number;
    pNumber?: number;
    cvrNumber?: number;
    address?: string;
    status?: string;
    /**
     * Longitude. Example: 12.5494
     */
    x?: number;
    /**
     * Latitute. Example: 55.6722
     */
    y?: number;
    /**
     * Distance from x, y
     */
    distance?: string;
    /**
     * Page id for pagination
     */
    page?: string;
    size?: number;
    offset?: number;
    sort?: string;
    order?: resights__api__models__response__SortOrder;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<ESResponseModel_CVRPUnit_> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/p-units',
      query: {
        name: name,
        p_number: pNumber,
        cvr_number: cvrNumber,
        address: address,
        status: status,
        x: x,
        y: y,
        distance: distance,
        page: page,
        size: size,
        offset: offset,
        sort: sort,
        order: order,
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Cvr P Units Advanced
   * @returns ESResponseModel_CVRPUnit_ Successful Response
   * @throws ApiError
   */
  public getCvrPUnitsAdvanced({
    size = 10,
    offset,
    requestBody,
  }: {
    size?: number;
    offset?: number;
    requestBody?: QueryWithTemplate;
  }): CancelablePromise<ESResponseModel_CVRPUnit_> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/v2/cvr/p-units',
      query: {
        size: size,
        offset: offset,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get Cvr P Unit
   * @returns CVRPUnit Successful Response
   * @throws ApiError
   */
  public getCvrPUnit({
    pNumber,
    includes,
    excludes,
  }: {
    /**
     * P-number of a p-unit
     */
    pNumber: number;
    includes?: string;
    excludes?: string;
  }): CancelablePromise<CVRPUnit> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/p-units/{p_number}',
      path: {
        p_number: pNumber,
      },
      query: {
        includes: includes,
        excludes: excludes,
      },
    });
  }
  /**
   * Get Cvr Network
   * @returns CVROwnershipNetworkResponse Successful Response
   * @throws ApiError
   */
  public getCvrNetwork({
    id,
    depthUp,
    depthDown,
    includeProperties = true,
    includeOwnershipDegrees = false,
    includeInactive = true,
  }: {
    /**
     * Either CVR-number of a company, unit number of a person/other member or an EJF id
     */
    id: number | string;
    depthUp?: number;
    depthDown?: number;
    includeProperties?: boolean;
    includeOwnershipDegrees?: boolean;
    includeInactive?: boolean;
  }): CancelablePromise<CVROwnershipNetworkResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/{id}/network',
      path: {
        id: id,
      },
      query: {
        depth_up: depthUp,
        depth_down: depthDown,
        include_properties: includeProperties,
        include_ownership_degrees: includeOwnershipDegrees,
        include_inactive: includeInactive,
      },
    });
  }
  /**
   * Get Connections Between Pair
   * @returns CVRNetworkResponse Successful Response
   * @throws ApiError
   */
  public getConnectionsBetweenPair({
    idFrom,
    typeFrom,
    idTo,
    typeTo,
    relationshipTypes,
    findAllPaths = false,
    maxDepth = 7,
  }: {
    /**
     * Id of first node
     */
    idFrom: number | string;
    /**
     * Type of first node
     */
    typeFrom: GraphNodeEnum;
    /**
     * Id of second node
     */
    idTo: number | string;
    /**
     * Type of second node
     */
    typeTo: GraphNodeEnum;
    /**
     * Relationship types to traverse
     */
    relationshipTypes: Array<GraphRelationEnum>;
    /**
     * Whether to find all paths (including historical connections) or just the shortest currently active paths
     */
    findAllPaths?: boolean;
    /**
     * Maximum depth to traverse
     */
    maxDepth?: number;
  }): CancelablePromise<CVRNetworkResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/network/pair',
      query: {
        id_from: idFrom,
        type_from: typeFrom,
        id_to: idTo,
        type_to: typeTo,
        relationship_types: relationshipTypes,
        find_all_paths: findAllPaths,
        max_depth: maxDepth,
      },
    });
  }
  /**
   * Expand Network
   * @returns CVRNetworkResponse Successful Response
   * @throws ApiError
   */
  public expandNetwork({
    id,
    nodeLabel,
    relationshipTypes,
    targetDate,
    depthUp,
    depthDown,
  }: {
    /**
     * ID of the node to expand
     */
    id: number | string;
    /**
     * Label of the node to expand
     */
    nodeLabel: GraphNodeEnum;
    /**
     * Relationship types to traverse
     */
    relationshipTypes: Array<GraphRelationEnum>;
    targetDate?: string;
    depthUp?: number;
    depthDown?: number;
  }): CancelablePromise<CVRNetworkResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/{id}/expand-network',
      path: {
        id: id,
      },
      query: {
        node_label: nodeLabel,
        relationship_types: relationshipTypes,
        target_date: targetDate,
        depth_up: depthUp,
        depth_down: depthDown,
      },
    });
  }
  /**
   * Get Partners In Crime
   * @returns CVRNetworkResponse Successful Response
   * @throws ApiError
   */
  public getPartnersInCrime({
    id,
    relationshipTypes,
  }: {
    /**
     * Unit number of a person/other member in CVR
     */
    id: number;
    /**
     * Relationship types to traverse
     */
    relationshipTypes: Array<GraphRelationEnum>;
  }): CancelablePromise<CVRNetworkResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/v2/cvr/{id}/partners-in-crime',
      path: {
        id: id,
      },
      query: {
        relationship_types: relationshipTypes,
      },
    });
  }
}
