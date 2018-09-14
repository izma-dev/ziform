import {Component, HostBinding, HostListener, NgModule, OnInit} from '@angular/core';
import {ShContextMenuModule} from "ng2-right-click-menu";


@NgModule({
  imports: [ShContextMenuModule]
})

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {

  public items = [
    { name: 'John', otherProperty: 'Foo' },
    { name: 'Joe', otherProperty: 'Bar' }
  ];

  public data={
    firstLevel :[
      { label: 'insert', cost: 12 },
      { label: 'remove', cost: 12}
      ],
    secondLevel :{
      insert : [
      { label: 'new row', cost: 12 },
      { label: 'new column', cost: 12 },
      { label: 'new section', cost: 12 }
      ],
      remove : [
        { label: 'selected row', cost: 12 },
        { label: 'selected column', cost: 12 },
        { label: 'selected section', cost: 12 }
      ]
    }
  };

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseover') onHover() {
  }

  clickEvent(event){
    console.log('click executed');
  }

  onClick(event){
    console.log('rightClick executed');
  }

  //@ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

}
