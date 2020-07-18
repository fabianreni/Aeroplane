import { Component, OnInit } from '@angular/core';
import { IAeroplane, Aeroplane } from './aeroplane';
import { AeroplaneService } from './aeroplane.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  // selector: 'app-aeroplanes',
  templateUrl: './aeroplanes.component.html',
  styleUrls: ['./aeroplanes.component.css'],
  providers: [AeroplaneService]

})
export class AeroplanesComponent implements OnInit {

  errorMessage: string;

  pageTitle: string = 'Aeroplane List';

  constructor(private api: ApiService,public matDialog: MatDialog, private router: Router, private aeroplaneServices: AeroplaneService) {
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
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

  deleteAeroplane(aeroplane: IAeroplane) {
    this.api.deleteAeroplane(aeroplane.aeroplaneID).subscribe
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
