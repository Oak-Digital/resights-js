/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { BfeBestemtFastEjendomService } from './services/BfeBestemtFastEjendomService';
import { CadastresMatriklerJordstykkerService } from './services/CadastresMatriklerJordstykkerService';
import { CvrDetCentraleVirksomhedsregisterService } from './services/CvrDetCentraleVirksomhedsregisterService';
import { EmoEnergimRkeordningenService } from './services/EmoEnergimRkeordningenService';
import { FinancialsRegnskaberForVirksomhederService } from './services/FinancialsRegnskaberForVirksomhederService';
import { GiGrundejernesInvesteringsfondService } from './services/GiGrundejernesInvesteringsfondService';
import { GisGeospatialInformationSystemsService } from './services/GisGeospatialInformationSystemsService';
import { HealthcheckService } from './services/HealthcheckService';
import { PersonsPersonerEjerfortegnelsenService } from './services/PersonsPersonerEjerfortegnelsenService';
import { PlandataService } from './services/PlandataService';
import { TinglysningAktueltTinglystDokumentAtdService } from './services/TinglysningAktueltTinglystDokumentAtdService';
import { TinglysningAndelsboligService } from './services/TinglysningAndelsboligService';
import { TinglysningDownloadDocumentsService } from './services/TinglysningDownloadDocumentsService';
import { TinglysningEjendomService } from './services/TinglysningEjendomService';
import { TinglysningKRetJService } from './services/TinglysningKRetJService';
import { TinglysningNdringerService } from './services/TinglysningNdringerService';
import { TinglysningPersonVirksomhedService } from './services/TinglysningPersonVirksomhedService';
import { TinglysningPTegningService } from './services/TinglysningPTegningService';
import { TinglysningVirksomhedService } from './services/TinglysningVirksomhedService';
import { TokenService } from './services/TokenService';
import { TradesRealEstateTransactionsTinglysteService } from './services/TradesRealEstateTransactionsTinglysteService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ResightsOpenAPI {
  public readonly bfeBestemtFastEjendom: BfeBestemtFastEjendomService;
  public readonly cadastresMatriklerJordstykker: CadastresMatriklerJordstykkerService;
  public readonly cvrDetCentraleVirksomhedsregister: CvrDetCentraleVirksomhedsregisterService;
  public readonly emoEnergimRkeordningen: EmoEnergimRkeordningenService;
  public readonly financialsRegnskaberForVirksomheder: FinancialsRegnskaberForVirksomhederService;
  public readonly giGrundejernesInvesteringsfond: GiGrundejernesInvesteringsfondService;
  public readonly gisGeospatialInformationSystems: GisGeospatialInformationSystemsService;
  public readonly healthcheck: HealthcheckService;
  public readonly personsPersonerEjerfortegnelsen: PersonsPersonerEjerfortegnelsenService;
  public readonly plandata: PlandataService;
  public readonly tinglysningAktueltTinglystDokumentAtd: TinglysningAktueltTinglystDokumentAtdService;
  public readonly tinglysningAndelsbolig: TinglysningAndelsboligService;
  public readonly tinglysningDownloadDocuments: TinglysningDownloadDocumentsService;
  public readonly tinglysningEjendom: TinglysningEjendomService;
  public readonly tinglysningKRetJ: TinglysningKRetJService;
  public readonly tinglysningNdringer: TinglysningNdringerService;
  public readonly tinglysningPersonVirksomhed: TinglysningPersonVirksomhedService;
  public readonly tinglysningPTegning: TinglysningPTegningService;
  public readonly tinglysningVirksomhed: TinglysningVirksomhedService;
  public readonly token: TokenService;
  public readonly tradesRealEstateTransactionsTinglyste: TradesRealEstateTransactionsTinglysteService;
  public readonly request: BaseHttpRequest;
  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? '',
      VERSION: config?.VERSION ?? '2.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });
    this.bfeBestemtFastEjendom = new BfeBestemtFastEjendomService(this.request);
    this.cadastresMatriklerJordstykker =
      new CadastresMatriklerJordstykkerService(this.request);
    this.cvrDetCentraleVirksomhedsregister =
      new CvrDetCentraleVirksomhedsregisterService(this.request);
    this.emoEnergimRkeordningen = new EmoEnergimRkeordningenService(
      this.request
    );
    this.financialsRegnskaberForVirksomheder =
      new FinancialsRegnskaberForVirksomhederService(this.request);
    this.giGrundejernesInvesteringsfond =
      new GiGrundejernesInvesteringsfondService(this.request);
    this.gisGeospatialInformationSystems =
      new GisGeospatialInformationSystemsService(this.request);
    this.healthcheck = new HealthcheckService(this.request);
    this.personsPersonerEjerfortegnelsen =
      new PersonsPersonerEjerfortegnelsenService(this.request);
    this.plandata = new PlandataService(this.request);
    this.tinglysningAktueltTinglystDokumentAtd =
      new TinglysningAktueltTinglystDokumentAtdService(this.request);
    this.tinglysningAndelsbolig = new TinglysningAndelsboligService(
      this.request
    );
    this.tinglysningDownloadDocuments = new TinglysningDownloadDocumentsService(
      this.request
    );
    this.tinglysningEjendom = new TinglysningEjendomService(this.request);
    this.tinglysningKRetJ = new TinglysningKRetJService(this.request);
    this.tinglysningNdringer = new TinglysningNdringerService(this.request);
    this.tinglysningPersonVirksomhed = new TinglysningPersonVirksomhedService(
      this.request
    );
    this.tinglysningPTegning = new TinglysningPTegningService(this.request);
    this.tinglysningVirksomhed = new TinglysningVirksomhedService(this.request);
    this.token = new TokenService(this.request);
    this.tradesRealEstateTransactionsTinglyste =
      new TradesRealEstateTransactionsTinglysteService(this.request);
  }
}
