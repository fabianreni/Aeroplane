import { Component, OnInit } from '@angular/core';
import { IAeroplane, Aeroplane } from './aeroplane';
import { AeroplaneService } from './aeroplane.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-aeroplanes',
  templateUrl: './aeroplanes.component.html',
  styleUrls: ['./aeroplanes.component.css'],
  providers: [AeroplaneService]

})
export class AeroplanesComponent implements OnInit {

  errorMessage: string;
  // aeroplanesList:IAeroplane[]=[
  //   {
  //     "aeroplaneID":1,
  //     "aeroplaneName":"aeroplane1",
  //     "passagersNumber":100,
  //     "aeroplaneLength":100
  // },
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
  // ];

  pageTitle: string = 'Aeroplane List';

  constructor(public matDialog: MatDialog, private router: Router, private aeroplaneServices: AeroplaneService) {
    // this.listFilter='aeroplane1';
  }

  aeroplanes: IAeroplane[];

  ngOnInit(): void {
    this.aeroplaneServices.getAeroplans().subscribe({
      next: aeroplanes => {
        this.aeroplanes = aeroplanes;
      },
      error: err => this.errorMessage = err
    });

  }
  openModal():void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "550px";
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
  // addAeroplane(aeroplane:Aeroplane){
  //   this.aeroplanesList.push();
  // }
  deleteAeroplane(aeroplane: IAeroplane) {
    this.aeroplaneServices.deleteAeroplanes(aeroplane.aeroplaneID).subscribe
    (res=>{
      this.router.navigate(['aeroplane']);
    }, (err)=>{
      console.log(err);
    });
    // this.aeroplaneServices.myDeleteAeroplane(aeroplane.aeroplaneID).
    //   subscribe(data => {
    //     this.aeroplanes = this.aeroplanes.filter(aero => aero != aeroplane);
    //   });
  }

  editAeeroplane(aeroplane: IAeroplane): void {
    window.localStorage.removeItem("editAeroplaneId");
    window.localStorage.setItem("editAeroplaneId", aeroplane.aeroplaneID.toString());
    this.router.navigate(['aerplane-edit']);
  }
}
