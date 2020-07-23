import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AeroplaneService } from '../aeroplanes/aeroplane.service';


@Component({
  selector: 'app-aeroplane-add',
  templateUrl: './aeroplane-add.component.html',
  styleUrls: ['./aeroplane-add.component.css']
})
export class AeroplaneAddComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private aeroplaneServices: AeroplaneService, private router: Router) {

  }
  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      aeroplaneId: Math.floor(Math.random() * 100 + Math.random() * 10),
      aeroplaneName: ['', Validators.maxLength(50)],
      passagerNumber: ['', Validators.max(10000)],
      aeroplanLength: ['', Validators.max(500)]
    });
  }

  
  onSubmit() {
    this.aeroplaneServices.add(this.addForm.value);
    this.router.navigate(['aeroplanes']);}
}
