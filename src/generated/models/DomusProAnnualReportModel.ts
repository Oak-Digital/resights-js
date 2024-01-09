/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProFiscalYearModel } from './DomusProFiscalYearModel';
import type { DomusProLoanModel } from './DomusProLoanModel';
export type DomusProAnnualReportModel = {
    loans: Array<DomusProLoanModel>;
    /**
     * RegnskabsarID
     */
    fiscalYear: DomusProFiscalYearModel;
    allocationOfShareValueId: number;
    /**
     * Princip for fordeling af AndelsVaerdi mellem andelshavere. M2, indskud, m.m. samt evt. knæk
     */
    allocationOfShareValueName: string;
    /**
     * B4 Erhvervslejemål - m2
     */
    commercialLeasesSquareMeters?: number;
    /**
     * B3 Boliglejemål - m2
     */
    residentialLeasesSquareMeters?: number;
    /**
     * B1 Andelsboliger - m2
     */
    cooperativeHousingsSquareMeters?: number;
    /**
     * EjdVAnskPerM2Total
     */
    acquisitionPricePerSquareMeterTotal?: number;
    /**
     * EjdVAnskPerM2Andel
     */
    acquisitionPricePerSquareMeterCooperativeHousing?: number;
    /**
     * BoafgPerM2Andel
     */
    averagePropertyChargePerSquareMeterCooperativeHousing?: number;
    /**
     * GFOAPerM2Andel
     */
    debtLessAssetsPerSquareMeterCooperativeHousing?: number;
    /**
     * Boligleje pr. m² boliglejemål
     */
    incomePerSquareMeterCommercialLease?: number;
    /**
     * FordelingstalSum
     */
    distributionalSum?: number;
    /**
     * Filetoken which can be used in fetchFile method of documentWebservice
     */
    fileToken: string;
    /**
     * Comments from DomusPro
     */
    comments?: string;
    /**
     * B4 Erhvervslejemål - antal
     */
    numberOfCommercialLeases?: number;
    /**
     * B3 Boliglejemål - antal
     */
    numberOfResidentialLeases?: number;
    /**
     * B1 Andelsboliger - antal
     */
    numberOfCooperativeHousings?: number;
    /**
     * EjdVaerdiOffVurd
     */
    officialAssessment?: number;
    /**
     * EjdVOffPerM2Andel
     */
    officialAssessmentPerSquareMeterCooperativeHousing?: number;
    /**
     * EjdVOffPerM2Total
     */
    officialAssessmentPerSquareMeterTotal?: number;
    /**
     * EjdVABPerM2Total
     */
    valuerAssessmentPerSquareMeterTotal?: number;
    /**
     * OevrigeOmkPerOFA
     */
    otherCostsPercentage?: number;
    /**
     * BoafgPerIndtIAlt
     */
    propertyChargePercentage?: number;
    /**
     * EjdVaerdiABKr. Selve ejendommens værdi sådan som den indgår i beregningen af AB- krone. ***** AKTIVER OG PASSIVER (IDEELT SET EFTER ANDELSBOLIGFORENINGSLOVEN) M.M. *****
     */
    propertyValue: number;
    /**
     * AfdragPerOFA
     */
    repaymentsPercentage?: number;
    /**
     * AndelsVaerdi. Samlet Andelsværdi jf. Regnskab
     */
    shareValue?: number;
    /**
     * AndelsVPerM2Andel
     */
    suggestedShareValuePerSquareMeterCooperativeHousing?: number;
    /**
     * B6 Enheder i alt - m2
     */
    totalSquareMeters?: number;
    /**
     * B6 Enheder i alt - antal
     */
    totalUnits?: number;
    valuePrincipleId: number;
    /**
     * Methodname of how the property is valued
     */
    valuePrincipleName: string;
    /**
     * Balancesum
     */
    balance: number;
    /**
     * Egenkapital
     */
    equity?: number;
    /**
     * GeneralforsDato
     */
    generalAssemblyDate?: string;
    /**
     * IndtBoligafgift
     */
    propertyCharges?: number;
    /**
     * RegnskabSlutDato
     */
    reportEndDate: string;
    /**
     * RegnskabStartDato
     */
    reportStartDate: string;
    /**
     * Resultat
     */
    result: number;
    /**
     * GaeldIAlt
     */
    totalDebt?: number;
    /**
     * IndtIAlt
     */
    totalIncome: number;
    financialExpensesBudget?: number;
    maintenanceBudget?: number;
    propertyChargesBudget?: number;
    repaymentsBudget?: number;
    totalIncomeBudget?: number;
    /**
     * AndelsVaerdiJfGen. Samlet Andelsværdi jf. Generalforsamling
     */
    generalAssemblyShareValue?: number;
    /**
     * M1 Vedligeholdelse, løbende (gns. kr. pr. m²)
     */
    averageOngoingMaintenanceCostsPerSquareMeter?: number;
    /**
     * M2 Vedligeholdelse, genopretning og renovering (gns. kr. pr. m²)
     */
    averageRebuildingMaintenanceCostsPerSquareMeter?: number;
    /**
     * G3 Er der tinglyst en tilbagekøbsklausul (hjemfaldspligt) på foreningens ejendom
     */
    buyBackClauseRegistered?: boolean;
    /**
     * P Friværdi (gældsforpligtelser sammenholdt med ejendommens regnskabsmæssige værdi)
     */
    equityReleasePercentage?: number;
    financialExpenses?: number;
    /**
     * Andre ekstraordinære udgifter
     */
    expensesExtraordinary?: number;
    /**
     * Vedligeholdelsesomkostninger, løbende
     */
    maintenance?: number;
    /**
     * E1 Hæfter den enkelte andelshaver for mere, end det der er betalt for andelen
     */
    moreDebtThanShareValue?: boolean;
    /**
     * G1 Har foreningen modtaget offentligt tilskud, som skal tilbagebetales ved foreningens opløsning
     */
    mustReturnGrantsIfDissolved?: boolean;
    /**
     * R Årets afdrag pr. andels-m²
     */
    repaymentsPerSquareMeterCooperativeHousing?: number;
    /**
     * F3 Generalforsamlingsbestemte reserver
     */
    reservesPerGeneralAssembly?: number;
    /**
     * G2 Er foreningens ejendom pålagt tilskudsbestemmelser, jf. lov om frigørelse for visse tilskudsbestemmelser m.v. (lovbekendtgørelse nr. 978 af 19. oktober 2009)
     */
    subsidyProvisionsImposed?: boolean;
    /**
     * Regnskabsstandards version
     */
    reportStandardVersion: string;
    /**
     * Regnskabsstandards forklaring
     */
    reportStandardName: string;
    /**
     * H1 Boligafgift kr pr. m2 andel
     */
    newAveragePropertyChargePerSquareMeterCooperativeHousing?: number;
    /**
     * Kursværdi af prioritetsgæld
     */
    marketValueOfMortgageDebt?: number;
    /**
     * Igangværende retssager
     */
    ongoingTrials?: boolean;
    /**
     * Ydelser på prioritetsgæld
     */
    paymentsOnMortgageDebt?: number;
    /**
     * Omsætningsaktiver
     */
    currentAssets?: number;
    /**
     * % af boligafgift
     */
    accommodationCharge?: number;
    /**
     * Kr. pr m^2 andel
     */
    pricePerSquareMeterShare?: number;
    /**
     * Pr. fordelingstal
     */
    perDistributionNumber?: number;
    /**
     * Årets afdrag (ordinære)
     */
    repaymentsRegular?: number;
    /**
     * Korrigeret likviditetsresultat
     */
    adjustedLiquidityEarnings?: number;
    /**
     * Stressydelsesssats
     */
    stressPerformanceRate?: number;
    /**
     * Indicates if stress test is mandatory for this annual report or not.
     */
    stressTestMandatory?: boolean;
    /**
     * Stresstest alligevel
     */
    stressTestAnyway?: boolean;
    /**
     * StressManglerInfo
     */
    stressMissingInfo?: boolean;
    /**
     * Streskonsekvens forening
     */
    stressImpactAssociation?: number;
    /**
     * Der findes bemærkninger vedr. stressberegningen
     */
    stressOptimisticRisk?: boolean;
    /**
     * Bemærkninger til stressudregning
     */
    stressOptimisticNote?: string;
    /**
     * Netto stresspåvirkning
     */
    netStressfulInfluences?: number;
    /**
     * B5 Øvrige lejemål, kældre, garager m.v. - antal
     */
    numberOfOtherLeases?: number;
    /**
     * B5 Øvrige lejemål, kældre, garager m.v. - m2
     */
    otherLeasesSquareMeters?: number;
    /**
     * EjdVABPerM2Andel
     */
    valuerAssessmentPerSquareMeterCooperativeHousing?: number;
    /**
     * Vedligeholdelsesomkostninger, genopretning og renovering
     */
    maintenanceRebuilding?: number;
    /**
     * Budgetterede vedligeholdelsesomkostninger, løbende
     */
    maintenanceRebuildingBudget?: number;
    /**
     * H2 Erhvervslejeindtægt kr pr. m2 andel
     */
    newIncomePerSquareMeterCommercialLease?: number;
    /**
     * H3 Boliglejeindtægt kr pr. m2 andel
     */
    newIncomePerSquareMeterResidentialLease?: number;
    /**
     * Boligafgift pr. m² andel
     */
    incomePerSquareMeterResidentialLease?: number;
    /**
     * B2 Erhvervsandele i m²
     */
    commercialCooperativeShareSquareMeters?: number;
    /**
     * B2 Antal erhvervsandele
     */
    numberOfCommercialCooperativeShares?: number;
    /**
     * Større byggesager
     */
    expensesLargeConstruction?: number;
    extraordinaryIncome?: number;
    /**
     * Lejlighedssalg
     */
    incomeSale?: number;
    /**
     * Kursværdi af indexlån
     */
    marketValueOfIndexLoans?: number;
    /**
     * Kursværdi af swapaftale
     */
    marketValueOfSwapAgreement?: number;
    /**
     * Øvrige likviditetskorrektioner
     */
    liquidCorrections?: number;
    /**
     * Nominel værdi af indexlån
     */
    nominalValueOfIndexLoans?: number;
    /**
     * FinansOmkNetPerOFA
     */
    financialCostsPercentage?: number;
    /**
     * VedligeholdPerOFA
     */
    maintenanceCostsPercentage?: number;
    /**
     * ResultatBud
     */
    resultBudget?: number;
    /**
     * ErGodkentPaGen
     */
    approvedByGeneralAssembly?: boolean;
    /**
     * Er stiftelse. Kan antage værdierne Sand eller falsk eller null. Angiver om foreningen for dette regnskab er under stiftelse.
     */
    isAssociationCreation?: boolean;
    /**
     * Angiver om oplysninger fra dette regnsskab må bruges på offentlige portaler.
     */
    publicAllowed?: boolean;
    deleted?: boolean;
    publishedDate?: string;
    reservesPerGeneralAssemblyPerSquareMeter?: number;
    percentageReservesLessPropertyValue?: number;
    maintenanceBudgetPerSquareMeter?: number;
    cooperateCrown?: number;
    debtExcludingAssets?: number;
    mortgagingRatio?: number;
    /**
     * ReservUAPerM2Andel
     */
    reservesPerSquareMeterCooperativeHousing?: number;
    propertyValuePerSquareMeter?: number;
    gearing?: number;
};

