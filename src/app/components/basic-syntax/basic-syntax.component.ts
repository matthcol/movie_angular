import { Component, OnInit } from '@angular/core';

// interface vs class (no constructor, methods, only for type)
interface Person {
  name: string;
  city: string;
}

@Component({
  selector: 'app-basic-syntax',
  templateUrl: './basic-syntax.component.html',
  styleUrls: ['./basic-syntax.component.scss']
})
export class BasicSyntaxComponent implements OnInit {

  constructor(){}  // add DI here

  /**
   * @override OnInit.ngOnInit
   */
  ngOnInit(): void {  // from interface OnInit or others interfaces linked to 
    // cycle of life of object
    this.displayMsg()
  }
  
  title = 'movie-app';
  readonly myAttr = 'value';   // type inference
  myBoolean: boolean;         // type declaration
  myAny: any;                 // any type variable
  myData: Person[] = [
    { name: 'Boris', city: 'Toulouse' },
    { name: 'Matthias', city: 'Pau' },
  ];

  

  

  displayMsg():void {
    console.log(`App component init ${this.title}`)
  }

  toggleMyBoolean(): void {
    this.myBoolean = ! this.myBoolean
  }
  
  private testAny():void {
    this.myAny = 1;
    this.myAny = '1';
    this.myAny = true;
  }

}
