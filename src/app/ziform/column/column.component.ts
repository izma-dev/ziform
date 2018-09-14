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
export class ColumnComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseover') onHover() {
  }

  clickEvent(event){
    console.log('click executed');
  }

  onClick(event,id){
    console.log('rightClick on :'+id);
  }

}
