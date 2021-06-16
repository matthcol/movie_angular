import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherModule } from './modules/other/other.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { BasicSyntaxComponent } from './components/basic-syntax/basic-syntax.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { StarModule } from './modules/star/star.module';
// import { MovieModule } from './modules/movie/movie.module';
// => lazy loading

// load features from angular modules
@NgModule({
  declarations: [ // components declaration
    AppComponent,
    HeaderComponent,
    BasicSyntaxComponent,
    PageNotFoundComponent,
  ],
  imports: [    // load other modules : split app in diferrent modules
    BrowserModule,
    AppRoutingModule,
    OtherModule,
    BrowserAnimationsModule, 
    SharedModule, 
    StarModule
  ],
  exports: [
    // modules exported
  ],
  providers: [],  // classes @Injectable : DI, module context
  bootstrap: [AppComponent] // components available at startup
})
export class AppModule { }
