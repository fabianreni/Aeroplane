import { Injectable } from '@angular/core';
import { IAeroplane } from './aeroplane';
import { HttpClient, HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AeroplaneService {
  private aeroplaneUrl='./assets/aeroplanes.json';

  constructor(private http:HttpClient){

  }
  getAeroplane(id: number): Observable<any>{
    return this.http.get<IAeroplane[]>(`${this.aeroplaneUrl}/${id}`);
  }
  creatAeroplane(aeroplane: IAeroplane): Observable<IAeroplane[]>{
      return this.http.post<IAeroplane[]>(`${this.aeroplaneUrl}`,aeroplane);
  }
  updateAeroplane(id:number,aeroplane: IAeroplane): Observable<IAeroplane[]>{
      return this.http.put<IAeroplane[]>(`${this.aeroplaneUrl}/${id}`,aeroplane);
  }

  deleteAeroplane(id:number): Observable<any>{
    return this.http.delete(`${this.aeroplaneUrl}/${id}`,{responseType: 'text'});
}
  getAeroplans():Observable< IAeroplane[]>{
      return this.http.get<IAeroplane[]>(this.aeroplaneUrl).pipe(
          tap(data=> console.log('All:'+JSON.stringify(data))),catchError(this.handlerError)
      );
  }
  private handlerError(err: HttpErrorResponse){
  let errorMessage='';
  if(err.error instanceof ErrorEvent){
      errorMessage=`An error occurred: ${err.error.message}`;

  }else{
      errorMessage=`Server returned code: ${err.status},error message is: ${err.message}`;

  }
  console.error(errorMessage);
  return throwError(errorMessage);
  }

}