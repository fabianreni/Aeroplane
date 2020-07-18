import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-aeroplaneform',
  templateUrl: './aeroplaneform.component.html',
  styleUrls: ['./aeroplaneform.component.css']
})
export class AeroplaneformComponent implements OnInit {

  aeroplaneSec = new FormGroup({
    aeroplanName: new FormControl(''),
    passagerNumber: new FormControl(''),
    aeroplanLengt: new FormControl('')
  });
  constructor() { }


  ngOnInit(): void {
  }
  
  callingFunction() {
    console.log(this.aeroplaneSec.value);
   }

}
