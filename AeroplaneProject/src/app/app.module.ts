import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AeroplanesComponent } from './aeroplanes/aeroplanes.component';
import { AeroplanesAddComponent } from './aeroplanes-add/aeroplanes-add.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AeroplaneformComponent } from './aeroplaneform/aeroplaneform.component';


@NgModule({
  declarations: [
    AppComponent,
    AeroplanesComponent,
    AeroplanesAddComponent,
    HomeComponent,
    ModalComponent,
    AeroplaneformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path:'aeroplaneform',component:AeroplaneformComponent},
      {path: 'aeroplanes',component:AeroplanesComponent},
      {path: 'aeroplanes-add',component:AeroplanesAddComponent},
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
