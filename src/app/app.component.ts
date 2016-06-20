import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import {provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import {BadIdeasComponent} from './badIdeasComponent/badIdeas.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2 Playground</h1>
  <nav>
    <a [routerLink]="['/todoList']">Todo List</a>
    <a [routerLink]="['/badIdeas']">Bad Ideas</a>
  </nav>
    <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class AppComponent {

  author : string;

  constructor(){
    this.author = "David Mifsud";
  }

}

export const routes: RouterConfig = [
  { path: 'todoList', component: TodoComponent },
  // { path: 'todo/:id', component: TodoComponent/*View*/ },
  { path: 'badIdeas', component: BadIdeasComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
