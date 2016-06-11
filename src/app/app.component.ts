import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
// import {Router, } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First Angular 2 App</h1>
    <small>by</small><h3>{{author}}</h3>
    <todo></todo>
  `,
  directives: [
    TodoComponent
  ]
})
export class AppComponent {

  author : string;

  constructor(){
    this.author = "David Mifsud";
  }

}
