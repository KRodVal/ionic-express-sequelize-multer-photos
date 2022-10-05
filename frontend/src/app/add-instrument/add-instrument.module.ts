import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInstrumentPageRoutingModule } from './add-instrument-routing.module';
import { AddInstrumentPage } from './add-instrument.page';



@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddInstrumentPageRoutingModule
  ],
  declarations: [AddInstrumentPage]
})
export class AddInstrumentPageModule {}
