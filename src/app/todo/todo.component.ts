import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'todo',
    template: `
    <form name='todoForm' class='todo' (submit)='onAddItem(newItem)'>
        <md-input-container>
            <input md-input placeholder="Add Item" #newItem>
        </md-input-container>
        <button *ngIf='showButton' color='accent' md-raised-button class='md-primary' type='submit'> Add </button>
        <md-list>
            <md-list-item *ngFor='let item of items'> {{item}} </md-list-item>
        </md-list>
    </form>
    `,
    styles: [ String(require('./todo.scss')) ]
})
export class TodoComponent implements OnInit {

    public items: Array<string>;

    @Input() showButton : Boolean;

    ngOnInit() {
        this.items = ['One', 'two', 'three'];
    }

    onAddItem(item) {
        this.items.unshift(item.value);
        item.value = '';
    }
}
