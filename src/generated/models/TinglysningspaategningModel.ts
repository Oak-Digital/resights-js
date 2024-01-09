/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnmaerkningModel } from './AnmaerkningModel';
import type { BemaerkningModel } from './BemaerkningModel';
import type { FristInformationModel } from './FristInformationModel';
import type { RettighedModelSimpel } from './RettighedModelSimpel';
import type { TinglysningObjektIdentifikatorModel } from './TinglysningObjektIdentifikatorModel';
import type { TinglysningStatusEnum } from './TinglysningStatusEnum';
export type TinglysningspaategningModel = {
    /**
     * Identifikator på det dokument, der kan være et resultat af tinglysningen. Ved oprettende dokumenter indeholder den DokumentIdentifikator. Ved påtegninger indeholder den DokumentIdentifikator og revisionsnummer. DokumentIdentifikator vil ved påtegninger være identisk med indholdet af DokumentRevisionIdentifikator i TinglysningsObjektIdentifikatorSamling. I tilfælde af aflysning vil der ikke være angivet en ny DokumentRevisionIdentifikator. Hvis TinglysningStatusKode er 'afvist', vil der ikke være en ny DokumentRevisionIdentifikator.
     */
    Id?: string;
    /**
     * Revisionsnummer for rettighedsdokument.
     */
    RevisionNummer?: number;
    /**
     * Ved oprettende dokumenter indeholder det, dato/løbenummer (Menneskevenligt alias) for det dokument, der er resultatet af tinglysningen.
     */
    AliasId?: string;
    /**
     * Ved anmeldelse af fuldmagt, returneres en FuldmagtIdentifikator. Denne skal bruges ved tilbagekaldelse.
     */
    FuldmagtIdentifikator?: string;
    RettighedSamling?: Array<RettighedModelSimpel>;
    /**
     * Her angives den ekspeditionstype, der har ført til Tinglysningsrettens tinglysningspåtegning. I tilfælde af kombination af påtegnende ekspeditionstyper, kan man skelne mellem hvilke tinglysningspåtegningselementer, der hører til hvilke ekspeditionstyper.
     */
    EkspeditionstypeId: number;
    /**
     * Ekspeditionstype i tekstformat
     */
    EkspeditionstypeTekst?: string;
    /**
     * I anmeldelser med påtegninger kan der optræde flere ekspeditionstyper i én anmeldelse. Dette kan også være flere påtegninger med samme ekspeditionstypenummer. Det betyder at man i en sådan situation ikke ud fra TinglysningObjektIdentifikator og EkspeditionstypeIdentifikator kan afgøre, hvilken påtegning i enmeldelsen det enkelte TinglysningpaategningElement vedrører. Ved at angive EkspeditionstypeRaekkefoelge bliver det muligt.
     */
    EkspeditionstypeRaekkefoelge?: number;
    /**
     * Hvis ændringen accepteres i forhold til TinglysningsObjektet angivet i TinglysningObjektIdentifikator vil TinglysningStatusKode indeholde 'tinglyst'. Hvis der for rettigheden er angivet frist vil TinglysningStatusKode indeholde 'tinglystMedFrist'. Hvis ændringen i forhold til TinglysningsObjektet ikke accepteres vil TinglysningStatusKode indeholde 'afvist'.
     */
    TinglysningStatus: TinglysningStatusEnum;
    /**
     * Identifikator for det tinglysningsobjekt, som tinglysningspåtegningen vedrører. TinglysningsObjektIdentifikator vil i situationer med TinglysningsStatuskode 'tinglyst' eller 'tinglystMedfrist' indeholde en EjendomIdentifikator, dog vil den i tilfælde af Underpantsætning indeholde DokumentRevisionIdentifikator. I de situationer hvor TinglysningsStatusKode indeholder 'afvist' indeholder TinglysningsObjektIdentifikator den identifikator, der er angivet i anmeldelsen. Ved underpant på et oprettende ejerpantebrev vil der være to TinglysningspaategningElement elementer. En med ejendommen (EjendomsIdentifikator i TinglysningsObjektIdentifikator) og ejerpantebrevet angivet i DokumentRevisionIdentifikator og en med ejerpantebrevets DokumentRevisionIdentifikator angivet i TinglysningObjektIdentifikator og underpantet (der oprettes som separat dokument) i DokumentRevisionIdentifikator.
     */
    TinglysningObjektIdentifikator: TinglysningObjektIdentifikatorModel;
    /**
     * Bemærkninger fra de automatiske kontroller og sagsbehandlingen. En eller flere af disse kan være årsagen til en eventuel afvisning af anmeldelsen. Bemærkninger knytter supplerende information til resultatet af de udførte kontroller. Bemærkninger angives i form af kode for standard bemærkningstekst, eller kode for fri tekst (hvor tinglysningsmedarbejderen ikke anvender standard bemærkningstekst, men selv anfører bemærkningsteksten).
     */
    BemaerkningSamling?: Array<BemaerkningModel>;
    /**
     * Samling af anmaerkninger. Det kan være anmaerkninger om servitutter og hæftelser angivet ved nummer. Anmærkninger vedrører altid respekter. Mangler der i en anmeldelse respekt for en eller flere hæftelser eller servitutter, giver sagsbehandlingen anledning til anmærkninger herom. Anmærkning for servitutter indeholder kode for yderligere oplysninger om servitutten.
     */
    AnmaerkningSamling?: Array<AnmaerkningModel>;
    /**
     * FristInformation ved tinglysning med frist. Her oplyses årsag og fristdato.
     */
    FristInformationSamling?: Array<FristInformationModel>;
};

