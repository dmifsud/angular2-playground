import {TodoModel} from './todo.model';

export class TodoService {

  private _list = new Array<TodoModel>();

  constructor() {

    this._list.push(new TodoModel(1, 'CI fixes', false));
    this._list.push(new TodoModel(2, 'AI fixes', false));


  }


    get List() : Array<TodoModel>
    {
        return this._list;
    }
  
}
