import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstDomainComponent } from './components/first-domain/first-domain.component';
import { SecondDomainComponent } from './components/second-domain/second-domain.component';

const routes: Routes = [
  { path: 'first', component: FirstDomainComponent },
  { path: 'second', component: SecondDomainComponent },
  { path: '', redirectTo: 'first' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // add to existing routes
  exports: [RouterModule]
})
export class DomainRoutingModule { }
