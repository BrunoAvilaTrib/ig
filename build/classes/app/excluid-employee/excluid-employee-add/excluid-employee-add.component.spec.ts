import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluidEmployeeAddComponent } from './excluid-employee-add.component';

describe('ExcluidEmployeeAddComponent', () => {
  let component: ExcluidEmployeeAddComponent;
  let fixture: ComponentFixture<ExcluidEmployeeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluidEmployeeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluidEmployeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
