import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoViewModel } from './todo.viewmodel';

@Component({
  selector: 'todo',
  template: `
    <div>
      <div *ngFor='let item of myList'>
        <span [hidden]='item.isHidden===true'><input type='text' [(ngModel)]='item.name'/></span>
        <span [hidden]='item.isHidden===false'>{{item.name}}</span>
        <button (click)='toggleItem(item)'>{{ item.isHidden ? 'Edit' : 'Update' }}</button>
      </div>
    </div>
  `,
  providers: [
    TodoService
  ]
})
export class TodoComponent{

  myList = Array(TodoViewModel);

  constructor(public todoService : TodoService) {
    //TODO: cast this to TodoViewModel list
    this.myList = todoService.List;
  }

  toggleItem(item : TodoViewModel) : void {
    console.log(item);
    item.isHidden = !item.isHidden;
  }
}
