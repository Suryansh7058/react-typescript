class Todo {
    id:string;
    text:string;

    getRandomInt(min:number, max:number){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    constructor(todoText: string){
        this.text=todoText;
        const key: number = this.getRandomInt(1,10000);
        this.id = key.toString();
    }
}

export default Todo