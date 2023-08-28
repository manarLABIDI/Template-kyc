import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router  } from '@angular/router';
import { NgSignaturePadOptions,SignaturePadComponent } from '@almothafar/angular-signature-pad/public-api';
import {PointGroup} from 'signature_pad'



@Component({
  selector: 'app-form-pp',
  templateUrl: './form-pp.component.html',
  styleUrls: ['./form-pp.component.css']
})
export class FormPpComponent implements OnInit {

  showFirstStep: boolean = false;

  constructor(private formBuilder: FormBuilder , private router: Router) {
    this.listData = [];
  }
  
  Enregistrer!: FormGroup;
  listData: any;
  isLinear=true;

  

 
 

  
  public addItem(): void {
    // Get the step3 form group
    const step3Group = this.Enregistrer.get('step3') as FormGroup;
  
    // Add the step3 form group's value to the listData array
    this.listData.push(step3Group.value);
  
    // Optionally, you can clear the form fields if needed
    step3Group.reset();
  }
  

  public removeItem(element: any): void {
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

  
  isDrawn=false;
  private history:PointGroup[]=[];
  private future:PointGroup[]=[];
  @ViewChild('signature')
  public signaturePad!:SignaturePadComponent;
  public signaturePadOption:NgSignaturePadOptions={
    minWidth:1,
    canvasWidth:300,
    canvasHeight:150,
    penColor:'black',
    backgroundColor:'white',
    dotSize:1,
    maxWidth:1,
    velocityFilterWeight:1
  };

  drawComplete(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onEnd event
    console.log('Completed drawing', event);
    console.log(this.signaturePad.toDataURL());
    this.isDrawn=true;
  };

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('Start drawing', event);

  };

  clear(){
    this.history=[];
    this.future=[];
    this.signaturePad.clear();
  }
  redo(){
    if(this.history.length>=0 && this.future.length>0){
      var data = this.signaturePad.toData();
      if(data||data==undefined){
        const adddata:any=this.future.pop();
        data.push(adddata);
      
      }
      this.signaturePad.fromData(data);
    }
  }
  undo(){
    var data = this.signaturePad.toData();
    if(data||data==undefined){
      const lastStrock:any = this.history.pop();
      const removedStrock:any =data.pop();
      this.future.push(removedStrock);
      this.signaturePad.fromData(data);   
  }}
  savePNG(){
    if (this.signaturePad.isEmpty()){
      return alert("please provide a signature first!")
    }
    const data = this.signaturePad.toDataURL('image/png');
    const link = document.createElement('a');
    link.href=data;
    link.download='signature.png';
    link.click();

  }
  saveJPEG(){
    if (this.signaturePad.isEmpty()){
      return alert("please provide a signature first!")
    }
    const data = this.signaturePad.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href=data;
    link.download='signature.jpeg';
    link.click();
    
  }
  saveSVG(){
    if (this.signaturePad.isEmpty()){
      return alert("please provide a signature first!")
    }
    const data = this.signaturePad.toDataURL('image/svg');
    const link = document.createElement('a');
    link.href=data;
    link.download='signature.svg';
    link.click();
    
  }

  preDefinedSignatureData:PointGroup[]=[]
  ngAfterViewInit(){
    this.signaturePad.set('minwidth',5);
    this.signaturePad.fromData(this.preDefinedSignatureData);
    const canvas = this.signaturePad.getCanvas();
    if (canvas){
      const ctx=canvas.getContext('2d');
      if (ctx){
        const text ="Signature ______________________________";
        const x=20;
        const y=canvas.height-40;
        ctx.font="16px Arial";
        ctx.fillStyle="black";
        ctx.fillText(text,x,y);


      }
        
    }}
}  