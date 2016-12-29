import {TodoModel, TodoViewModel} from './todo.model';

export class TodoService {

  private _list = new Array<TodoModel>();

  constructor() {
    this._list.push(new TodoModel(1, 'Learn Angular 2', false));
    this._list.push(new TodoModel(2, 'Setup a cool application', false));
    this._list.push(new TodoModel(3, 'Test the cool application', false));
  }

  addItem(itemName: string) : Promise<TodoModel> {
    let todoModel : TodoModel = new TodoModel(new Date().getTime(), itemName, false)
    this._list.push(todoModel);

    return Promise.resolve(todoModel); //Let our client know the add was succesful.
  }

  getItems() : Promise<Array<TodoModel>> {
    return Promise.resolve(this._list);
  }
}
