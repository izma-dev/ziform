import { Component, OnInit, ViewChild, ViewContainerRef, ChangeDetectorRef, Inject, ComponentFactoryResolver, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Action } from '../shared/models/action.model';


export abstract  class BaseComponent<P,C> implements AfterViewInit, OnDestroy{
 
  protected dataModel : P;
  protected factory : any;
  protected componentRef:any;
  protected _editEvent : Subject<Action> = new Subject();


  protected get editEvent(): Observable<Action> {
    return this._editEvent.asObservable();
  }

  @ViewChild('root', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef;

  /**
   * 
   * @param component 
   */
  protected setComponentRef(component : any){
    this.componentRef = component;
  }

  /**
   * Set the Component Data
   * @param dataModel 
   */
  protected setData(dataModel :P){
    this.dataModel = dataModel;
    this.draw();
  }

  /**
   * Create a Child
   * @param child 
   */
  private insertChild(child  : C){
    let vcr = this.viewContainerRef;
    let component = this.factory.create(vcr.injector);
    component.instance.setComponentRef(component);
    component.instance.setData(child);
    component.instance.editEvent.subscribe(
      v => {this.treatEvent(v)}
    );
    vcr.insert(component.hostView);
  }

  /**
   * Create an array of children 
   * @param data 
   */
  private insertChildren(data : C [] ){
    data.forEach(function(value, key) {
      this.insertChild(value)
    },this);
  }

  /**
   * Create Sections
   * To add children dynamically we should detach changeDetectorRef
   */
  protected buildView(data : C [] ) {
    this.changeDetectorRef.detach();
    this.insertChildren(data);
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Destroy selected 
   */
  destroyComponent() {
    this.componentRef.destroy();
  }

  /**
   * Treat a recepted action from child
   * @param action 
   */
  abstract treatEvent(aaction : Action)

  /**
   * Re Draw The Component Children
   */
  abstract draw()

  /**
   * Constructor 
   */
  constructor(protected changeDetectorRef: ChangeDetectorRef) {
        
  }

  ngAfterViewInit(): void {
    // Default Implementation
  }
   
  ngOnDestroy(): void {
      if (this.changeDetectorRef) {
        this.changeDetectorRef.detach();
      }
    }
  
}
