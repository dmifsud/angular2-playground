import {TodoModel, TodoViewModel} from './todo.model';

export class TodoService {

  private _list = new Array<TodoModel>();

  constructor() {

    this._list.push(new TodoModel(1, 'Learn Angular 2', false));
    this._list.push(new TodoModel(2, 'Setup a cool application', false));
    this._list.push(new TodoModel(3, 'Test the cool application', false));


  }

    addNewItem(itemName: string) {
      this._list.push(new TodoModel(new Date().getTime(), itemName, false));
    }


    getViewModelList() : Promise<Array<TodoViewModel>> {
      return new Promise((resolve, reject) => {
        resolve(this._list);
      });
    }

}
