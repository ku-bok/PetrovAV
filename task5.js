class Lesson {
    constructor(name, duration) {
        this.name=name;
        this.duration=duration;
    }
    sayName(){
        alert(`${this.name}`);
    }
    sayDur(){
        alert(`${this.duration}`);
    }
}
class Task extends Lesson {
    constructor(name,taskname){
    super(name);
    this.taskname=taskname;
    }
    complete() {
        alert(`Задание ${this.taskname} по предмету ${this.name} выполнено`);
    }
}
class Student extends Task{
    constructor(name,studentname,taskname){
        super(name,taskname);
        this.studentname=studentname;
    }
    presence(){
        alert(`Студент ${this.studentname} присутствовал на занятии по предмету ${this.name} и выполнил задание ${this.taskname}`);
    }
}
let lesson = new Lesson("Инструменты фронтенд разработки","90 минут");
let task=new Task("Инструменты фронтенд разработки","Работа с классами");
let student=new Student("Инструменты фронтенд разработки","Петров Артем","Работа с классами")
lesson.sayName();
lesson.sayDur();
task.complete();
student.presence();