import { Injectable } from '@angular/core';
import { IAeroplane ,Aeroplane} from './aeroplane';
import { HttpClient, HttpHeaderResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "./assets/aeroplanesList.json";
 
@Injectable({
  providedIn: 'root'
})
export class AeroplaneService {
  private aeroplaneUrl='./assets/aeroplanesList.json';

  constructor(private http:HttpClient){

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getAeroplane(id: number): Observable<any>{
    return this.http.get<IAeroplane[]>(`${this.aeroplaneUrl}/${id}`);
  }

  // updateAeroplaneSimple(aeroplane:IAeroplane): Observable<IAeroplane[]>{
  //   return this.http.put<IAeroplane>(`${this.aeroplaneUrl}/${id}`);

  // }
  deleteAeroplanes(id: any): Observable<Aeroplane> {
    const url = `${apiUrl}/${id}`;
    // console.log(url);
    return this.http.delete<Aeroplane>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted aeroplane id=${id}`)),
      catchError(this.handleError<Aeroplane>('deleteAeroplane'))
    );
  }
  updateAeroplane(aeroplane: Aeroplane): Observable<IAeroplane[]>{
      return this.http.put<IAeroplane[]>(`${this.aeroplaneUrl}`,aeroplane);
  }

  // updateAeroplane(id: any, aeroplan: Aeroplane): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.put(url, aeroplan, httpOptions).pipe(
  //     tap(_ => console.log(`updated aeroplan id=${id}`)),
  //     catchError(this.handleError<any>('updateAeroplane'))
  //   );
  // }
  myDeleteAeroplane(id:number): Observable<any>{
    return this.http.delete(`${this.aeroplaneUrl}/${id}`,{responseType: 'text'});
}
  getAeroplans():Observable< IAeroplane[]>{
      return this.http.get<IAeroplane[]>(this.aeroplaneUrl).pipe(
          tap(data=> console.log('All:'+JSON.stringify(data))),catchError(this.handleError)
      );
  }
  creatAeroplane(aeroplane: IAeroplane): Observable<IAeroplane[]>{
    return this.http.put<IAeroplane[]>(`${this.aeroplaneUrl}`,JSON.stringify(aeroplane));
    // return this.http.post<IAeroplane[]>(`${this.aeroplaneUrl}`,aeroplane);
}
}