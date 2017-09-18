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
  article;
  term;

  constructor(public translate: TranslateService, public contentService: ContentService) {
    this.translate.addLangs(['en', 'sv']);
    this.translate.setDefaultLang('en');
  }

  ngOnInit(){
    this.getContent('en')
  }

  changeLang(event: Event) {
    this.translate.use(event.target.value);
    this.getContent(event.target.value)
  }

  getContent(lang: string) {
    this.contentService.getConetnt(lang).subscribe((content) => {
      console.log(content)
      this.article = content;
    });
  }

  search(event: Event) {
    this.term = event.target.value;
    // let search = [].slice.call(this.article.nativeElement.querySelectorAll('section')).filter((element) => {
    //   if (!event.target.value.length || element.innerHTML.search(event.target.value) > 0) {
    //     element.removeAttribute('hidden');
    //   } else {
    //     element.setAttribute('hidden', true);
    //   }
    // });
  }
}
