import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: `
        <h1>Angular 2 Playground</h1>
        <p>{{author}}</p>
    `
})
export class AppComponent {

  author: string;

  constructor() {
    this.author = "David Mifsud";
  }

}
