/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DARAddress } from './DARAddress';
/**
 * Definition:
 * En Enhed er betegnelsen for en bolig i et parcelhus, en lejlighed eller f.eks. et
 * erhvervslejemål. En Enhed ligger altid inde i en Bygning.
 *
 * Beskrivelse:
 * Enfamiliehuse har typisk en boligenhed, etageboligbebyggelse har én boligenhed for
 * hver lejlighed, og erhvervsbygninger har én eller flere enheder til erhverv.
 * En enhed har typisk sin egen selvstændige indgang. Under enheder registreres bl.a.
 * samlet areal, areal til beboelse/erhverv samt anvendelsen.
 * Enheden skal være afgrænset og skal være fysisk adskilt fra andre enheder.
 * En Enhed kan være et kælderrum eller et loftsrum.
 *
 * Bemærkninger:
 * En Enhed har kun én relation til én Opgang og én Etage og ikke en direkte relation
 * til en Bygning.
 */
export type BBRUnitResponse = {
  /**
   * Persistent unik nøgle.
   */
  id: string;
  namespace: string;
  /**
   * Angivelse af hvor et forvaltningsobjekt er i sin livscyklus.
   */
  status?: number;
  /**
   * Den manuelle eller IT-understøttede proces hvori forretningsområdet håndterer hændelsen.
   */
  business_process?: number;
  /**
   * Den del af den offentlige forretning der håndterer hændelsen og derved udvirker ændringen i data.
   */
  business_area?: string;
  /**
   * Den begivenhed i virkeligheden som udløste ændringen i data.
   */
  business_event?: string;
  /**
   * Tidspunktet hvor registreringen er foretaget.
   */
  registration_from: string;
  /**
   * Tidspunktet hvor en ny registrering er foretaget på objektet, og hvor denne version således ikke længere er den seneste.
   */
  registration_to?: string;
  /**
   * Den aktør der har foretaget registreringen.
   */
  registration_actor: string;
  /**
   * Tidspunktet hvorfra objektet har virkning.
   */
  effect_from: string;
  /**
   * Tidspunktet hvor objektets virkning ophører.
   */
  effect_to?: string;
  /**
   * Den aktør der har afstedkommet objektets virkning.
   */
  effect_actor: string;
  municipality_code?: number;
  /**
   * Angiver henvisning fra supplementsrum til moderlejlighed.
   */
  enh008_uuid_to_mother_apartment?: string;
  /**
   * Angiver kode for enhedens anvendelse.
   */
  enh020_unit_usage?: number;
  /**
   * Angiver kode for boligtype.
   */
  enh023_property_type: string;
  /**
   * Angiver kode for kondemneret boligenhed.
   */
  enh024_unit_condemned?: number;
  /**
   * Angiver oprettelsesdato for enheden.
   */
  enh025_unit_identification_creation_date?: string;
  /**
   * Angiver enhedens samlede areal.
   */
  enh026_area_unit_total?: number;
  /**
   * Angiver enhedens areal til beboelse.
   */
  enh027_area_residential?: number;
  /**
   * Angiver enhedens areal til erhverv.
   */
  enh028_area_commercial?: number;
  /**
   * Angiver kode for kilde til oplysninger om areal.
   */
  enh030_area_unit_source?: number;
  /**
   * Angiver antal værelser i enheden.
   */
  enh031_number_rooms?: number;
  /**
   * Angiver kode for enhedens toiletforhold.
   */
  enh032_facilities_toilet?: string;
  /**
   * Angiver kode for enhedens badeforhold.
   */
  enh033_facilities_shower?: string;
  /**
   * Angiver kode for enhedens køkkenforhold.
   */
  enh034_facilities_kitchen?: string;
  /**
   * Angiver kode for enhedens energiforsyning.
   */
  enh035_energy_supply?: number;
  /**
   * Angiver enhedens andet areal
   */
  enh039_area_other?: number;
  /**
   * Angiver eventuel dispensation til anvendelse af enheden
   */
  enh041_lawful_usage?: string;
  /**
   * Angiver dato for tidsbegrænset dispensation.
   */
  enh042_temporary_dispensation_date?: string;
  /**
   * Angiver dato for delvis ibrugtagningstilladelse.
   */
  enh044_partial_commissioning_permit_date?: string;
  /**
   * Angiver enhedens udlejningsforhold
   */
  enh045_rental_status?: number;
  /**
   * Angiver offentlig støtte.
   */
  enh046_public_subsidy?: number;
  /**
   * Angiver dato for indflytning.
   */
  enh047_occupancy_date?: string;
  /**
   * Angiver om boligen er godkendt som tom bolig
   */
  enh048_approved_empty_home?: number;
  /**
   * Angiver enhedens varmeinstallation.
   */
  enh051_heating_installation?: number;
  /**
   * Angiver enhedens opvarmningsmiddel.
   */
  enh052_heating_medium?: number;
  /**
   * Angiver enhedens supplerende varme.
   */
  enh053_heating_supplementary?: number;
  /**
   * Angiver enhedens andel i fælles adgangsareal.
   */
  enh060_area_unit_common_access_share?: number;
  /**
   * Angiver enhedens areal af åben overdækning.
   */
  enh061_area_open_cover?: number;
  /**
   * Angiver enhedens areal af lukket overdækning.
   */
  enh062_area_closed_cover_outhouse?: number;
  /**
   * Angiver antal værelser i enheden der anvendes til erhverv.
   */
  enh063_number_commercial_rooms?: number;
  /**
   * Angiver antal vandskyllende toiletter.
   */
  enh065_number_flushing_toilets?: number;
  /**
   * Angiver antal badeværeslser.
   */
  enh066_number_bathrooms?: number;
  /**
   * Angiver årstal for støjisolering.
   */
  enh067_noise_insulation?: number;
  /**
   * Angivelse af om en tilladelse til flexbolig er personlig eller ej og om den er med eller uden tidsbegrænsning
   */
  enh068_flex_housing_permission?: number;
  /**
   * &#8203;Dato for ophør af en tidsbegrænset flexboligtilladelse
   */
  enh069_flex_housing_termination_date?: string;
  /**
   * Samlet areal af åben altan og/eller åben tagterrasse, som lejligheden har eneadgang til
   */
  enh070_area_open_balcony_rooftop?: number;
  /**
   * Angiver adressens funktion i forhold til denne enhed , dvs. om den identificerer netop denne enhed i bygningen eller blot fungerer vejledende, fordi adressen egentlig er fastsat til en anden enhed i denne bygning eller i en anden bygning
   */
  enh071_address_function?: number;
  /**
   * Angvier gyldighedsdato for enheden
   */
  enh101_validation_date?: string;
  /**
   * Oplysning som kan knyttes til en erhvervsenhed som har anvendelser. Anvendelseskoden for det pågældende areal fremgår af feltet enh105
   */
  enh102_area_hereof1?: number;
  /**
   * Oplysning som kan knyttes til en erhvervsenhed som har anvendelser. Anvendelseskoden for det pågældende areal fremgår af feltet enh106
   */
  enh103_area_hereof2?: number;
  /**
   * Oplysning som kan knyttes til en erhvervsenhed som har anvendelser. Anvendelseskoden for det pågældende areal fremgår af feltet enh107
   */
  enh104_area_hereof3?: number;
  /**
   * Oplysning som kan knyttes til en erhvervsenhed som har anvendelser. Enhedens areal med den pågældende anvendelse fremgår af feltet enh102
   */
  enh105_supplementary_application_code1?: number;
  /**
   * Oplysning som kan knyttes til en erhvervsenhed som har anvendelser. Enhedens areal med den pågældende anvendelse fremgår af feltet enh103
   */
  enh106_supplementary_application_code2?: number;
  /**
   * Oplysning som kan knyttes til en erhvervsenhed som har anvendelser. Enhedens areal med den pågældende anvendelse fremgår af feltet enh104
   */
  enh107_supplementary_application_code3?: number;
  /**
   * Angiver enhedens fysiske areal til beboelse.
   */
  enh127_area_physical_residential?: number;
  /**
   * Angiver enhedens fysiske areal til erhverv.
   */
  enh128_area_physical_commercial?: number;
  /**
   * Beskrivende tekstnotat om særlige forhold for dette BBR-element
   */
  enh500_note?: string;
  address?: DARAddress;
  building_id: string;
  floor_id: string;
  staircase_id: string;
};
