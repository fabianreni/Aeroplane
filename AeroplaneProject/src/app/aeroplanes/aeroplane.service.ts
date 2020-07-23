import { Injectable } from '@angular/core';
import { IAeroplane } from './aeroplane';
import { HttpClient, HttpHeaderResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AeroplaneService {
  aeroplanesList:IAeroplane[]=[
  //   {
  //     "aeroplaneID":1,
  //     "aeroplaneName":"aeroplane1",
  //     "passagersNumber":100,
  //     "aeroplaneLength":100
  // }
  // {
  //     "aeroplaneID":2,
  //     "aeroplaneName":"aeroplane2",
  //     "passagersNumber":200,
  //     "aeroplaneLength":200
  // },
  // {
  //   "aeroplaneID":3,
  //   "aeroplaneName":"aeroplane3",
  //   "passagersNumber":200,
  //   "aeroplaneLength":200
  
  // }
  ];

  constructor(private http:HttpClient){

  }

  delete(id:number){
  this.aeroplanesList=this.aeroplanesList.filter(({aeroplaneID})=>aeroplaneID!==id);
  console.log (this.aeroplanesList); 
  return  this.aeroplanesList=this.aeroplanesList.filter(({aeroplaneID})=>aeroplaneID!==id);
  }
  add(aeroplane:IAeroplane){
    // console.log(aeroplane);
     return this.aeroplanesList.push(aeroplane);
    //  this.getAeroplans();
    //  console.log(this.aeroplanesList);
    // this.getAeroplaneList();
    //  return this.aeroplanesList.push(aeroplane);
  }
  edit(aeroplane:IAeroplane){
    let index=this.aeroplanesList.indexOf(aeroplane);
    this.aeroplanesList[index]=aeroplane;
    console.log(this.aeroplanesList);
  }
  getAeroplans():IAeroplane[]{
    console.log(this.aeroplanesList)
    return this.aeroplanesList;
      }
}
