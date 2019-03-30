
import {SectionModel} from "./section.model";
import { BaseModel } from "./base.model";

export class StructurorModel extends BaseModel<any,SectionModel>{

  constructor(){
    super()
  }

  public setData(data : any) : StructurorModel{
    this.id = data.id;
    this.name = data.name;
    this.step = "structuror";
    for (let i = 0; i < data.sections.length; i++) {
      data.sections[i].step = this.step;
      this.children.push((new SectionModel()).setData(data.sections[i]));
    }
    return this;
  }
}
