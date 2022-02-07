import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassignChatsComponent } from './reassign-chats.component';

describe('ReassignChatsComponent', () => {
  let component: ReassignChatsComponent;
  let fixture: ComponentFixture<ReassignChatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReassignChatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReassignChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
