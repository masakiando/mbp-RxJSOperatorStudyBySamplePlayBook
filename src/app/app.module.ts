import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BufferComponent } from './buffer/buffer.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';

@NgModule({
  declarations: [
    AppComponent,
    BufferComponent,
    ConcatMapComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
