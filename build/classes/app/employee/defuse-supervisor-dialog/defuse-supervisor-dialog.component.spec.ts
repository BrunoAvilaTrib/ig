import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefuseSupervisorDialogComponent } from './defuse-supervisor-dialog.component';

describe('DefuseSupervisorDialogComponent', () => {
  let component: DefuseSupervisorDialogComponent;
  let fixture: ComponentFixture<DefuseSupervisorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefuseSupervisorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefuseSupervisorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
