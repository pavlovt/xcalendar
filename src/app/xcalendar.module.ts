import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XCalendarComponent } from '../components/xcalendar/xcalendar.component';
import { PeriodComponent } from '../components/period/period.component';
import { DayComponent } from '../components/day/day.component';
import { MonthComponent } from '../components/month/month.component';
import { WeekComponent } from '../components/week/week.component';

@NgModule({
  declarations: [
    XCalendarComponent,
    PeriodComponent,
    WeekComponent,
    MonthComponent,
    DayComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [XCalendarComponent]
})
export class XCalendarModule { }