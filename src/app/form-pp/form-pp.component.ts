import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-form-pp',
  templateUrl: './form-pp.component.html',
  styleUrls: ['./form-pp.component.css']
})
export class FormPpComponent implements OnInit {

  
  constructor(private formBuilder: FormBuilder) {
    
  }
  
  Enregistrer!: FormGroup;
  listData: any;
  isLinear=false;

  

 
 

  public addItem(): void {
    const step3Group = this.Enregistrer.get('step3') as FormGroup;
    const listDataArray = this.Enregistrer.get('listData') as FormArray;
  
    listDataArray.push(step3Group); // Push the step3 form group
    step3Group.reset(); // Optionally reset the form group
  }
  
  

  public removeItem(index: number): void {
    const listDataArray = this.Enregistrer.get('listData') as FormArray;
  
    if (index >= 0 && index < listDataArray.length) {
      listDataArray.removeAt(index);
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
        doc: [''],DocumentType: [''],
        DateEmission: [''],LieuEmission: [''],AdresseEmail: [''],
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
        
        
      }),
      step3: this.formBuilder.group({
        banque: [''], // Make sure this corresponds to the name used in the template
        adressebanque: [''],
        code: [''],
        numCompte: [''],
      }),


      
      step4: this.formBuilder.group({
        certification: [false, Validators.requiredTrue],
        nomPrenomAgent: ['', Validators.required],
        datesubmit: { value: new Date(), disabled: true },
      }),

      listData: this.formBuilder.array([]) 
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

  

  HandleSubmit() {
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
  }
}