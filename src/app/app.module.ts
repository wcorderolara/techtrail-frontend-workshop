import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './router';
import { AppComponent } from './app.component';
import { AboutComponent } from './core';
import { RouterModule } from '@angular/router';
import { declarations } from './core';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    declarations
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
