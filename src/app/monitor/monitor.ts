export class Monitor {
    
    userId : number;
    id : number;
    title : String;
    body : String;

    constructor(userId: number,id: number, title: String, body: String) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
       
    }


}