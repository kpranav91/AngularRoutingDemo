import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2RoutingModule } from './module2-routing.module';
import { Comp1M2Component } from './comp1-m2/comp1-m2.component';
import { Comp2M2Component } from './comp2-m2/comp2-m2.component';

@NgModule({
  declarations: [Comp1M2Component, Comp2M2Component],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
