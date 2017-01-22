import {Component} from '@angular/core';

@Component({
    selector: 'weather-application',
    template: `<h1>Weather for {{ location }}!</h1>`
})
export class AppComponent {
    location: string;

    constructor() {
        this.location = 'helsinki';
    }
}