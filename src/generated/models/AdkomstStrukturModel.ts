/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomstTypeEnum } from './AdkomstTypeEnum';
import type { DokumentFastEjendomModel } from './DokumentFastEjendomModel';
import type { MeddelelseOffentligModel } from './MeddelelseOffentligModel';
import type { SkifteretsattestModel } from './SkifteretsattestModel';
import type { SkoedeAuktionModel } from './SkoedeAuktionModel';
import type { SkoedeModel } from './SkoedeModel';
export type AdkomstStrukturModel = {
    /**
     * Angiver adkomsttype.
     */
    Type: AdkomstTypeEnum;
    /**
     * Angiver oplysninger fra skifteretsattest, der skal tinglyses som adkomstdokument.
     */
    SkifteretsAttest?: SkifteretsattestModel;
    /**
     * Angiver et auktionsskøde.
     */
    SkoedeAuktion?: SkoedeAuktionModel;
    /**
     * Angiver et auktionsskøde.
     */
    Skoede?: SkoedeModel;
    /**
     * Offentlig retlig meddelelse
     */
    MeddelelseOffentlig?: MeddelelseOffentligModel;
    /**
     * Anvendes for ekspeditionstyperne 6, 115, 116, 183 og 203.
     */
    DokumentFastEjendom?: DokumentFastEjendomModel;
};

