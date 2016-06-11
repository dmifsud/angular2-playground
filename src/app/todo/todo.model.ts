export class TodoModel {
  id: Number;
  name: string;
  isDone: boolean;

  constructor(id : Number, name: string, isDone: boolean) {
    this.id = id;
    this.name = name;
    this.isDone = isDone;
  }
}
