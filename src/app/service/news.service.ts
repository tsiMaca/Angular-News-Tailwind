import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  api_key = 'ee2043f1f5a24821889f7df6cf22e717';

  constructor(private http: HttpClient) {}
  initSources() {
    return this.http.get(
      `https://newsapi.org/v2/sources?language=en&apiKey=${this.api_key}`
    );
  }
  getArticlesByid(source: string) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.api_key}`
    );
  }

  initArticles(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.api_key}`)
  }
}
