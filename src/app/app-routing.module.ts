import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderLayoutComponent } from './core/containers/header-layout/header-layout.component';
import { Comp3FulllayoutComponent } from './module1/comp3-fulllayout/comp3-fulllayout.component';
import { FullLayoutComponent } from './core/containers/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '', component: HeaderLayoutComponent,
    children: [
      { path: 'module1', loadChildren: './module1/module1.module#Module1Module' },
      { path: 'module2', loadChildren: './module2/module2.module#Module2Module' }
    ],
  },
  {
    path: 'popup', component: FullLayoutComponent,
    children: [
      { path: 'module1', loadChildren: './module1/module1.module#Module1Module' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
