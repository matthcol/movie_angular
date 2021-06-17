import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent} from './components/error/page-not-found/page-not-found.component';
import { BasicSyntaxComponent} from './components/basic-syntax/basic-syntax.component';
import { OtherComponent } from './modules/other/other.component';
import { DomainGuard } from './guards/domain.guard';

// Routes alias de Route[]
const routes: Routes = [
  // routes : path/component  [+ guards can*] + treatments [data/resolve]
  //{ path: 'movies', component: MoviesComponent }, // guard possible with canActivate
  //{ path: 'movies', children: [
  //    {path: 'detail', component: MovieComponent },
  //    {path: 'selection', component: MovieSelectionComponent }]},
  //{ path: 'stars', component: StarsComponent },
  { path: 'movies', loadChildren: () => import('./modules/movie/movie.module').then(m =>m.MovieModule)},
  // domain/first, domain/second
  { path: 'domain', canLoad: [ DomainGuard ], loadChildren: () => import('./modules/domain/domain.module').then(m =>m.DomainModule)},
  //{ path: 'other', component: OtherComponent },  // eager loading of module Other
  //{ path: 'learn', component: BasicSyntaxComponent },
  { path: '', redirectTo: '/first', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // load routes defined above
  exports: [RouterModule]  // export this config (imported in app)
})
export class AppRoutingModule { }
