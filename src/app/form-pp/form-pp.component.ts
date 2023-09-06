import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router  } from '@angular/router';
import { NgSignaturePadOptions,SignaturePadComponent } from '@almothafar/angular-signature-pad/public-api';
import {PointGroup} from 'signature_pad';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormPPServiceService } from '../service/form-pp-service.service';




@Component({
  selector: 'app-form-pp',
  templateUrl: './form-pp.component.html',
  styleUrls: ['./form-pp.component.css']
})
export class FormPpComponent implements OnInit {

  showFirstStep: boolean = false;

  constructor(private formBuilder: FormBuilder,  private router: Router, private _formService: FormPPServiceService, private _snackBar: MatSnackBar) {
    this.listData = [];
  }
  
  Enregistrer!: FormGroup;
  listData: any;
  isLinear=true;

  

 
 

  
  public addBank(): void {
    // Get the step3 form group
    const step3Group = this.Enregistrer.get('step3') as FormGroup;
  
    
    this.listData.push(step3Group.value);
  
    step3Group.reset();
  }
  

  public removeBank(element: any): void {
    const index = this.listData.indexOf(element);
    if (index !== -1) {
      this.listData.splice(index, 1);
    }
  }
  
  


  ngOnInit(): void {
    
    this.Enregistrer = this.formBuilder.group({
      step1: this.formBuilder.group({
        firstname: [''],
        lastname: [''],
        ddn: [''],
        Nationalite: [''],
        AdressePersonnelle: [''],
        AdresseCourrier: [''],
        Resident: [''],
        PaysResidence: [''],
        phone: [''],
        docid: [''],DocumentType: [''],
        DateEmission: [''],LieuEmission: [''],AdresseEmail: [''],DateExpiration: [''],
        PPE: [''],Fonction: [''],
        PPI: [''],pays: [''],
        raison: [''],
        AgentType: [''],
        employeur: [''],adressePro: [''],
        telFaxPro: [''],emailPro: [''],
        typeActivite: [''],zoneActivite: [''],

      }),
      step2: this.formBuilder.group({
        comptePaiement: [''],
        virementInterne: [''],
        virementBancaire: [''],
        autreMoyenPaiement: [''],
        autreMoyenPaiementText: [''],
        montantsJournaliers: [''],
        montantsHebdomadaires: [''],
        montantsMensuels: [''],

        cash: [''],
        virementdebit: [''],
        autreMoyendebit: [''],
        autreMoyendebitText: [''],
        montantsJournaliersdebit: [''],
        montantsHebdomadairesdebit: [''],
        montantsMensuelsdebit: [''],
        virementespeces: [''],
        RevenusPro: [''],
        ProduitInvestissement: [''],
        autresource: [''],
        autreSourceText: [''],
        isBeneficaire: [''],
        lastnameBeneficaire: [''], firstnameBeneficaire: [''],
        docIdBeneficaire: [''],
        ddnBeneficaire: [''],
        DocumentTypeBeneficaire: [''],
        DateEmissionBeneficaire: [''],
        LieuEmissionBeneficaire: [''],
        DateExpirationBeneficaire: [''],
        NationaliteBeneficaire: [''],
        isResidentBeneficaire: [''],
        PaysResidenceBeneficaire: [''],
        PPEBeneficaire: [''],
        FonctionBeneficaire: [''],
      }),
      step3: this.formBuilder.group({
        banque: [''],
        adressebanque: [''],
        code: [''],
        numCompte: [''],
      }),


      
      step4: this.formBuilder.group({
        certification: [false, Validators.requiredTrue],
        nomPrenomAgent: ['', Validators.required],
        datesubmit: { value: new Date(), disabled: true },
      })
    });

    
   
  }
  

  


 
  

  get step1form(){
    return this.Enregistrer.get("step1") as FormGroup;
  }
  get step2form(){
    return this.Enregistrer.get("step2") as FormGroup;
  }
  get step3form(){
    return this.Enregistrer.get("step3") as FormGroup;
  }
  get step4form(){
    return this.Enregistrer.get("step4") as FormGroup;
  }
  

  
  /*HandleSubmit() {
    if (this.Enregistrer.valid) {
      console.log(this.Enregistrer.value);
  
      const step4Group = this.Enregistrer.get('step4') as FormGroup;
      const datesubmitControl = step4Group.get('datesubmit');
  
      if (datesubmitControl) {
        const currentDate = datesubmitControl.value;
        this.Enregistrer.reset({
          step4: { datesubmit: currentDate }
        });
      }
  
      console.log('Form submitted successfully');
  
      
    }
  }*/ 
  HandleSubmit(formData: any): void {
    if (this.Enregistrer.valid) {
      console.log(this.Enregistrer.value);
  
      
      this._formService.submitForm(this.Enregistrer.value).subscribe(
        (response) => {
          console.log('Form submitted successfully');
          
          this._snackBar.open('formulaire ajouté avec succès', 'Close', {
            duration: 3000,
          }).afterDismissed().subscribe(() => {
           
            this.router.navigate(['/']);
          });
        },
        (error) => {
          console.error('Form submission failed', error);
          
        }
      );
  
      this.Enregistrer.reset();
    }
  }
 
  
  
  
  onClose() {
    
    this.router.navigate(['/']);
  }
  

  
}  