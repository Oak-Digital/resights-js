/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutocompleteTypeEnum } from './AutocompleteTypeEnum';
import type { PropertyMeta } from './PropertyMeta';
export type AutocompleteResult = {
  id: string;
  type: AutocompleteTypeEnum;
  text: string;
  title: string;
  score: number;
  meta?: PropertyMeta;
};
