export interface agentPP {
    step1: {
      firstname: string;
      lastname: string;
      ddn: Date;
      Nationalite: string;
      AdressePersonnelle: string;
      AdresseCourrier: string;
      Resident: 'Resident' | 'NonResident';
      PaysResidence: string;
      phone: string;
      doc: string;
      DocumentType: 'type1' | 'type2';
      DateEmission: Date;
      LieuEmission: string;
      AdresseEmail: string;
      PPE: 'Oui' | 'Non';
      Fonction?: string;
      PPI: 'Oui' | 'Non';
      pays?: string;
      raison: string;
      AgentType: 'Retraité' | 'Profession libérale' | 'Salarié';
      employeur: string;
      adressePro: string;
      telFaxPro: string;
      emailPro: string;
      typeActivite: string;
      zoneActivite: string;
    };
    step2: {
      comptePaiement: 'Niveau 1' | 'Niveau 2' | 'Niveau 3';
      virementInterne: boolean;
      virementBancaire: boolean;
      autreMoyenPaiement: boolean;
      autreMoyenPaiementText?: string;
      montantsJournaliers: string;
      montantsHebdomadaires: string;
      montantsMensuels: string;
      cash: boolean;
      virementdebit: boolean;
      autreMoyendebit: boolean;
      autreMoyendebitText?: string;
      montantsJournaliersdebit: string;
      montantsHebdomadairesdebit: string;
      montantsMensuelsdebit: string;
      virementespeces: boolean;
      RevenusPro: boolean;
      ProduitInvestissement: boolean;
      autresource: boolean;
      autreSourceText?: string;
    };
    step3: {
        banques: Bank[];
    };
    step4: {
      certification: boolean;
      nomPrenomAgent: string;
      datesubmit: Date;
      // You might need to handle the signature differently depending on how it's implemented
    };
   
  }
  export interface Bank {
    banque: string;
    adressebanque: string;
    code: string;
    numCompte: string;
  }

  