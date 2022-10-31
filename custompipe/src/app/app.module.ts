import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { filter } from 'rxjs';

import { AppComponent } from './app.component';
import { FilterComponentComponent } from './filter-component/filter-component.component';
import { FilterSurname } from './filter-component/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponentComponent,
    FilterSurname
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
