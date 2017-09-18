import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  getConetnt(lang: string) {
    return this.http.get(`assets/content/${lang}.json`);
  }
}
