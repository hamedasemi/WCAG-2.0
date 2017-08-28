import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { StartComponent } from './components/start/start.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ArticleComponent } from './components/article/article.component';

const appRoutes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'article/:section/:subsection', component: ArticleComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StartComponent,
    PageNotFoundComponent,
    ArticleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
