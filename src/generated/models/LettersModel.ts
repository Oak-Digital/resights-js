/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FolderTypeEnum } from './FolderTypeEnum';
import type { LettersMethodEnum } from './LettersMethodEnum';
import type { LettersTypeEnum } from './LettersTypeEnum';
export type LettersModel = {
    object_id: Array<string>;
    filter: Record<string, any>;
    method: LettersMethodEnum;
    type: LettersTypeEnum;
    pdf_key: string;
    template_key: string;
    folder: FolderTypeEnum;
    user_id?: string;
    organisation_id?: string;
};

