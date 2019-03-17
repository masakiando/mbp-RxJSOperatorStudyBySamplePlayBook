import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BufferComponent } from './buffer/buffer.component';
import { ForJoinComponent } from './for-join/for-join.component';

@NgModule({
  declarations: [
    AppComponent,
    BufferComponent,
    ForJoinComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
