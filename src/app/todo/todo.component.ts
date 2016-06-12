import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import {NgClass} from '@angular/common';
import { TodoViewModel } from './todo.model';

@Component({
  selector: 'todo',
  template: `
    <div>
      <form *ngFor='let item of myList' class='todo-item' [ngClass]='{done: item.isDone }'>
        <div class='row'>
          <span [hidden]='!item.isEditing'><input type='text' [(ngModel)]='item.name'/></span>
          <span class='field' [hidden]='!!item.isEditing'>{{item.name}}</span>
        </div>
        <button (click)='toggleItem(item)' type='submit'>{{ item.isEditing ? 'Update' : 'Edit' }}</button>
        <button (click)='done(item)'>{{ item.isDone ? 'Cancel' : 'Done' }}</button>
      </form>
    </div>
  `,
  styles: [
    `
      .todo-item{
        padding:10px;
      }

      .row{
        display:inline-block;
        width: 200px;
      }

      .todo-item.done .field{
        text-decoration: line-through;
      }


    `
  ],
  directives: [NgClass],
  providers: [
    TodoService
  ]
})
export class TodoComponent{

  myList: TodoViewModel[];

  constructor(public todoService : TodoService) {
    todoService.getViewModelList()
      .then((list) => {
        this.myList = list;
      });
  }

  done(item: TodoViewModel) : void {
    console.log(item);
    item.isDone = !item.isDone;
  }

  toggleItem(item : TodoViewModel) : void {
    item.isEditing = !item.isEditing;
  }
}
