import { Component, OnInit, ViewChild } from '@angular/core';
import { IAeroplane } from './aeroplane';
import { AeroplaneService } from './aeroplane.service';
import {  MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  // selector: 'app-aeroplanes',
  templateUrl: './aeroplanes.component.html',
  styleUrls: ['./aeroplanes.component.css'],
  providers: [AeroplaneService]

})
export class AeroplanesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  errorMessage: string;
  aeroplanesList: IAeroplane[];

  pageTitle: string = 'Aeroplane List';

  constructor(public matDialog: MatDialog, private router: Router, private aeroplaneServices: AeroplaneService) {
  }

  ngOnInit(): void {
    this.getA();
    // console.log(this.aeroplanesList);
  }

  getA(){
    this.aeroplanesList = this.aeroplaneServices.getAeroplans();
    return this.aeroplanesList;
  }
  

  deleteAeroplane(aeroplane: IAeroplane) {
    this.aeroplaneServices.delete(aeroplane.aeroplaneID);
    this.router.navigate(['aeroplanes']);
  }

  editAeeroplane(aeroplane: IAeroplane): void {
    // this.aeroplaneServices.edit(aeroplane);
    this.router.navigate(['aerplane-edit']);
  }
  add():void{
    this.router.navigate(['aeroplane-add']);
  }
}
