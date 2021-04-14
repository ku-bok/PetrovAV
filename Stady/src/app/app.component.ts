import { Component } from '@angular/core';
import {Lesson} from './models/lesson.model'
import {LessonsService} from './services/lesson.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LessonsService]
})
export class AppComponent {
  title = 'Lesson';

  constructor(private lessonsService: LessonsService){
  }
  getLesson(){

  }
  lessonSelected(id:number){
    console.log(id)
  }
}
