/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DomusProDocumentModel = {
    /**
     * The name of the types might change over time, but this ID will be constant.
     */
    documentTypeId: number;
    /**
     * The documenttype as a string
     */
    documentTypeName: string;
    /**
     * Filename of the actual file
     */
    fileName: string;
    /**
     * Filetoken used for later fileretrieval. The token is used in the fetchFile method of the documentService to fetch the actual binary data. The token is valid for one hour. It is valid only for one retrieval of the document and is then invalidated
     */
    fileToken: string;
    /**
     * The filename the file had originally when sent to domuspro. This filename might contain invalid characters, or have cryptic names.
     */
    originalFileName: string;
    /**
     * If this is a draft, this is set to TRUE.
     */
    draft: boolean;
    /**
     * Indicates whether this document is signed or not. Will be TRUE or FALSE. If not set (NULL), then the status is unknown or not relevant
     */
    signed: boolean;
    /**
     * If this documents is a meeting minute, this field will contain the date of the meeting
     */
    heldDate?: string;
    /**
     * If signed, this will will contain the date it was signed.
     */
    signedDate?: string;
    /**
     * Første dato i regnskabsåret for budgettet, bruges ifm. dokumenttypen 'Budget, separat'
     */
    budgetStartDate?: string;
    /**
     * Angiver om oplysninger fra denne fil må bruges på offentlige portaler.
     */
    publicAllowed: boolean;
    /**
     * Indtrædelsesret, benyttes kun ifm. dokumenter af typen 'Vedtægter'
     */
    subrogation?: boolean;
    /**
     * Lånebegrænsning, benyttes kun ifm. dokumenter af typen 'Vedtægter'
     */
    loanLimitation?: boolean;
    /**
     * Hvis dette dokument er et regnskab, angiver dette felt om foreningen i dette regnskab er under stiftelse. Kan antage sand, fald eller null. For dokumenter der ikke er regnskaber, vil værdien være null, ligeseom den vil være det på ældre regnskaber.
     */
    isAssociationCreation?: boolean;
    notes?: string;
    /**
     * Udvidet beskrivelse såfremt dokumenttypen er 'Andet'
     */
    description?: string;
    /**
     * Feltet angiver en vigtig dato ifm. dokumenter af typen 'Andet'
     */
    importantDate?: string;
    /**
     * If this is set, then the document is deleted and can no logner be retrieved, and should also be deleted in the comsuming end of the webservice.
     */
    deleted: boolean;
};

