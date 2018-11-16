import {
  Component, AfterViewInit, OnInit, ViewContainerRef, ViewChild, Inject,
  ComponentFactoryResolver, ComponentRef, Type, OnDestroy, ChangeDetectorRef
} from '@angular/core';

import {SectionComponent} from "../section/section.component";
import {BuilderModel} from "../shared/models/builder.model";
import {DataService} from "../shared/services/data.service";
import {Subject, Subscription} from "rxjs/Rx";


@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent implements AfterViewInit, OnDestroy {

  private dataModelKey : string = 'ID#BUILDER#1';
  private dataModel : BuilderModel;
  public dataModelSubscription: Subscription;

  @ViewChild('root', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef;


  private builderInit() {
    this.changeDetectorRef.detach();
    const factory = this.factoryResolver.resolveComponentFactory(SectionComponent);
    let vcr = this.viewContainerRef;
    this.dataModel.sections.forEach(function(value, key) {
      let component = factory.create(this.injector);
      component.instance.settData(value);
      component.instance.refresh();
      this.insert(component.hostView);
    },vcr);
    this.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit() {
    this.builderInit();
  }

  constructor(
      private changeDetectorRef: ChangeDetectorRef,
      private dataService:DataService,
      @Inject(ComponentFactoryResolver) private factoryResolver) {
      this.dataModel = dataService.builder(this.dataModelKey);
  }

  ngOnDestroy(): void {
    if (this.changeDetectorRef) {
      this.changeDetectorRef.detach();
    }
  }
}
