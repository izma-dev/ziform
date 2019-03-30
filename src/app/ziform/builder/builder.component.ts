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
import { BuilderModel } from '../shared/models/builder.model';


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent extends BaseComponent<BuilderModel,SectionModel>{
  
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
  }

  
  /**
   * Constructor 
   * @param changeDetectorRef 
   * @param dataService  Get the structure to build
   * @param factory 
   */
  constructor(
      protected changeDetectorRef: ChangeDetectorRef,
      private dataService : DataService,
      @Inject(ComponentFactoryResolver) private factoryResolver) {
      super(changeDetectorRef);
      this.dataModel = this.dataService.builder(this.dataModelKey);
      this.factory = this.factoryResolver.resolveComponentFactory(SectionComponent);
  }
}
