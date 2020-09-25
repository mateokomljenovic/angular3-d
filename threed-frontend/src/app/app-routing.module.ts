import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelCreateComponent } from './components/model-create/model-create.component'
import { ModelListComponent } from './components/model-list/model-list.component'

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-model' },
  { path: 'create-model', component: ModelCreateComponent },
  { path: 'model-list', component: ModelListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
