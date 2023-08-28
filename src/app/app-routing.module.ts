import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPpComponent } from './form-pp/form-pp.component';
import { HomeComponent } from './home/home.component';
import { FormPMComponent } from  './form-pm/form-pm.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'formPP',component:FormPpComponent},
  {path:'formPM',component:FormPMComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
