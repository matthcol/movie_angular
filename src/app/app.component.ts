import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';



// config component
@Component({
  selector: 'app-root', // markup with prefix app- (cf config)
  templateUrl: './app.component.html', // or html inline code with template
  styleUrls: ['./app.component.scss']  // or style inline code with styles
          // other properties : providers (DI)
})
export class AppComponent  implements OnInit //
{
  title = 'movie-app';

  // DI
  constructor() { }

  // initialize
  ngOnInit(): void {
  }
}
