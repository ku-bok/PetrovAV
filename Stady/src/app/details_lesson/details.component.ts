import {Component, OnInit} from '@angular/core';
import { LessonApiService } from '../services/api/lesson.service.api';
import { Lesson } from '../models/lesson.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    providers: [LessonApiService]
})

export class DetailsComponent implements OnInit {
    constructor(private LessonApi: LessonApiService, private route: ActivatedRoute){
       let id=this.route.snapshot.params['id']
    }

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