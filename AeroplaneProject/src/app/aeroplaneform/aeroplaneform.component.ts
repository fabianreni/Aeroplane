import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AeroplaneService } from '../aeroplanes/aeroplane.service';


@Component({
  selector: 'app-aeroplaneform',
  templateUrl: './aeroplaneform.component.html',
  styleUrls: ['./aeroplaneform.component.css']
})


export class AeroplaneformComponent implements OnInit {

  addForm :FormGroup;
  // addForm = new FormGroup({
  //   aeroplanName: new FormControl(''),
  //   passagerNumber: new FormControl(''),
  //   aeroplanLengt: new FormControl('')
  // });
  constructor(private router: Router, private aeroplaneService: AeroplaneService) { }


  ngOnInit(): void {
    this.addForm= new FormGroup({
      // aeroplaneId: [],
      aeroplanName: new FormControl('', Validators.required),
      passagerNumber: new FormControl('',Validators.required),
      aeroplanLengt: new FormControl('',Validators.required)
      });
  }
  
  onSubmit() {
    console.log("hello");
    this.aeroplaneService.creatAeroplane(this.addForm.value)
  .subscribe(data=>{this.router.navigate['aeroplanes']});
   
   }

}
