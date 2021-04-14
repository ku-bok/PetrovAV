import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
    selector:'app-lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.html']
})

export class LessonsComponent implements OnInit {
    @Input()
    public lessons: any;
    public lessonId: string = '';

    @Output()
    lessonSelected = new EventEmitter<number>();

    constructor(){ }

    ngOnInit(): void{
        console.log(this.lessons);
    }

    click(id: number){

    }


}