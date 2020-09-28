import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "http://localhost:3000/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Post a model
  createModel(data): Observable<any> {
    let url = `${this.url}/create-model`
    return this.http.post(url, data).pipe(catchError(this.errorHandler))
  }

  // Get all models

  getModels() {
    return this.http.get(`${this.url}`)
  }

  // Model by ID
  getModel(id): Observable<any> {
    let url = `${this.url}/${id}`
    console.log('url', url)
    console.log('headers', this.headers)
    return this.http.get(url, {
      headers: this.headers
    }).pipe(
      map((res: Response) => {
        console.log('res', res)
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }

  // Error handling
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error status: ${error.status}. Error message: ${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }

}
