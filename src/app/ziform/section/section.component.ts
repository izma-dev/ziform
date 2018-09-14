import {Component, NgModule, OnInit} from '@angular/core';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

export class SectionComponent implements OnInit {

  public data : object;

  constructor() {
    this.data = {
      id: 'ID#SECTION#?',
      name: 'NAME#SECTION#?'
    }
  }

  ngOnInit() {
  }

}
