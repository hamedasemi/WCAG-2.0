import { Component, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ContentService } from './shared/content.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  article: Response;
  term: string;
  category: string;
  language: string = 'en';

  @ViewChild('articleRef') articleRef: any;

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

  onChangeCetgory(event: any) {
    this.category = event.target.value;
  }

  getContent() {
    this.contentService.getConetnt(this.language).subscribe((content: Response) => {
      this.article = content;
    });
  }

  search(event: any) {
    this.term = event.target.value;
  }

  hightlightHeader(event: any) {
    let fragment = event.target.href.split('#')[1];
    [].slice.call(this.article).map((sections: any) => {
      if (sections.fragment === fragment) {
        sections.active = true;
      }else {
        sections.active = false;
      }
      [].slice.call(sections.sections).map((section: any) => {
        if (section.fragment === fragment) {
          section.active = true;
        }else {
          section.active = false;
        }
      });
    });
    console.log()
  }
}
