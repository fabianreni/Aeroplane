import { Component, OnInit } from '@angular/core';
import { IAeroplane } from '../aeroplanes/aeroplane';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { AeroplaneService } from '../aeroplanes/aeroplane.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-aeroplane-edit',
  templateUrl: './aeroplane-edit.component.html',
  styleUrls: ['./aeroplane-edit.component.css']
})
export class AeroplaneEditComponent implements OnInit {

  aeroplane: IAeroplane;
  editForm:FormGroup;

  constructor(private router: Router, private aeroplaneService: AeroplaneService) { }

  ngOnInit(): void {
    let aerplaneId = window.localStorage.getItem("editAeroplaneId");
    if(!aerplaneId) {
      alert("Invalid action.")
      this.router.navigate(['aeroplane']);
      return;
    }
    this.editForm= new FormGroup({
      // aeroplaneId: [],
      aeroplanName: new FormControl('', Validators.required),
      passagerNumber: new FormControl('',Validators.required),
      aeroplanLengt: new FormControl('',Validators.required)
      });
    
    this.aeroplaneService.getAeroplane(+aerplaneId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }
  onSubmit() {
    this.aeroplaneService.updateAeroplane(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          
            alert('User updated successfully.');
            this.router.navigate(['aeroplane']);
         
        },
        error => {
          alert(error);
        });
  }

}
