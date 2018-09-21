import {
  Component, ComponentFactoryResolver, Inject, Injector, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ColumnComponent} from "../column/column.component";
import {RowModel} from "../shared/models/row.model";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @ViewChild('column', {
    read: ViewContainerRef
  }) vcRef: ViewContainerRef

  public dataModel : RowModel;

  public settData(dataModel :RowModel){
    this.dataModel = dataModel;
  }

  constructor(public _injector: Injector,@Inject(ComponentFactoryResolver) private factoryResolver) { }

  public insertColumn(){}

  public refresh(){
    const factory = this.factoryResolver.resolveComponentFactory(ColumnComponent);
    this.dataModel.columns.forEach(function(value, key) {
      let component = factory.create(this.injector);
      component.instance.settData(value);
      this.insert(component.hostView);
    },this.vcRef);
  }

  ngOnInit() {
  }

}
