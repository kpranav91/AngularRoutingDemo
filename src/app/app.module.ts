import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HeaderLayoutComponent } from './core/containers/header-layout/header-layout.component';
import { FullLayoutComponent } from './core/containers/full-layout/full-layout.component';
import { Comp3FulllayoutComponent } from './module1/comp3-fulllayout/comp3-fulllayout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderLayoutComponent,
    FullLayoutComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
