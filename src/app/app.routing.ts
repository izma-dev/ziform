import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{
    path: '',
    loadChildren: './material-component/material.module#MaterialComponentsModule'
  }, {
    path: '',
    loadChildren: './ziform/ziform.module#ZiformModule'
  }, {
    path: 'starter',
    loadChildren: './starter/starter.module#StarterModule'
  }, {
    path: 'builder',
    redirectTo: './ziform/ziform.module#ZiformModule'
  }, {
    path: 'structuror',
    loadChildren: './ziform/ziform.module#ZiformModule'
  }]
}];

