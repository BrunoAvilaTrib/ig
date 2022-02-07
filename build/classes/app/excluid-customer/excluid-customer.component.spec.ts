import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluidCustomerComponent } from './excluid-customer.component';

describe('ExcluidCustomerComponent', () => {
  let component: ExcluidCustomerComponent;
  let fixture: ComponentFixture<ExcluidCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluidCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluidCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
