import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListcontactsComponent } from './components/list-contacts/list-contacts.component';
import { ListAlphabetComponent } from './components/list-alphabet/list-alphabet.component';
import { SearchComponent } from './components/search/search.component';
import { SelectedUserComponent } from './components/selected-user/selected-user.component';
import { CardConnectionsComponent } from './components/card-connections/card-connections.component';



@NgModule({
  declarations: [
    AppComponent,    
    ListcontactsComponent,
    ListAlphabetComponent,
    SearchComponent,
    SelectedUserComponent,
    CardConnectionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
