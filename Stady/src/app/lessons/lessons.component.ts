import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { LessonApiService } from '../services/api/lesson.service.api';
import { Lesson } from '../models/lesson.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.scss'],
    providers: [LessonApiService]
})

export class LessonsComponent implements OnInit {
    @Output()
    lessonSelected = new EventEmitter<number>();

    constructor(private LessonApi: LessonApiService){
        this.LessonApi.getLessons(1).subscribe(data=>{
            this.lessons=data;
        }); 
    }

    public lessons: Lesson[]=[];

    ngOnInit(): void{
        this.LessonApi.getLessons(1).subscribe(data=>{
            this.lessons=data;
        })
        console.log(this.lessons);
    }

    click(){
        this.LessonApi.recalcLessonCount();
    }
    
}