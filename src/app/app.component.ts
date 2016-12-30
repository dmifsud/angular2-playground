import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: require('./app.template.html')
})
export class AppComponent {

  author: string;

  constructor() {
    this.author = 'David Mifsud';
  }

}
