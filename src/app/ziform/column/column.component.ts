import {Component, Host, HostBinding, HostListener, NgModule, OnInit, ViewContainerRef} from '@angular/core';
import {ShContextMenuModule} from "ng2-right-click-menu";
import {ColumnModel} from "../shared/models/column.model";
import {RowComponent} from "../row/row.component";
import {Observable, Subject} from "rxjs";


@NgModule({
  imports: [ShContextMenuModule]
})

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  private _editEvent : Subject<ColumnModel> = new Subject();


  get editEvent(): Observable<ColumnModel> {
    return this._editEvent.asObservable();
  }

  public data={
    firstLevel :[
      { label: 'insert', id: 'ID#1' },
      { label: 'remove', id: 'ID#2'}
      ],
    secondLevel :{
      insert : [
      { label: 'new row', id: 'ID#3' },
      { label: 'new column', id: 'ID#4'},
      { label: 'new section', id: 'ID#5' }
      ],
      remove : [
        { label: 'selected row', id: 'ID#6' },
        { label: 'selected column', id: 'ID#7' },
        { label: 'selected section', id: 'ID#8' }
      ]
    }
  };

  public dataModel : ColumnModel;

  public settData(dataModel :ColumnModel){
    this.dataModel = dataModel;
  }

  constructor(public vcRef: ViewContainerRef) { }

  ngOnInit() {
  }

  @HostListener('mouseover') onHover() {
  }

  clickEvent(ColumnModel){
    console.log('click event');
  }

  onClick(event,id){
    console.log('rightClick on :'+id);
    let c = new ColumnModel();
    c.id = "#ID";
    c.name = "Name";
    this._editEvent.next(c);
  }



}
