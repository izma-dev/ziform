import {
  Component, AfterViewInit, OnInit, ViewContainerRef, ViewChild, Inject,
  ComponentFactoryResolver, ComponentRef, Type, OnDestroy, ChangeDetectorRef
} from '@angular/core';

import {SectionComponent} from "../section/section.component";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent implements AfterViewInit, OnDestroy {

  public data ={
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
              }
            ]
          }
        ]
      }
    ]
  };

  @ViewChild('root', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef

  private insertSection(){
    const factory = this.factoryResolver.resolveComponentFactory(SectionComponent);
    const component = factory.create(this.viewContainerRef.parentInjector);
    this.viewContainerRef.insert(component.hostView);
  }

  private insertRow(){

  }

  private insertColumn(){

  }

  private build() {
    this.changeDetectorRef.detach();
    this.insertSection();
    this.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit() {
    this.build()
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
     @Inject(ComponentFactoryResolver) private factoryResolver) {
  }

  ngOnDestroy(): void {
    if (this.changeDetectorRef) {
      this.changeDetectorRef.detach();
    }
  }
}
