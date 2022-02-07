import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluidEmployeeUpdateComponent } from './excluid-employee-update.component';

describe('ExcluidEmployeeUpdateComponent', () => {
  let component: ExcluidEmployeeUpdateComponent;
  let fixture: ComponentFixture<ExcluidEmployeeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluidEmployeeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluidEmployeeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
