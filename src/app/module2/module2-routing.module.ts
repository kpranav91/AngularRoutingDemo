import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1M2Component } from './comp1-m2/comp1-m2.component';
import { Comp2M2Component } from './comp2-m2/comp2-m2.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'comp1'},
  {path:'comp1', component:Comp1M2Component},
  {path:'comp2', component:Comp2M2Component},
  {path:'**', redirectTo:''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class Module2RoutingModule { }
