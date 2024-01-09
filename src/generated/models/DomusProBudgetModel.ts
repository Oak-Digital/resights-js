/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProFiscalYearModel } from './DomusProFiscalYearModel';
export type DomusProBudgetModel = {
    accountant?: number;
    /**
     * Administration og revision i alt
     */
    administration?: number;
    /**
     * Er budgettet godkendt på generalforsamling
     */
    approvedByGeneralAssembly?: boolean;
    blockBoard?: number;
    /**
     * Sidste dato i budgetåret
     */
    budgetEndDate?: string;
    /**
     * Budgetkilde ID
     */
    budgetSourceIdentifier?: number;
    /**
     * Budgetkildens navn
     */
    budgetSourceName?: string;
    /**
     * Første dato i budgetåret
     */
    budgetStartDate: string;
    /**
     * Bygningsforsikring
     */
    buildingInsurance?: number;
    /**
     * Dækningsafgift
     */
    buildingTax?: number;
    /**
     * Renholdelse inkl. rengøringsartikler
     */
    cleaning?: number;
    /**
     * Er budgettet markeret til sletning
     */
    deleted: boolean;
    /**
     * Elektricitet
     */
    electricity?: number;
    fiscalYear?: DomusProFiscalYearModel;
    /**
     * Eksterne bemærkninger
     */
    externalComments?: string;
    /**
     * Generalforsamlingsdato, hvor budgettet er vedtaget
     */
    generalAssemblyDate?: string;
    /**
     * Udgift til udarbejdelse af regnskab for varme. Selve varmeudgifterne er ikke inkluderet, da de påføres andelshaverne og lejerne
     */
    heatAccounting?: number;
    /**
     * Servicearbejde på varmecentral
     */
    heatingCentralMaintenance?: number;
    /**
     * Erhvervsleje. Erhvervslejemål. Indtægt svarende til B4-enhederne
     */
    incomeCommercialLeases?: number;
    /**
     * Boligafgift. Andelsboliger. Indtægt svarende til B1-enhederne bortset fra at vicevært/klubværelser kan være trukket fra
     */
    incomePropertyCharges?: number;
    /**
     * Vicevært - uanset om det er løn eller faktura
     */
    janitor?: number;
    /**
     * Grundskyld
     */
    landTax?: number;
    /**
     * Senest opdateret
     */
    latestUpdate: string;
    /**
     * Løbende vedligeholdelse. Foreninger, der ikke udspecificerer under Diverse har måske en flydende grænse mellem løbende vedligehold og posterne under Diverse
     */
    ongoingMaintenance?: number;
    /**
     * Renovation
     */
    renovation?: number;
    /**
     * Regnskabsstandards version
     */
    reportStandardVersion: number;
    /**
     * Rottebekæmpelse
     */
    rodentControl?: number;
    /**
     * Indtægter i alt
     */
    totalIncome: number;
    /**
     * Filetoken which can be used in fetchFile method of document Webservice
     */
    fileToken: string;
    /**
     * Gartner/grønne arealer/gård
     */
    gardener?: number;
    /**
     * Indtægter, der ikke er med i øvrige indtægtsfelter - dog ikke antenneforening samt vaskeri
     */
    incomeOther?: number;
    /**
     * Lejeindtægter fra garager, p-plads og kældre. Nogenlunde svarende til B5-enhederne
     */
    incomeParkingAndGarages?: number;
    /**
     * Trappevask
     */
    stairCleaning?: number;
    water?: number;
    /**
     * Vinduespolering
     */
    windowCleaning?: number;
    /**
     * Uspecificerede skatter og afgifter
     */
    unspecifiedTaxes?: number;
    /**
     * Øvrige udgifter
     */
    otherExpenses?: number;
    /**
     * Andre anlæg
     */
    otherFacilities?: number;
    /**
     * Boligleje. Boliglejemål. Indtægt svarende til B3-enhederne bortset fra at vicevært/klubværelser kan være trukket fra
     */
    incomeResidentialLeases?: number;
    /**
     * Erhvervafgift. Erhvervsandele. Indtægt svarende til B2-enhederne
     */
    incomeCommercialShareCharges?: number;
    /**
     * Renholdelse af fortov når der skal betales til det offentlige for det.
     */
    sidewalkClearing?: number;
    /**
     * Elektrolyse
     */
    electrolysis?: number;
    /**
     * Indtægter fra mobilantenner
     */
    incomeCellularAntennas?: number;
    /**
     * Bolig- og erhvervsafgift
     */
    incomeTotalCharges?: number;
    /**
     * Administration og revision i alt
     */
    totalAdministrationAndAuditExpenses?: number;
    /**
     * Vicevært og rengøring mm. i alt
     */
    totalJanitorAndCleaningExpenses?: number;
    /**
     * Diverse udgifter i alt
     */
    totalMiscellaneousExpenses?: number;
    /**
     * Lejeindtægter fra klubværelser
     */
    incomeClubRooms?: number;
    /**
     * Indtægter fra gavlreklamer, tagreklamer ol. fastinstallerede reklamer
     */
    incomeBanners?: number;
    /**
     * Lejeindtægter fra viceværtbolig
     */
    incomeJanitor?: number;
    /**
     * Brandmeldeanlæg
     */
    fireAlarm?: number;
    /**
     * Slamsugning
     */
    dredging?: number;
    /**
     * Ventilation
     */
    ventilation?: number;
    /**
     * Skatter og afgifter i alt
     */
    totalTaxes?: number;
    /**
     * Elevator
     */
    elevator?: number;
    /**
     * Determine if this budget is allowed to be published openly.
     */
    publicAllowed?: boolean;
    /**
     * Publiceringsdato
     */
    publishedDate?: string;
    /**
     * Regnskabsstandards forklaring
     */
    reportStandardName?: string;
};

