import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('article') article;

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'sv']);
    this.translate.setDefaultLang('en');
  }

  changeLang(event) {
    console.log(event.target.value);
    this.translate.use(event.target.value);
  }

  search(event) {
    let search = [].slice.call(this.article.nativeElement.querySelectorAll('section')).filter((element) => {
      if (!event.target.value.length || element.innerHTML.search(event.target.value) > 0) {
        element.removeAttribute('hidden');
      } else {
        element.setAttribute('hidden', true);
      }
    });
  }
}
