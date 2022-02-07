import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayermsgComponent } from './layermsg.component';

describe('LayermsgComponent', () => {
  let component: LayermsgComponent;
  let fixture: ComponentFixture<LayermsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayermsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayermsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
