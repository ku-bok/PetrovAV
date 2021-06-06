import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LessonsComponent} from './lessons/lessons.component';
import {DetailsComponent} from './details_lesson/details.component'

const routes: Routes = [
  {path: '', component: LessonsComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
