import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [AppComponent, ArticlesListComponent, ArticleViewComponent, NavBarComponent, AddComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
