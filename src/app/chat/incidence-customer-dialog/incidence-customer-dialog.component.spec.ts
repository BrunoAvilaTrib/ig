import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceCustomerDialogComponent } from './incidence-customer-dialog.component';

describe('IncidenceCustomerDialogComponent', () => {
  let component: IncidenceCustomerDialogComponent;
  let fixture: ComponentFixture<IncidenceCustomerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenceCustomerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenceCustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
