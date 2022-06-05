import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListContatcsComponent } from './components/list-contatcs/list-contatcs.component';
import { ListAlphabetComponent } from './components/list-alphabet/list-alphabet.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,    
    ListContatcsComponent,
    ListAlphabetComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
