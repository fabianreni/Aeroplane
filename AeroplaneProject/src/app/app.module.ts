import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AeroplanesComponent } from './aeroplanes/aeroplanes.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { AeroplaneformComponent } from './aeroplaneform/aeroplaneform.component';
import { AeroplaneEditComponent } from './aeroplane-edit/aeroplane-edit.component';
import { AeroplaneDeleteComponent } from './aeroplane-delete/aeroplane-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AeroplanesComponent,
    HomeComponent,
    ModalComponent,
    AeroplaneformComponent,
    AeroplaneEditComponent,
    AeroplaneDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,

    RouterModule.forRoot([
      {path: 'aerplane-edit', component:AeroplaneEditComponent},
      {path : 'aeroplane-delete', component:AeroplaneDeleteComponent},
      {path:'aeroplaneform',component:AeroplaneformComponent},
      {path: 'aeroplanes',component:AeroplanesComponent},
      {path: 'home',component:HomeComponent},
      {path:'',redirectTo:'home', pathMatch:'full'},
      {path: '**', redirectTo:'home', pathMatch:'full'}
    ]),
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent]
})
export class AppModule { }
