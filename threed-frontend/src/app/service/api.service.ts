import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:4200/"; 
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Post a model
  createModel(data): Observable<any>{
    let url = `${this.url}/create`
    return this.http.post(url, data)
  }

  // Get all models

  getModels(){
    return this.http.get(`${this.url}`)
  }

  // Model by ID

  // Error handling


}
