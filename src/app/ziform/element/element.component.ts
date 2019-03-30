import { Component, OnInit, ComponentFactoryResolver, Inject, ChangeDetectorRef, Injector } from '@angular/core';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent extends ColumnComponent implements OnInit {

  constructor(public _injector: Injector,
    protected changeDetectorRef: ChangeDetectorRef,
    @Inject(ComponentFactoryResolver) protected factoryResolver) { 
    super(_injector,changeDetectorRef,factoryResolver);
  }

  ngOnInit() {
  }

}
