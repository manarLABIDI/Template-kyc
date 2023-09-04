import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormPpComponent } from './form-pp/form-pp.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DatePipe } from '@angular/common';
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import { HttpClientModule } from '@angular/common/http';






// Import Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';


import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormPMComponent } from './form-pm/form-pm.component';



@NgModule({
  declarations: [
    AppComponent,
    FormPpComponent,
    HomeComponent,
    NavbarComponent,
    FormPMComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatStepperModule,
    MatRadioModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    AngularSignaturePadModule,
    HttpClientModule
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
