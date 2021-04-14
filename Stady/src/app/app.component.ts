import { Component } from '@angular/core';
import {Lesson} from './models/lesson.model'
import {LessonsService} from './services/lesson.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lesson';
  lessons: Lesson[];

  constructor(private lessonsService: LessonsService){
    this.lessons=[
      {id:1, name:'Инструменты фронтенд разработки',duration:90},
      {id:2, name:'Self и Soft компетенции',duration:70},
      {id:3, name:'Проектирование информационных систем',duration:30},
      {id:4, name:'Digital-дизайн',duration:50}
    ]
  }
  getLesson(){

  }
  lessonSelected(id:number){
    console.log(id)
  }
}
