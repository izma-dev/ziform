import {
  Component, ComponentFactoryResolver, Inject, Injector, NgModule, OnInit, ViewChild,
  ViewContainerRef,
  ChangeDetectorRef,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import {RowComponent} from "../row/row.component";
import {SectionModel} from "../shared/models/section.model";
import { Subject, Observable } from 'rxjs';
import { Action } from '../shared/models/action.model';
import { RowModel } from '../shared/models/row.model';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent extends BaseComponent<SectionModel,RowModel> {

  constructor(public _injector: Injector,
          protected changeDetectorRef: ChangeDetectorRef,
        @Inject(ComponentFactoryResolver) private factoryResolver){
    super(changeDetectorRef);
    this.factory = this.factoryResolver.resolveComponentFactory(RowComponent);
  }

  public draw(){
    this.buildView(this.dataModel.children);
  }



  /**
   * @param action action sent by child component
   */
  public treatEvent(a : Action){
    console.log('Action Recieved : '+ a.action);
    let s : SectionModel = null;
    switch(a.action){
      case 'INSERT_NEW_ROW': 
        this.buildView([a.element]);
      break;
      case 'INSERT_NEW_SECTION': 
        s = new SectionModel();
        s.id = "#ID";
        s.name = "Name";
        s.children.push(a.element);
        a.element = s;
      break;
      case 'REMOVE_OLD_SECTION': 
        this.destroyComponent();
      break;
      case 'REMOVE_OLD_ROW': 
      case 'REMOVE_OLD_COLUMN': 
        if(this.viewContainerRef.length==0)
        this.destroyComponent();
      break;
    }
    this._editEvent.next(a);
  }

}
