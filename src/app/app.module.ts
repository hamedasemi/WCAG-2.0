import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { ContentService } from './shared/content.service';
import { SearchPipe } from './shared/search.pipe';
import { HightlightPipe } from './shared/hightlight.pipe';
import { CategoryFilterPipe } from './shared/category-filter.pipe';

export function delayFactory() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
}

export function translate(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    HightlightPipe,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translate,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  providers: [
    ContentService, {
      provide: APP_INITIALIZER,
      useValue: delayFactory,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


