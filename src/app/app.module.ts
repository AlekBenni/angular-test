import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnyComponent } from './any/any.component';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AnyComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
