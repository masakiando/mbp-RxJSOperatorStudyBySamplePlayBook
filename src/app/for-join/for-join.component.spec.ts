import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForJoinComponent } from './for-join.component';

describe('ForJoinComponent', () => {
  let component: ForJoinComponent;
  let fixture: ComponentFixture<ForJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
