import { Injectable } from '@angular/core';
import {ColumnModel} from "../models/column.model";
import { StructurorModel } from '../models/structuror.model';
import { BuilderModel } from '../models/builder.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _structurors : Map<string,StructurorModel>;
  private initData : any = {
    id: 'ID#BUILDER#INIT',
    name: 'ID#BUILDER#INIT',
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
            }
          ]
        }
      ]
    }]
  };
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
    let dataModel = new StructurorModel().setData(this.data);
    let dataInitModel = new StructurorModel().setData(this.initData);

    this._structurors = new Map<string, StructurorModel>();
    this._structurors.set(dataModel.id,dataModel);
    this._structurors.set(dataInitModel.id,dataInitModel);
  }

  public addColumn(key:string,column:ColumnModel){
  }

  public structuror(key : string): StructurorModel{
    return this.structurors.get(key);
  }

  public builder(key : string): BuilderModel{
    return new BuilderModel().setData(this.data);;
  }

  get structurors(): Map<string, StructurorModel> {
    return this._structurors;
  }

  set structurors(value: Map<string, StructurorModel>) {
    this._structurors = value;
  }
}
