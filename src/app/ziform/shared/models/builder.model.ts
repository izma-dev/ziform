
import {SectionModel} from "./section.model";
import {Subject} from "rxjs/Rx";

export class BuilderModel {
  private _id : string;
  private _name : string;
  private _sections : SectionModel[] = [];
  public dataSubject = new Subject<SectionModel[]>();

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

  public addSection(value : SectionModel) : void{
    this._sections.push(value);
    this.emitDataSubject();
  }

  public emitDataSubject() {
    this.dataSubject.next(this._sections.slice());
  }

  public setData(data : any) : BuilderModel{
    this._id = data.id;
    this._name = data.name;
    for (let i = 0; i < data.sections.length; i++) {
      this._sections.push((new SectionModel()).setData(data.sections[i]));
    }
    return this;
  }
}
