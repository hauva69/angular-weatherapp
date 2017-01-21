import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>Weather for {{ location }}!</h1>`
})
export class AppComponent {
    name: string;

    constructor() {
        this.location = 'helsinki';
    }
}