import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WorkoutService {
 
      
  private _url = 'http://localhost:50697/api/CategoryWeb';
  constructor(private http: HttpClient) { }

  getAll(): Observable<WorkoutService[]> {
    return this.http.get<WorkoutService[]>(this._url);
  }

  getById(id: string): Observable<WorkoutService> {
    return this.http.get<WorkoutService>(this._url + `/${id}`);
  }

  save(dept: WorkoutService) {
    return this.http.post(this._url, dept);
  }

  update(dept: WorkoutService) {
    return this.http.put(this._url, dept);
  }

  delete(id: number) {
    return this.http.delete(this._url + `/${id}`);
  } 

    }

