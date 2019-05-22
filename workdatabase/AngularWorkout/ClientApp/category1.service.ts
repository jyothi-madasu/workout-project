import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable()
export class Category1Service {
  private url = "http://localhost:50697/api/CategoryWeb";

  constructor(private http: HttpClient) { }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  save(categ: Category) {
    return this.http.post(this.url, categ);
  }

 
}


