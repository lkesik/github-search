import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RepoDetailsPageComponent } from './components/repo-details-page/repo-details-page.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoItemComponent } from './components/repo-list/repo-item/repo-item.component';
import { NiceNumberPipe } from './pipes/nice-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepoListComponent,
    RepoItemComponent,
    RepoDetailsPageComponent,
    NiceNumberPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
