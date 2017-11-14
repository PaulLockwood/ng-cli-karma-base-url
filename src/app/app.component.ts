import { Component } from '@angular/core';
// import { TestClass } from 'src/app/test-class';
import { TestClass } from './test-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello ' + TestClass.hello;
}
