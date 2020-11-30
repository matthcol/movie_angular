import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
 exports: [
    MaterialModule, FormsModule, //, ReactiveFormsModule
    HttpClientModule
  ]
})
export class SharedModule { }
