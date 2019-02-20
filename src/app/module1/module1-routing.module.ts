import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1M1Component } from './comp1-m1/comp1-m1.component';
import { RouterModule, Routes } from '@angular/router';
import { Comp2M1Component } from './comp2-m1/comp2-m1.component';
import { Comp3FulllayoutComponent } from './comp3-fulllayout/comp3-fulllayout.component';


const routes: Routes = [
    {path:'',redirectTo:'comp1'},
    {path:'comp1', component:Comp1M1Component},
    {path:'comp2', component:Comp2M1Component},         
    {path:'comp3', component:Comp3FulllayoutComponent},         
    {path:'**', redirectTo:''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class Module1RoutingModule { }
