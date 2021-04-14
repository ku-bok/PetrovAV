import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { LessonApiService } from '../services/api/lesson.service.api';
import { Lesson } from '../models/lesson.model';
import { LessonsService } from '../services/lesson.service';

@Component({
    selector:'app-lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.html'],
    providers: [LessonsService, LessonApiService]
})

export class LessonsComponent implements OnInit {
    @Output()
    lessonSelected = new EventEmitter<number>();

    constructor(private LessonService: LessonsService, private LessonApi: LessonApiService){ }

    public lessons: Lesson[]=[];

    ngOnInit(): void{
        this.LessonApi.getLessons(1).subscribe(data=>{
            this.lessons=data;
        })
        console.log(this.lessons);
    }

    click(){

    }
    
}