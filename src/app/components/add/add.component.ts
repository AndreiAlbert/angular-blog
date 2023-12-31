import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesServiceService } from 'src/services/articles-service.service';
import { Article } from 'src/utils/Article';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  newArticle: Article = {
    id: 0,
    author: '',
    title: '',
    content: '',
  };

  constructor(private articleService: ArticlesServiceService, private router: Router) {}

   onSubmit() {
    this.articleService.addArticle(this.newArticle).subscribe(
      (addedArticle) => {
        console.log('Article added successfully:', addedArticle);
        this.resetForm();
        this.router.navigate(['articles']);
      },
      (error) => {
        console.error('Failed to add article:', error);
      }
    );
  }

  resetForm() {
    this.newArticle = {
      id: 0, 
      author: '', 
      title: '', 
      content: ''
    }
  }
}
