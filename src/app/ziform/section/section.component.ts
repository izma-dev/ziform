import {
  Component, ComponentFactoryResolver, Inject, Injector, NgModule, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {RowComponent} from "../row/row.component";
import {SectionModel} from "../shared/models/section.model";


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent implements OnInit {

  @ViewChild('section', {
    read: ViewContainerRef
  }) vcRef: ViewContainerRef

  public dataModel : SectionModel;

  constructor(public _injector: Injector,@Inject(ComponentFactoryResolver) private factoryResolver){

  }

  public insertRow(){
  }

  public refresh(){
    const factory = this.factoryResolver.resolveComponentFactory(RowComponent);
    this.dataModel.rows.forEach(function(value, key) {
      let component = factory.create(this.injector);
      component.instance.settData(value);
      component.instance.refresh();
      this.insert(component.hostView);
    },this.vcRef);
  }

  public settData(dataModel){
    this.dataModel = dataModel;
  }

  ngOnInit() {

  }

}
