import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluidCustomerDialogComponent } from './excluid-customer-dialog.component';

describe('ExcluidCustomerDialogComponent', () => {
  let component: ExcluidCustomerDialogComponent;
  let fixture: ComponentFixture<ExcluidCustomerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluidCustomerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluidCustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
