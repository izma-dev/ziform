import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BuilderComponent } from './builder/builder.component';
import { ZiformRoutes } from './ziform.routing';
import { SectionComponent } from './section/section.component';
import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
      FlexLayoutModule,
    RouterModule.forChild(ZiformRoutes)
  ],
  declarations: [BuilderComponent, SectionComponent, RowComponent, ColumnComponent]
})
export class ZiformModule { }
