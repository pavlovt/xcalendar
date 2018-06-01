import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyRowComponent } from './weekly-row.component';

describe('WeeklyRowComponent', () => {
  let component: WeeklyRowComponent;
  let fixture: ComponentFixture<WeeklyRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
