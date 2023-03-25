import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component01Component } from './component01/component01.component';
import { Component02Component } from './component02/component02.component';


const routes: Routes = [
  { path: '', redirectTo: '/component1', pathMatch: 'full' },
  { path: 'component01', component: Component01Component },
  { path: 'component02', component: Component02Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
