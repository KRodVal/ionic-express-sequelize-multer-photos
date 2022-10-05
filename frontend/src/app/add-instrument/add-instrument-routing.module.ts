import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInstrumentPage } from './add-instrument.page';

const routes: Routes = [
  {
    path: '',
    component: AddInstrumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInstrumentPageRoutingModule {}
