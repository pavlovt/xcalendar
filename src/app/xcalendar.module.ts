import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XCalendarComponent } from '../components/xcalendar/xcalendar.component';
import { PeriodComponent } from '../components/period/period.component';
import { DayComponent } from '../components/day/day.component';
import { MonthComponent } from '../components/month/month.component';
import { WeekComponent } from '../components/week/week.component';
import { WeeklyRowsComponent } from '../components/week/components/weekly-rows/weekly-rows.component';
import { WeeklyRowComponent } from '../components/week/components/weekly-row/weekly-row.component';

import { LangService } from '../services/lang.service';
import { conf, AppConf } from '../services/conf';
import { TranslatePipe } from '../services/lang.pipe';

@NgModule({
  declarations: [
    XCalendarComponent,
    PeriodComponent,
    WeekComponent,
    MonthComponent,
    DayComponent,
    TranslatePipe,
    WeeklyRowsComponent,
    WeeklyRowComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LangService,
    { provide: conf, useValue: AppConf }
  ],
  exports: [XCalendarComponent]
})
export class XCalendarModule { }
