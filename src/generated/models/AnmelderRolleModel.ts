/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnmelderTypeEnum } from './AnmelderTypeEnum';
import type { BroekModel } from './BroekModel';
import type { EjendomIdentifikatorModel } from './EjendomIdentifikatorModel';
import type { EmailModel } from './EmailModel';
import type { RolleAdresseModel } from './RolleAdresseModel';
import type { RolleTypeEnum } from './RolleTypeEnum';
export type AnmelderRolleModel = {
  /**
   * CprNummer eller CvrNummer eller Myndighedskode
   */
  Id: string;
  /**
   * Rolletype. I tilfælde af adkomsthaver anvendes enumerationen ejer. Rolletypen medebitor er ugyldig rolle, men er medtaget pga. bagudkompatibilitet.
   */
  Type?: RolleTypeEnum;
  /**
   * CprNummer eller CvrNummer eller Myndighedskode
   */
  RolleId?: string;
  /**
   * Angiver typen af rolle-id.
   */
  RolleType?: AnmelderTypeEnum;
  /**
   * Navn
   */
  Navn?: string;
  /**
   * Stillingsbetegnelse
   */
  Stilling?: string;
  /**
   * Telefon
   */
  Telefon?: string;
  /**
   * Email
   */
  Email?: string;
  /**
   * Samling af maksimalt 10 Email af referencer
   */
  EmailSamling?: Array<EmailModel>;
  /**
   * Kan være udeladt i opslag, hvis personen har adressebeskyttelse
   */
  Adresse?: RolleAdresseModel;
  /**
   * Addressetekst
   */
  AdresseTekst?: string;
  /**
   * Identifikation af en ejendom.
   */
  EjendomPaataleberettiget?: EjendomIdentifikatorModel;
  /**
   * True betyder at den påtalende ejendom er herskende. False angiver at den påtalende ikke er herskende.
   */
  HerskendeEjendom?: boolean;
  /**
   * Angiver af størrelsen på den del af sælgerens adkomst som sælgeren afhænder.
   */
  SaelgerAndel?: BroekModel;
  /**
   * Angiver den del af den samlede ejendom som køberen erhverver i handlen.
   */
  KoeberAndel?: BroekModel;
  /**
   * Angiver en reference til en Rolle i anmeldelsen via id atributten på Rolle elementet.
   */
  RolleReferenceSamling?: Array<string>;
  /**
   * True, betyder at rollen ikke skal signere og derved ikke vil fremgå i rollens underskriftsmappe. False, betyder at rollen skal signere og derved vil fremgå i rollens underskriftsmappe.
   */
  UnderskriftIkkeNoedvendigIndikator?: boolean;
  /**
   * Begrundelse for, hvorfor der ikke skal skrives under.
   */
  UnderskriftIkkeNoedvendigBegrundelse?: boolean;
};
