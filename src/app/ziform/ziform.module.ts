import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ZiformRoutes } from './ziform.routing';
import { SectionComponent } from './section/section.component';
import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';
import {ShContextMenuModule} from 'ng2-right-click-menu';
import {DataService} from "./shared/services/data.service";
import { BaseComponent } from './base/base.component';
import { ElementComponent } from './element/element.component';
import { StructurorComponent } from './structuror/structuror.component';
import { BuilderComponent } from './builder/builder.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
      FlexLayoutModule,
    ShContextMenuModule,
    RouterModule.forChild(ZiformRoutes)
  ],
  entryComponents: [
    SectionComponent,
    RowComponent,
    ColumnComponent
  ],
  
  providers: [DataService],
  declarations: [StructurorComponent, SectionComponent, RowComponent, ColumnComponent, ElementComponent, BuilderComponent]
})
export class ZiformModule { }
