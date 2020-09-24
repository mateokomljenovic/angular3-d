import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {ModelCreateComponent} from './components/model-create/model-create.component'
import {ModelListComponent} from './components/model-list/model-list.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'create-model'},
  {path: 'create-model', component: ModelCreateComponent},
  {path: 'model-list', component: ModelListComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule { }
