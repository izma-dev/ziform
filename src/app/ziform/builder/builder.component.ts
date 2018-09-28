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

  private dataModel : BuilderModel;
  public dataSubscription: Subscription;
  public data : any = {
    id: 'ID#BUILDER#1',
    name: 'NAME#BUILDER#1',
    sections :[{
      id: 'ID#SECTION#1',
      name: 'NAME#SECTION#1',
      rows : [
        {
          id: 'ID#ROW#1',
          name: 'NAME#ROW#1',
          columns: [
            {
              id: 'ID#COLUMN#1',
              name: 'NAME#COLUMN#1',
            },
            {
              id: 'ID#COLUMN#2',
              name: 'NAME#COLUMN#2',
            },
            {
              id: 'ID#COLUMN#3',
              name: 'NAME#COLUMN#3',
            }
          ]
        }
      ]
    },
      {
        id: 'ID#SECTION#2',
        name: 'NAME#SECTION#2',
        rows : [
          {
            id: 'ID#ROW#1',
            name: 'NAME#ROW#1',
            columns: [
              {
                id: 'ID#COLUMN#1',
                name: 'NAME#COLUMN#1',
              },
              {
                id: 'ID#COLUMN#2',
                name: 'NAME#COLUMN#2',
              },
              {
                id: 'ID#COLUMN#3',
                name: 'NAME#COLUMN#3',
              },
              {
                id: 'ID#COLUMN#4',
                name: 'NAME#COLUMN#4',
              }
            ]
          }
        ]
      },
      {
        id: 'ID#SECTION#3',
        name: 'NAME#SECTION#3',
        rows : [
          {
            id: 'ID#ROW#1',
            name: 'NAME#ROW#1',
            columns: [
              {
                id: 'ID#COLUMN#1',
                name: 'NAME#COLUMN#1',
              }
            ]
          }
        ]
      }
    ]
  };

  @ViewChild('root', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef;


  private build() {
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
    this.build();
  }

  constructor(
      private changeDetectorRef: ChangeDetectorRef,
      private dataService:DataService,
      @Inject(ComponentFactoryResolver) private factoryResolver) {
      this.dataModel = dataService.builder('ID#BUILDER#1');
  }

  ngOnDestroy(): void {
    if (this.changeDetectorRef) {
      this.changeDetectorRef.detach();
    }
  }
}
