import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';

import { ModelCreateComponent } from './components/model-create/model-create.component'
import { ModelListComponent } from './components/model-list/model-list.component'

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-model' },
  { path: 'create-model', component: ModelCreateComponent },
  { path: 'model-list', component: ModelListComponent }
];

@NgModule({
  providers: [ApiService],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppModule { }
