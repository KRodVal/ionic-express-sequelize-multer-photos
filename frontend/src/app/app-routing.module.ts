import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-instruments',
    pathMatch: 'full'
  },
  {
    path: 'add-instrument',
    loadChildren: () => import('./add-instrument/add-instrument.module').then( m => m.AddInstrumentPageModule)
  },
  {
    path: 'list-instruments',
    loadChildren: () => import('./list-instruments/list-instruments.module').then( m => m.ListInstrumentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
