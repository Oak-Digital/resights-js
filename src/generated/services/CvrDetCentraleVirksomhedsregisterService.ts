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
     * @param name
     * @param cvrNumber
     * @param address
     * @param status
     * @param member
     * @param industry
     * @param x Longitude. Example: 12.5494
     * @param y Latitute. Example: 55.6722
     * @param distance Distance from x, y
     * @param page Page id for pagination
     * @param size
     * @param offset
     * @param sort
     * @param order
     * @param includes
     * @param excludes
     * @returns ESResponseModel_CVRCompany_ Successful Response
     * @throws ApiError
     */
    public getCvrCompanies(
        name?: string,
        cvrNumber?: number,
        address?: string,
        status?: string,
        member?: string,
        industry?: string,
        x?: number,
        y?: number,
        distance: string = '100m',
        page?: string,
        size: number = 10,
        offset?: number,
        sort?: string,
        order?: resights__api__models__response__SortOrder,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<ESResponseModel_CVRCompany_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/companies',
            query: {
                'name': name,
                'cvr_number': cvrNumber,
                'address': address,
                'status': status,
                'member': member,
                'industry': industry,
                'x': x,
                'y': y,
                'distance': distance,
                'page': page,
                'size': size,
                'offset': offset,
                'sort': sort,
                'order': order,
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Cvr Companies Advanced
     * @param size
     * @param offset
     * @param requestBody
     * @returns ESResponseModel_CVRCompany_ Successful Response
     * @throws ApiError
     */
    public getCvrCompaniesAdvanced(
        size: number = 10,
        offset?: number,
        requestBody?: QueryWithTemplate,
    ): CancelablePromise<ESResponseModel_CVRCompany_> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/cvr/companies',
            query: {
                'size': size,
                'offset': offset,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Cvr Company
     * @param cvrNumber CVR-number of a company
     * @param includes
     * @param excludes
     * @returns CVRCompany Successful Response
     * @throws ApiError
     */
    public getCvrCompany(
        cvrNumber: number,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<CVRCompany> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/companies/{cvr_number}',
            path: {
                'cvr_number': cvrNumber,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Company Timeline
     * @param cvrNumber CVR-number of a company
     * @returns TimelineDate Successful Response
     * @throws ApiError
     */
    public getCompanyTimeline(
        cvrNumber: number,
    ): CancelablePromise<Array<TimelineDate>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/companies/{cvr_number}/timeline',
            path: {
                'cvr_number': cvrNumber,
            },
        });
    }
    /**
     * Get Company Financials
     * @param cvrNumber CVR-number of a company
     * @param size
     * @param includes
     * @param excludes
     * @returns AnnualReportSimple Successful Response
     * @throws ApiError
     */
    public getCompanyFinancials(
        cvrNumber: number,
        size: number = 100,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<Array<AnnualReportSimple>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/companies/{cvr_number}/financials',
            path: {
                'cvr_number': cvrNumber,
            },
            query: {
                'size': size,
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Company Financials Latest
     * @param cvrNumber CVR-number of a company
     * @param includes
     * @param excludes
     * @returns AnnualReportSimple Successful Response
     * @throws ApiError
     */
    public getCompanyFinancialsLatest(
        cvrNumber: number,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<AnnualReportSimple> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/companies/{cvr_number}/financials/latest',
            path: {
                'cvr_number': cvrNumber,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Cvr Members
     * @param name
     * @param unitNumber
     * @param address
     * @param type
     * @param company
     * @param x Longitude. Example: 12.5494
     * @param y Latitute. Example: 55.6722
     * @param distance Distance from x, y
     * @param size
     * @param offset
     * @param sort
     * @param order
     * @param includes
     * @param excludes
     * @param page Page id for pagination
     * @returns ESResponseModel_CVRMember_ Successful Response
     * @throws ApiError
     */
    public getCvrMembers(
        name?: number,
        unitNumber?: number,
        address?: string,
        type?: string,
        company?: string,
        x?: number,
        y?: number,
        distance: string = '100m',
        size: number = 10,
        offset?: number,
        sort?: string,
        order?: resights__api__models__response__SortOrder,
        includes?: string,
        excludes?: string,
        page?: string,
    ): CancelablePromise<ESResponseModel_CVRMember_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/members',
            query: {
                'name': name,
                'unit_number': unitNumber,
                'address': address,
                'type': type,
                'company': company,
                'x': x,
                'y': y,
                'distance': distance,
                'size': size,
                'offset': offset,
                'sort': sort,
                'order': order,
                'includes': includes,
                'excludes': excludes,
                'page': page,
            },
        });
    }
    /**
     * Get Cvr Members Advanced
     * @param size
     * @param offset
     * @param requestBody
     * @returns ESResponseModel_CVRMember_ Successful Response
     * @throws ApiError
     */
    public getCvrMembersAdvanced(
        size: number = 10,
        offset?: number,
        requestBody?: QueryWithTemplate,
    ): CancelablePromise<ESResponseModel_CVRMember_> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/cvr/members',
            query: {
                'size': size,
                'offset': offset,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Cvr Member
     * @param unitNumber Unit-number of a member
     * @param includes
     * @param excludes
     * @returns resights__models__tables__cvr__member__member__CVRMember Successful Response
     * @throws ApiError
     */
    public getCvrMember(
        unitNumber: number,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<resights__models__tables__cvr__member__member__CVRMember> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/members/{unit_number}',
            path: {
                'unit_number': unitNumber,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Member Timeline
     * @param cvrNumber Unit-number of a member
     * @returns TimelineDate Successful Response
     * @throws ApiError
     */
    public getMemberTimeline(
        cvrNumber: number,
    ): CancelablePromise<Array<TimelineDate>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/members/{cvr_number}/timeline',
            path: {
                'cvr_number': cvrNumber,
            },
        });
    }
    /**
     * Get Cvr P Units
     * @param name
     * @param pNumber
     * @param cvrNumber
     * @param address
     * @param status
     * @param x Longitude. Example: 12.5494
     * @param y Latitute. Example: 55.6722
     * @param distance Distance from x, y
     * @param page Page id for pagination
     * @param size
     * @param offset
     * @param sort
     * @param order
     * @param includes
     * @param excludes
     * @returns ESResponseModel_CVRPUnit_ Successful Response
     * @throws ApiError
     */
    public getCvrPUnits(
        name?: number,
        pNumber?: number,
        cvrNumber?: number,
        address?: string,
        status?: string,
        x?: number,
        y?: number,
        distance: string = '100m',
        page?: string,
        size: number = 10,
        offset?: number,
        sort?: string,
        order?: resights__api__models__response__SortOrder,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<ESResponseModel_CVRPUnit_> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/p-units',
            query: {
                'name': name,
                'p_number': pNumber,
                'cvr_number': cvrNumber,
                'address': address,
                'status': status,
                'x': x,
                'y': y,
                'distance': distance,
                'page': page,
                'size': size,
                'offset': offset,
                'sort': sort,
                'order': order,
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Cvr P Units Advanced
     * @param size
     * @param offset
     * @param requestBody
     * @returns ESResponseModel_CVRPUnit_ Successful Response
     * @throws ApiError
     */
    public getCvrPUnitsAdvanced(
        size: number = 10,
        offset?: number,
        requestBody?: QueryWithTemplate,
    ): CancelablePromise<ESResponseModel_CVRPUnit_> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/cvr/p-units',
            query: {
                'size': size,
                'offset': offset,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Cvr P Unit
     * @param pNumber P-number of a p-unit
     * @param includes
     * @param excludes
     * @returns CVRPUnit Successful Response
     * @throws ApiError
     */
    public getCvrPUnit(
        pNumber: number,
        includes?: string,
        excludes?: string,
    ): CancelablePromise<CVRPUnit> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/p-units/{p_number}',
            path: {
                'p_number': pNumber,
            },
            query: {
                'includes': includes,
                'excludes': excludes,
            },
        });
    }
    /**
     * Get Cvr Network
     * @param id Either CVR-number of a company, unit number of a person/other member or an EJF id
     * @param depthUp
     * @param depthDown
     * @param includeProperties
     * @param includeOwnershipDegrees
     * @param includeInactive
     * @returns CVROwnershipNetworkResponse Successful Response
     * @throws ApiError
     */
    public getCvrNetwork(
        id: (number | string),
        depthUp?: number,
        depthDown?: number,
        includeProperties: boolean = true,
        includeOwnershipDegrees: boolean = false,
        includeInactive: boolean = true,
    ): CancelablePromise<CVROwnershipNetworkResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/{id}/network',
            path: {
                'id': id,
            },
            query: {
                'depth_up': depthUp,
                'depth_down': depthDown,
                'include_properties': includeProperties,
                'include_ownership_degrees': includeOwnershipDegrees,
                'include_inactive': includeInactive,
            },
        });
    }
    /**
     * Get Connections Between Pair
     * @param idFrom Id of first node
     * @param typeFrom Type of first node
     * @param idTo Id of second node
     * @param typeTo Type of second node
     * @param relationshipTypes Relationship types to traverse
     * @param findAllPaths Whether to find all paths (including historical connections) or just the shortest currently active paths
     * @param maxDepth Maximum depth to traverse
     * @returns CVRNetworkResponse Successful Response
     * @throws ApiError
     */
    public getConnectionsBetweenPair(
        idFrom: (number | string),
        typeFrom: GraphNodeEnum,
        idTo: (number | string),
        typeTo: GraphNodeEnum,
        relationshipTypes: Array<GraphRelationEnum>,
        findAllPaths: boolean = false,
        maxDepth: number = 7,
    ): CancelablePromise<CVRNetworkResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/network/pair',
            query: {
                'id_from': idFrom,
                'type_from': typeFrom,
                'id_to': idTo,
                'type_to': typeTo,
                'relationship_types': relationshipTypes,
                'find_all_paths': findAllPaths,
                'max_depth': maxDepth,
            },
        });
    }
    /**
     * Expand Network
     * @param id ID of the node to expand
     * @param nodeLabel Label of the node to expand
     * @param relationshipTypes Relationship types to traverse
     * @param targetDate
     * @param depthUp
     * @param depthDown
     * @returns CVRNetworkResponse Successful Response
     * @throws ApiError
     */
    public expandNetwork(
        id: (number | string),
        nodeLabel: GraphNodeEnum,
        relationshipTypes: Array<GraphRelationEnum>,
        targetDate?: string,
        depthUp?: number,
        depthDown?: number,
    ): CancelablePromise<CVRNetworkResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/{id}/expand-network',
            path: {
                'id': id,
            },
            query: {
                'node_label': nodeLabel,
                'relationship_types': relationshipTypes,
                'target_date': targetDate,
                'depth_up': depthUp,
                'depth_down': depthDown,
            },
        });
    }
    /**
     * Get Partners In Crime
     * @param id Unit number of a person/other member in CVR
     * @param relationshipTypes Relationship types to traverse
     * @returns CVRNetworkResponse Successful Response
     * @throws ApiError
     */
    public getPartnersInCrime(
        id: number,
        relationshipTypes: Array<GraphRelationEnum>,
    ): CancelablePromise<CVRNetworkResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/cvr/{id}/partners-in-crime',
            path: {
                'id': id,
            },
            query: {
                'relationship_types': relationshipTypes,
            },
        });
    }
}
