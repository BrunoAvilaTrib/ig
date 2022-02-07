import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignOptionDialogComponent } from './assign-option-dialog.component';

describe('AssignOptionDialogComponent', () => {
  let component: AssignOptionDialogComponent;
  let fixture: ComponentFixture<AssignOptionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignOptionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignOptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
