import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  {path: '', redirectTo:'/articles', pathMatch:'full'}, 
  {path: 'articles', component: ArticlesListComponent}, 
  {path: 'articles/:id', component: ArticleViewComponent},
  {path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
