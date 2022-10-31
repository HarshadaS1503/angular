import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SquareComponentComponent } from './square-component/square-component.component';
import { SquareResultComponent } from './square-component/square-result/square-result.component';


@NgModule({
  declarations: [
    AppComponent,
    SquareComponentComponent,
    SquareResultComponent  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
