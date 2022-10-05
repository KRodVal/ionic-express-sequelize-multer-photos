import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListInstrumentsPageRoutingModule } from './list-instruments-routing.module';

import { ListInstrumentsPage } from './list-instruments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListInstrumentsPageRoutingModule
  ],
  declarations: [ListInstrumentsPage]
})
export class ListInstrumentsPageModule {}
