import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormPPServiceService {

  constructor(private http: HttpClient) {}

  submitForm(formData: any): Observable<any> {
    const data  = {
      "step1": {
        "firstName": "Nour Allah",
        "lastName": "Tabib",
        "ddn": "1999-02-11T23:00:00.000Z",
        "nationalite": "tunisienne",
        "adressePersonnelle": "Tunis",
        "adresseCourrier": "16 rue tripoli la goulette",
        "resident": "true",
        "paysResidence": "Tunisie",
        "phone": "93776308",
        "docid": "15013343",
        "documentType": "CIN",
        "dateEmission": "2017-02-07T23:00:00.000Z",
        "lieuEmission": "tunis",
        "adresseEmail": "nourallahtabib@gmail.com",
        "dateExpiration": "2023-09-19T23:00:00.000Z",
        "PPE": "false",
        "fonction": "Engineer",
        "PPI": "Non",
        "pays": "Tunisie",
        "raison": "personnel",
        "agentType": "SALARIE",
        "employeur": "hydatis",
        "adressePro": "tunis, rue aa",
        "telFaxPro": "45678990",
        "emailPro": "stages.company@hydatis.tn",
        "typeActivite": "software",
        "zoneActivite": "tunisie"
      },
      "step2": {
        "comptePaiement": "Niveau 1",
        "virementInterne": true,
        "virementBancaire": true,
        "autreMoyenPaiement": true,
        "autreMoyenPaiementText": "Remise de chèque",
        "montantsJournaliers": "122.9",
        "montantsHebdomadaires": "222",
        "montantsMensuels": "44444",
        "cash": true,
        "virementdebit": true,
        "autreMoyendebit": true,
        "autreMoyendebitText": "Paiement par carte",
        "montantsJournaliersdebit": "333",
        "montantsHebdomadairesdebit": "333333",
        "montantsMensuelsdebit": "333.9",
        "virementespeces": true,
        "revenusPro": true,
        "produitInvestissement": true,
        "autresource": true,
        "autreSourceText": "Rente de propriété",
        "isBeneficaire": false,
        "lastNameBeneficaire": "Doe",
        "firstNameBeneficaire": "John",
        "docIdBeneficaire": "98765432",
        "ddnBeneficaire": "1990-05-15T23:00:00.000Z",
        "documentTypeBeneficaire": "PASSPORT",
        "dateEmissionBeneficiaire": "2023-09-19T23:00:00.000Z",
        "lieuEmissionBeneficiaire": "New York",
        "dateExpirationBeneficiaire": "2023-09-19T23:00:00.000Z",
        "nationaliteBeneficiaire": "American",
        "isResidentBeneficiaire": "true",
        "paysResidenceBeneficiaire": "United States",
        "pPEBeneficiaire": "false",
        "fonctionBeneficiaire": "Doctor"
      },
      "step3": {
        "banque": "Bank of Tunisia",
        "adressebanque": "123 Main Street, Tunis",
        "code": "12345",
        "numCompte": "9876543210"
      },
      "step4": {
        "certification": true,
        "nomPrenomAgent": "Nour Allah Tabib"
      },
      "id": 1
    };
    
    return this.http.post('http://localhost:8022/api/formpp', data)
      .pipe(
        catchError((error: any) => {
          // Handle the error here
          console.error('An error occurred:', error);
          // You can also re-throw the error to propagate it to the calling component
          return throwError(error);
        })
      );
  }
}
