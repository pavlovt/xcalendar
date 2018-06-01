import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyRowsComponent } from './weekly-rows.component';

describe('WeeklyRowsComponent', () => {
  let component: WeeklyRowsComponent;
  let fixture: ComponentFixture<WeeklyRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
