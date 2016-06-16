import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { bootstrap } from "@angular/platform-browser-dynamic";
import {
  async,
  beforeEachProviders,
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';

import { AppComponent } from './app.component';

export function main() {

  describe('App component', () => {

    ///todo fix tests
    it('should build without a problem',
       async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
         tcb.createAsync(AppComponent)
             .then((fixture) => {
               expect(fixture.nativeElement.innerText.indexOf('My First Angular 2 App')).toBeTruthy();
             });
       })));
  });
}
