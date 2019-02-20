import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1RoutingModule } from './module1-routing.module';
import { Comp1M1Component } from './comp1-m1/comp1-m1.component';
import { Comp2M1Component } from './comp2-m1/comp2-m1.component';
import { Comp3FulllayoutComponent } from './comp3-fulllayout/comp3-fulllayout.component';

@NgModule({
  declarations: [Comp1M1Component, Comp2M1Component, Comp3FulllayoutComponent],
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  exports:[
    Comp3FulllayoutComponent
  ]
})
export class Module1Module { }
