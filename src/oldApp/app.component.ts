import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import {BadIdeasComponent} from './badIdeasComponent/badIdeas.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2 Playground</h1>
  <nav>
    <a>Todo List</a>
    <a>Bad Ideas</a>
  </nav>
  `
})
export class AppComponent {

  author : string;

  constructor(){
    this.author = "David Mifsud";
  }

}
