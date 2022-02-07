import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignChatsModalComponent } from './assign-chats-modal.component';

describe('AssignChatsModalComponent', () => {
  let component: AssignChatsModalComponent;
  let fixture: ComponentFixture<AssignChatsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignChatsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignChatsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
