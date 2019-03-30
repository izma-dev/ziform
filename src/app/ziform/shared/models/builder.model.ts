
import { StructurorModel } from "./structuror.model";
import { SectionModel } from "./section.model";
import { BaseModel } from "./base.model";

export class BuilderModel extends BaseModel<any,SectionModel>{
  constructor(){
      super();
  }

  public setData(data : any) : BuilderModel{
    this.id = data.id;
    this.name = data.name;
    this.step = "builder";
    for (let i = 0; i < data.sections.length; i++) {
      data.sections[i].step = this.step;
      this.children.push((new SectionModel()).setData(data.sections[i]));
    }
    return this;
  }
}
