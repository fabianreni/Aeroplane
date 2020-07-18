import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AeroplaneService } from '../aeroplanes/aeroplane.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-aeroplaneform',
  templateUrl: './aeroplaneform.component.html',
  styleUrls: ['./aeroplaneform.component.css']
})

export class AeroplaneformComponent implements OnInit {


  constructor( public dialogRef: MatDialogRef<ModalComponent>,private formBuilder: FormBuilder, private router :Router) {

  }

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      aeroplaneId: [],
      aeroplaneName: ['',  Validators.maxLength(50)],
      passagerNumber: ['', Validators.max(10000)],
      aeroplanLength: ['',  Validators.max(500)]
    });
  }

  onSubmit() {
    console.log(this.addForm.value);
    this.dialogRef.close();
    this.router.navigate(['aeroplanes']);
  }
  // addForm = new FormGroup({
  //   aeroplanName: new FormControl(''),
  //   passagerNumber: new FormControl(''),
  //   aeroplanLengt: new FormControl('')
  // });
  // constructor(private router: Router, private aeroplaneService: AeroplaneService) { }


  // ngOnInit(): void {
  //   this.addForm= new FormGroup({
  //     // aeroplaneId: [],
  //     aeroplaneName: new FormControl('', Validators.required),
  //     passagerNumber: new FormControl('',Validators.required),
  //     aeroplanLength: new FormControl('',Validators.required)
  //     });
  // }

  // onSubmit() {
  //   console.log("hello");
  //   this.aeroplaneService.creatAeroplane(this.addForm.value)
  // .subscribe(data=>{this.router.navigate['aeroplanes']});

  //  }

}
