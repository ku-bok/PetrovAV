import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LessonsComponent} from './lessons/lessons.component';
import {DetailsComponent} from './details_lesson/details.component';
import {HttpClientModule } from '@angular/common/http';
import {FormComponent} from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsComponent,
    LessonsComponent,
    FormComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
