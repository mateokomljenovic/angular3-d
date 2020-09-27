import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelCreateComponent } from './components/model-create/model-create.component'
import { ModelListComponent } from './components/model-list/model-list.component'
import { HomeComponent } from './components/home/home.component'


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create-model', component: ModelCreateComponent },
  { path: 'model-list', component: ModelListComponent }
];

// Important to add home app component that will serve as a landing page

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
