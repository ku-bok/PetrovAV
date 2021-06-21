import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lesson } from 'src/app/models/lesson.model';

@Injectable()
export class LessonApiService{

    private LessonCount = new Subject<number>();
    public LessonCountObs = this.LessonCount.asObservable();

    constructor(private http: HttpClient){}

    getLessons(id:number):Observable<Lesson[]>{
        return this.http.get<Lesson[]>('assets/lessons.json')
    }

    recalcLessonCount(){
        this.LessonCount.next(10);
        this.LessonCount.error('Выход');
        this.LessonCount.complete();
    }
}