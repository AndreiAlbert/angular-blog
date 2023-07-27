import { Component, OnInit } from '@angular/core';
import { ArticlesServiceService } from 'src/services/articles-service.service';
import { Article } from 'src/utils/Article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})

export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticlesServiceService) {}

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((articles) => {
      this.articles = articles;
    })
  }
}
