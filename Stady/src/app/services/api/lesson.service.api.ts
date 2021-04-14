import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lesson } from 'src/app/models/lesson.model';

@Injectable()
export class LessonApiService{
    constructor(private http: HttpClient){}

    getLessons(id:number):Observable<Lesson[]>{
        return this.http.get<Lesson[]>('assets/lessons.json')
    }
}