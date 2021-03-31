class Lesson {
    name: string;
    duration: number;
    constructor(theName:string, theDuration: number) {
        this.name=theName;
        this.duration=theDuration;
    }
    sayName(){
        console.log(`${this.name}`);
    }
    sayDur(){
        console.log(`${this.duration}`);
    }
}
class Task extends Lesson {
    taskname:string;
    constructor(name:string,duration:number,theTaskname:string){
    super(name,duration);
    this.taskname=theTaskname;
    }
    complete() {
        console.log(`Задание ${this.taskname} по предмету ${this.name} выполнено за ${this.duration} минут`);
    }
}
class Lecture extends Lesson{
    topic:string;
    constructor(name:string,duration:number,theTopic:string){
        super(name,duration);
        this.topic=theTopic;
    }
    presence(){
        console.log(`Студент прослушал лекцию по теме ${this.topic} на занятии по предмету ${this.name} и выполнил задание за ${this.duration} минут`);
    }
}
let lesson = new Lesson("Инструменты фронтенд разработки", 90);
let task=new Task("Инструменты фронтенд разработки", 75 ,"Работа с классами");
let lecture=new Lecture("Инструменты фронтенд разработки",60,"TypeScript")
lesson.sayName();
lesson.sayDur();
task.complete();
lecture.presence();