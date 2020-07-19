import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeroplanesComponent } from './aeroplanes.component';
import { ModalComponent } from '../modal/modal.component';
import { AeroplaneEditComponent } from '../aeroplane-edit/aeroplane-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AeroplaneformComponent} from '../aeroplaneform/aeroplaneform.component';


@NgModule({
  declarations: [
    AeroplanesComponent,
    ModalComponent,
    AeroplaneformComponent,
    AeroplaneEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'aerplane-edit', component:AeroplaneEditComponent},
      {path:'aeroplaneform',component:AeroplaneformComponent},
      {path: 'aeroplanes',component:AeroplanesComponent},
    ]),
    ReactiveFormsModule,
  ],
  entryComponents:[ModalComponent]
})
export class AeroplaneModule { }
