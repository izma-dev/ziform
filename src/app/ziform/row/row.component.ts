import {
  Component, ComponentFactoryResolver, Inject, Injector, OnInit, ViewChild,
  ViewContainerRef,
  ChangeDetectorRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import {ColumnComponent} from "../column/column.component";
import {RowModel} from "../shared/models/row.model";
import {ColumnModel} from "../shared/models/column.model";
import { Action } from '../shared/models/action.model';
import { Observable, Subject } from 'rxjs';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent extends BaseComponent<RowModel,ColumnModel> {

  
  

  constructor(public _injector: Injector,
              protected changeDetectorRef: ChangeDetectorRef,
              @Inject(ComponentFactoryResolver) private factoryResolver) {
    super(changeDetectorRef);
    this.factory = this.factoryResolver.resolveComponentFactory(ColumnComponent);
  }


  /**
   * @param action action sent by child component
   */
  public  treatEvent(a : Action){
    console.log('Action Recieved : '+ a.action);
    let r : RowModel = null;
    switch(a.action){
      case 'INSERT_NEW_COLUMN': 
        this.buildView([a.element]);
      break;
      case 'INSERT_NEW_SECTION': 
      case 'INSERT_NEW_ROW': 
        r = new RowModel();
        r.id = "#ID";
        r.name = "Name";
        r.children.push(a.element);
        a.element = r;
      break;
      case 'REMOVE_OLD_ROW': 
        this.destroyComponent();
      break;
      case 'REMOVE_OLD_COLUMN': 
        if(this.viewContainerRef.length==0)
        this.destroyComponent();
      break;
    }
    this._editEvent.next(a);
  }

  public draw(){
    this.buildView(this.dataModel.children);
  }

}
