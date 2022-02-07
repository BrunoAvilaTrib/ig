import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluidEmployeeComponent } from './excluid-employee.component';

describe('ExcluidEmployeeComponent', () => {
  let component: ExcluidEmployeeComponent;
  let fixture: ComponentFixture<ExcluidEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluidEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluidEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
