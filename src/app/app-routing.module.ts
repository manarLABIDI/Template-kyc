import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPpComponent } from './form-pp/form-pp.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'formPP',component:FormPpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
