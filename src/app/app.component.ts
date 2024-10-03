import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>App Root Component</h1><router-outlet />',
})
export class AppComponent {
  constructor() {
    console.log(1);
  }
}
