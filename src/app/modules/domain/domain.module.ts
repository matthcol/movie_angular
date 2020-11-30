import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { FirstDomainComponent } from './components/first-domain/first-domain.component';
import { SecondDomainComponent } from './components/second-domain/second-domain.component';


@NgModule({
  declarations: [FirstDomainComponent, SecondDomainComponent],
  imports: [
    CommonModule,
    DomainRoutingModule
  ]
})
export class DomainModule { }
