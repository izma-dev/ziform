import {Component, Host, HostBinding, HostListener, NgModule, OnInit, ViewContainerRef, ComponentFactoryResolver, Inject, Injector, ChangeDetectorRef, AfterViewInit, OnDestroy} from '@angular/core';
import {ShContextMenuModule} from "ng2-right-click-menu";
import {ColumnModel} from "../shared/models/column.model";
import {RowComponent} from "../row/row.component";
import {Observable, Subject} from "rxjs";
import { Action } from '../shared/models/action.model';
import { BaseComponent } from '../base/base.component';


@NgModule({
  imports: [ShContextMenuModule]
})

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent extends BaseComponent<ColumnModel,ColumnModel> {
 
  public data={
    firstLevel :[
      { label: 'insert', id: 'INSERT' },
      { label: 'remove', id: 'REMOVE'}
      ],
    secondLevel :{
      insert : [
      { label: 'new row',     id: 'INSERT_NEW_ROW' },
      { label: 'new column',  id: 'INSERT_NEW_COLUMN'},
      { label: 'new section', id: 'INSERT_NEW_SECTION' }
      ],
      remove : [
        { label: 'selected row', id: 'REMOVE_OLD_ROW' },
        { label: 'selected column', id: 'REMOVE_OLD_COLUMN' },
        { label: 'selected section', id: 'REMOVE_OLD_SECTION' }
      ]
    }
  };


  @HostListener('mouseover') onHover() {
  }

  clickEvent(ColumnModel){
    console.log('click event');
  }

  public draw(){
    // this.insertColumns(this.dataModel.columns);
   }

  onClick(event,id){
    console.log('Menu Action :'+id);
    let c : ColumnModel  = null;
    switch(id){
      
      case 'INSERT_NEW_SECTION': 
      case 'INSERT_NEW_ROW': 
      case 'INSERT_NEW_COLUMN': 
        c = new ColumnModel();
        c.id = "#ID";
        c.name = "Name";
      break;
      case 'REMOVE_OLD_COLUMN': 
        this.destroyComponent();
      break;
    }
    this._editEvent.next(new Action(id,c));
  }

  /**
   * @param action action sent by child component
   */
  public treatEvent(action : Action){
    // TODO
  }


    constructor(public _injector: Injector,
        protected changeDetectorRef: ChangeDetectorRef,
        @Inject(ComponentFactoryResolver) protected factoryResolver) {
      super(changeDetectorRef);
      this.factory = this.factoryResolver.resolveComponentFactory(ColumnComponent);
    }

}
