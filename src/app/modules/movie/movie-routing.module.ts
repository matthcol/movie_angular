import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDashboardComponent} from './components/movie-dashboard/movie-dashboard.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', component: MovieDashboardComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  //{ path: '', redirectTo: 'overall' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
