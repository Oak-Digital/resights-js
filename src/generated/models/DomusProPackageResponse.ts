/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProPackageConstrainModel } from './DomusProPackageConstrainModel';
import type { DomusProPackageIdEnum } from './DomusProPackageIdEnum';
import type { DomusProPackageTabelModel } from './DomusProPackageTabelModel';
export type DomusProPackageResponse = {
    id: DomusProPackageIdEnum;
    label: string;
    always_include?: boolean;
    tables?: Array<DomusProPackageTabelModel>;
    constraints?: Array<DomusProPackageConstrainModel>;
};

