import { Component, OnInit } from '@angular/core';
import { IAeroplane } from '../aeroplanes/aeroplane';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
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

  constructor(private router: Router, private aeroplaneService: AeroplaneService,private formBuilder: FormBuilder) { }
  
  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      aeroplaneId: [],
      aeroplaneName: ['',  Validators.maxLength(50)],
      passagerNumber: ['',  Validators.max(10000)],
      aeroplanLength: ['',  Validators.max(500)]
    });
  }

  onSubmit() {
    // console.log(this.addForm.value);
    this.aeroplaneService.edit(this.addForm.value);
    this.router.navigate(['aeroplanes']);

  }
}
