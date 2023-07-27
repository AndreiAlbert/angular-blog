import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesServiceService } from 'src/services/articles-service.service';
import { Article } from 'src/utils/Article';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css'],
})
export class ArticleViewComponent implements OnInit {
  article: Article | undefined;
  renderedContent: SafeHtml | undefined;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesServiceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.articleService.getArticle(id).subscribe((article) => {
        this.article = article;
        this.renderedContent = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
        console.log(this.renderedContent); 
      });
    });
  }
}
