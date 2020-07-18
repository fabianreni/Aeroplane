import { Injectable } from '@angular/core';
import { IAeroplane, Aeroplane } from './aeroplanes/aeroplane';
import { HttpClient, HttpHeaderResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "./assets/aeroplanes";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getAeroplane(): Observable<IAeroplane[]> {
    return this.http.get<IAeroplane[]>(apiUrl)
      .pipe(
        tap(aeroplan => console.log('fetched aeroplanes')),
        catchError(this.handleError('getAeroplane', []))
      );
  }
  addAeroplane(aeroplane: Aeroplane): Observable<Aeroplane> {
    return this.http.post<Aeroplane>(apiUrl, aeroplane, httpOptions).pipe(
      tap((prod: Aeroplane) => console.log(`added aeroplane w/ id=${aeroplane.aeroplaneID}`)),
      catchError(this.handleError<Aeroplane>('addProduct'))
    );
  }
  
  updateAeroplane(id: any, aeroplan: Aeroplane): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, aeroplan, httpOptions).pipe(
      tap(_ => console.log(`updated aeroplan id=${id}`)),
      catchError(this.handleError<any>('updateAeroplane'))
    );
  }
  
  deleteAeroplane(id: any): Observable<Aeroplane> {
    const url = `${apiUrl}/${id}`;
    const url1 = `${apiUrl}`;
    console.log(
    this.http.get<IAeroplane[]>(`${apiUrl}/${id}`));
    return this.http.delete<Aeroplane>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted aeroplane id=${id}`)),
      catchError(this.handleError<Aeroplane>('deleteAeroplane'))
    );
  }

}
