import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StructurorComponent } from './structuror.component';


describe('BuilderComponent', () => {
  let component: StructurorComponent;
  let fixture: ComponentFixture<StructurorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructurorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructurorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
