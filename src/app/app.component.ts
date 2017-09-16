import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [require(`src/app/app.component.scss`).toString()]
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
