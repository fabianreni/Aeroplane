import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeroplanesComponent } from './aeroplanes.component';
import { ModalComponent } from '../modal/modal.component';
import { AeroplaneEditComponent } from '../aeroplane-edit/aeroplane-edit.component';
// import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AeroplaneformComponent} from '../aeroplaneform/aeroplaneform.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AeroplanesComponent,
    ModalComponent,
    AeroplaneformComponent,
    AeroplaneEditComponent,
    
  ],
  imports: [
    RouterModule.forChild([
      {path: 'aerplane-edit', component:AeroplaneEditComponent},
      {path:'aeroplaneform',component:AeroplaneformComponent},
      {path: 'aeroplanes',component:AeroplanesComponent},
    ]),
  
    SharedModule,
  ],
  entryComponents:[ModalComponent]
})
export class AeroplaneModule { }
