import {
  Component, AfterViewInit, OnInit, ViewContainerRef, ViewChild, Inject,
  ComponentFactoryResolver, ComponentRef, Type, OnDestroy, ChangeDetectorRef
} from '@angular/core';

import {SectionComponent} from "../section/section.component";
import {DataService} from "../shared/services/data.service";
import {Subject, Subscription} from "rxjs/Rx";
import { SectionModel } from '../shared/models/section.model';
import { BaseComponent } from '../base/base.component';
import { Action } from '../shared/models/action.model';
import { StructurorModel } from '../shared/models/structuror.model';


@Component({
  selector: 'app-structuror',
  templateUrl: './structuror.component.html',
  styleUrls: ['./structuror.component.css']
})

export class StructurorComponent extends BaseComponent<StructurorModel,SectionModel>{
  
  draw() {

  }

  protected dataModelKey : string = 'ID#BUILDER#1';
  protected dataInitModelKey : string = 'ID#BUILDER#INIT';
  public dataModelSubscription: Subscription;
  

  ngAfterViewInit() {
    this.buildView(this.dataModel.children);
  }

  /**
   * @param action action sent by child component
   */
  public treatEvent(a : Action){
    console.log('Action Recieved : '+ a.action);
    let s : SectionModel = null;
    switch(a.action){
      case 'INSERT_NEW_SECTION': 
        this.buildView([a.element]);
      break;
      case 'REMOVE_OLD_ROW':
      case 'REMOVE_OLD_COLUMN': 
      case 'REMOVE_OLD_SECTION': 
        if(this.viewContainerRef.length==0){
          this.dataModel = this.dataService.structuror(this.dataInitModelKey);
          this.buildView(this.dataModel.children);
        }
      break;
    }
  }

  
  /**
   * Constructor 
   * @param changeDetectorRef 
   * @param dataService  Get the structure to build
   * @param factory 
   */
  constructor(
      protected changeDetectorRef: ChangeDetectorRef,
      protected dataService : DataService,
      @Inject(ComponentFactoryResolver) protected factoryResolver) {
      super(changeDetectorRef);
      this.dataModel = this.dataService.structuror(this.dataModelKey);
      this.factory = this.factoryResolver.resolveComponentFactory(SectionComponent);
  }

}
