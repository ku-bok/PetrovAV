import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LessonsComponent} from './lessons/lessons.component';
import {DetailsComponent} from './details_lesson/details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DetailsComponent,
    LessonsComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
