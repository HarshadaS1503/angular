import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register.component';
import { SampleComponent } from './sample/sample.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SampleComponent,
   RegisterComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
