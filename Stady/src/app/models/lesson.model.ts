export class Lesson{
    public id:number;
    public name:string;
    public duration:number;
    public count:number;
    public teacher:string;

    constructor(id:number,name:string,duration:number,count:number,teacher:string){
        this.id=id;
        this.name=name;
        this.duration=duration;
        this.count=count;
        this.teacher=teacher;
    }

}