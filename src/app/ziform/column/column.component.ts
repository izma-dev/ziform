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

  public data = { label: 'Iron Short Sword', cost: 12 };

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

}
