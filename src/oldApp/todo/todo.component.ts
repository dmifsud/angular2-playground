import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import {NgClass} from '@angular/common';
import { TodoModel, TodoViewModel, TodoViewModelFactory } from './todo.model';

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

      <div>
        <!-- <button (click)="showAdd()">Add</button> -->
        <form (submit)="addCurrentItem()">
          <input type='text' [(ngModel)]='addingItem.name'/>
        </form>
      </div>
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

  private myList: Array<TodoViewModel>;
  private addingItem : TodoViewModel = null;

  constructor(public todoService : TodoService) {
    todoService.getItems()
      .then((list) => {
        this.myList = TodoViewModelFactory.MakeList(list);
    });

    this.addingItem = new TodoViewModel();
  }

  done(item: TodoViewModel) : void {
    item.isDone = !item.isDone;
  }

 addCurrentItem(){
   this.addItem(this.addingItem);
   this.addingItem = new TodoViewModel(); //Reset
 }

  addItem(item : TodoViewModel) {
    this.todoService.addItem(item.name).then(successResp => { //TODO: Ideally, we pass the whole model to the service.
      this.myList.push(item);
    })

  }

  toggleItem(item : TodoViewModel) : void {
    item.isEditing = !item.isEditing;
  }
}
