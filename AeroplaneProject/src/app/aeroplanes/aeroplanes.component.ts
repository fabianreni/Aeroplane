import { Component, OnInit } from '@angular/core';
import { IAeroplane, Aeroplane } from './aeroplane';
import { AeroplaneService } from './aeroplane.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  // selector: 'app-aeroplanes',
  templateUrl: './aeroplanes.component.html',
  styleUrls: ['./aeroplanes.component.css'],
  providers: [AeroplaneService]
  
})
export class AeroplanesComponent implements OnInit {

  errorMessage:string;

  pageTitle : string= 'Aeroplane List';

  constructor( public matDialog:MatDialog, private aeroplaneServices:AeroplaneService ){
    // this.listFilter='aeroplane1';
  }

  aeroplanes: IAeroplane[];

  ngOnInit(): void {this.aeroplaneServices.getAeroplans().subscribe({
    next: aeroplanes=>{
        this.aeroplanes=aeroplanes;
    },
    error:err=>this.errorMessage=err
});

  }
  openModal(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.id="modal-component";
    dialogConfig.height="400px";
    dialogConfig.width="500px";
    const modalDialog=this.matDialog.open(ModalComponent, dialogConfig);
  }
  

}
