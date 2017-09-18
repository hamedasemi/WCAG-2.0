import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContentService {



  constructor(private http: HttpClient) { }
  getConetnt(lang) {
    return this.http.get(`assets/i18n/content/${lang}.json`);
  }
}
