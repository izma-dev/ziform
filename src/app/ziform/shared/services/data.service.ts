import { Injectable } from '@angular/core';
import {BuilderModel} from "../models/builder.model";
import {ColumnModel} from "../models/column.model";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _builders : Map<string,BuilderModel>;
  private dataModel : BuilderModel;
  private data : any = {
    id: 'ID#BUILDER#1',
    name: 'NAME#BUILDER#1',
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
              },
              {
                id: 'ID#COLUMN#4',
                name: 'NAME#COLUMN#4',
              }
            ]
          }
        ]
      },
      {
        id: 'ID#SECTION#3',
        name: 'NAME#SECTION#3',
        rows : [
          {
            id: 'ID#ROW#1',
            name: 'NAME#ROW#1',
            columns: [
              {
                id: 'ID#COLUMN#1',
                name: 'NAME#COLUMN#1',
              }
            ]
          }
        ]
      }
    ]
  };

  constructor() {
    this.dataModel = new BuilderModel().setData(this.data);
    this._builders = new Map<string, BuilderModel>();
    this._builders.set(this.dataModel.id,this.dataModel);
  }

  public addColumn(key:string,column:ColumnModel){
  }

  public builder(key : string): BuilderModel{
    return this.builders.get('ID#BUILDER#1');
  }

  get builders(): Map<string, BuilderModel> {
    return this._builders;
  }

  set builders(value: Map<string, BuilderModel>) {
    this._builders = value;
  }
}
