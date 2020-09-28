import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';
import { RouterModule } from '@angular/router';

import { ModelCreateComponent } from './components/model-create/model-create.component'
import { ModelListComponent } from './components/model-list/model-list.component';
import { HomeComponent } from './components/home/home.component';
import { ModelViewComponent } from './components/model-view/model-view.component';

@NgModule({
  declarations: [ 
    ModelCreateComponent, 
    ModelListComponent,
    HomeComponent,
    AppComponent,
    ModelViewComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
