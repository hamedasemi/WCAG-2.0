import { Component, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ContentService } from './shared/content.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  article: Response;
  term: string;
  language: string = 'en';

  constructor(public translate: TranslateService, public contentService: ContentService) {
    this.translate.addLangs(['en', 'sv']);
    this.translate.setDefaultLang(this.language);
  }

  ngOnInit() {
    this.getContent();
  }

  onChangeLanguage(event: any) {
    this.language = event.target.value;
    this.translate.use(this.language);
    this.getContent();
  }

  getContent() {
    this.contentService.getConetnt(this.language).subscribe((content: Response) => {
      console.log(content)
      this.article = content;
    });
  }

  search(event: any) {
    this.term = event.target.value;
  }
}
