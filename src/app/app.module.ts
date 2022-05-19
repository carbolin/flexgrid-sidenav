
import { filter } from 'rxjs';

import { ViewportScroller } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, Scroll } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(_viewportScroller: ViewportScroller, router: Router) {

    router.events.pipe(filter(e => e instanceof Scroll))
      .subscribe((e) => {
        if ((e as Scroll).anchor) {
          setTimeout(() => {
            _viewportScroller.scrollToAnchor((e as Scroll).anchor!);
          }, 5);
        }
      });
  }
}
