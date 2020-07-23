import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeroplanesComponent } from './aeroplanes.component';
import { AeroplaneEditComponent } from '../aeroplane-edit/aeroplane-edit.component';
// import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AeroplaneAddComponent} from '../aeroplane-add/aeroplane-add.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AeroplanesComponent,
    AeroplaneAddComponent,
    AeroplaneEditComponent,
    
  ],
  imports: [
    RouterModule.forChild([
      {path: 'aerplane-edit', component:AeroplaneEditComponent},
      {path:'aeroplane-add',component:AeroplaneAddComponent},
      {path: 'aeroplanes',component:AeroplanesComponent},
    ]),
  
    SharedModule,
  ],
  entryComponents:[]
})
export class AeroplaneModule { }
