import { Routes } from '@angular/router';
import { StructurorComponent } from './structuror/structuror.component';
import { BuilderComponent } from './builder/builder.component';

export const ZiformRoutes: Routes = [{
  path: 'structuror',
  component: StructurorComponent
},{
  path: 'builder',
  component: BuilderComponent
}];