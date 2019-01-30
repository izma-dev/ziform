import {
  Component, ComponentFactoryResolver, Inject, Injector, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ColumnComponent} from "../column/column.component";
import {RowModel} from "../shared/models/row.model";
import {ColumnModel} from "../shared/models/column.model";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @ViewChild('row', {
    read: ViewContainerRef
  }) vcRef: ViewContainerRef;

  private dataModel : RowModel;
  private factory : any;

  public settData(dataModel :RowModel){
    this.dataModel = dataModel;
  }

  constructor(public _injector: Injector,@Inject(ComponentFactoryResolver) private factoryResolver) {
    this.factory = this.factoryResolver.resolveComponentFactory(ColumnComponent);
  }

  private insertColumns(l : ColumnModel []){
    l.forEach(function(value, key) {
      this.insertColumn(value);
    },this);
  }

  private insertColumn(c : ColumnModel){
    let component = this.factory.create(this.vcRef.injector);
    component.instance.settData(c);
    component.instance.editEvent.subscribe(
      v => {this.editEvent(v)}
    )
    this.vcRef.insert(component.hostView);
  }

  private editEvent(c : ColumnModel){
    console.log('Edit Event Request');
    this.insertColumn(c);
  }

  public refresh(){
    this.insertColumns(this.dataModel.columns);
  }

  ngOnInit() {
  }

}
