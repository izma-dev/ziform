
import {SectionModel} from "./section.model";

export class BuilderModel {
  private _id : string;
  private _name : string;
  private _sections : SectionModel[] = [];

  constructor(){

  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get sections(): Array<SectionModel> {
    return this._sections;
  }

  public set sections(value: Array<SectionModel>) {
    this._sections = value;
  }

  public addSection(value : SectionModel) : number{
    return this._sections.push(value)
  }

  public setData(data : any) : BuilderModel{
    this._id = data.id;
    this._name = data.name;
    for (let i = 0; i < data.sections.length; i++) {
      this._sections.push((new SectionModel()).setData(data.sections[i]));
    };
    return this;
  }
}
