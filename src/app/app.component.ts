import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navList: string[] = ["start", "nav2"];
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'sv']);
    this.translate.setDefaultLang('en');
  }
  changeLang(lang: string) {
    console.log(this.translate);
    this.translate.use(lang);
  }
}
