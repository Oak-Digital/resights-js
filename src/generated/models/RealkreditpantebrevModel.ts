/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FuldmagtAnmeldtModel } from './FuldmagtAnmeldtModel';
import type { HaeftelsePantebrevFormularLovpligtigKodeEnum } from './HaeftelsePantebrevFormularLovpligtigKodeEnum';
import type { HaeftelseVilkaarRenteModel } from './HaeftelseVilkaarRenteModel';
import type { LoebetidModel } from './LoebetidModel';
import type { RefinansieringModel } from './RefinansieringModel';
import type { SaerligLovgivningModel } from './SaerligLovgivningModel';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
import type { VilkaarBetalingModel } from './VilkaarBetalingModel';
import type { VilkaarOpsigelseModel } from './VilkaarOpsigelseModel';
export type RealkreditpantebrevModel = {
  /**
   * Hovedstolen for et lån.
   */
  Beloeb: number;
  /**
   * ISO 4217 valutakode.
   */
  Valuta?: string;
  /**
   * Angives hvis det er aftalt eller muligt. Hvis den ikke er angivet betyder det at refinansiering ikke er mulig. Refinansiering svarer til saerlige laanevilkaar refinansiering
   */
  Refinansiering?: RefinansieringModel;
  /**
   * Angiver om hovedstol og restgaeld paa en haeftelse er indeksreguleret og svarer til saerlige laanevilkaar for indeksregulering.
   */
  IndeksreguleringIndikator: boolean;
  /**
   * Lån indeholdt i pantebrev
   */
  Laan: string;
  /**
   * Kreditors egen populær betegnelse for lånet. Undgå gentagelse af vilkår som er angivet andet sted.
   */
  KreditorbetegnelseTekst?: TekstGruppeNestedModel;
  /**
   * Aftalt løbetid i antal måneder.
   */
  Loebetid?: LoebetidModel;
  /**
   * Rentevilkår på en hæftelse.
   */
  VilkaarRente?: HaeftelseVilkaarRenteModel;
  /**
   * Betalingsvilkår på en hæftelse
   */
  VilkaarBetaling?: VilkaarBetalingModel;
  /**
   * Opsigelsesvilkår på en hæftelse.
   */
  VilkaarOpsigelse?: VilkaarOpsigelseModel;
  /**
   * True angiver at haeftelsen er med oprykningsret. False angiver at automatisk oprykningsret er fravalgt.
   */
  OprykningsretIndikator: boolean;
  /**
   * Samling af saerlige bestemmelser og individuelle vilkaar som anvendes i haeftelser
   */
  SaerligBestemmelseSamling?: Array<TekstGruppeNestedModel>;
  /**
   * Samling af anden tekst som anvendes i haeftelser
   */
  AndenTekstSamling?: Array<TekstGruppeNestedModel>;
  /**
   * PersonligtGaeldsansvarSamling
   */
  PersonligtGaeldsansvarSamling?: Array<string>;
  /**
   * Angiver om hæftelsen har eller ikke har rektaklausul. True angiver at haeftelsen har rektaklausul. False angiver at haeftelsen ikke har rektaklausul.
   */
  KlausulRektaIndikator: boolean;
  /**
   * Angiver om der er forbud mod retsforfølgning i forbindelse med hæftelsen. Resulterer i teksten Dette pantebrev kan ikke gøres til genstand for individuel retsforfølgning.
   */
  RetsforfoelgningsforbudIndikator: boolean;
  /**
   * Indeholder oplysninger om lovgivning, som en anmeldelse kan henvise til, f.eks. omkring særlige vilkår for prioritering ved pantsætning af fast ejendom eller tinglysning af servitutter, der skal tillægges forrang. Felterne er opsat således, at alene det ene er nødvendigt, idet lovgivningen kan angives både struktureret eller som en tekststreng. Alle lovhenvisninger medfører, at anmeldelsen udtages til manuel behandling.
   */
  SaerligLovgivning?: SaerligLovgivningModel;
  /**
   * Angiver koder for Justitsministeriets lovpligtige pantebrevsformularer
   */
  PantebrevFormularLovpligtigKode?: HaeftelsePantebrevFormularLovpligtigKodeEnum;
  /**
   * Samling af anmeldte fuldmagter.
   */
  FuldmagtAnmeldtSamling?: Array<FuldmagtAnmeldtModel>;
};
