import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private params: Params;
  private paramsSubscription: any;
  private activeArticle: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.params = params;
      this.activeArticle = `CONTEXT_${params['section']}_${params['subsection']}`.toUpperCase().replace('-','_');
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
