import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XCalendarComponent } from '../components/xcalendar/xcalendar.component';
import { DayComponent } from '../components/day/day.component';
import { MonthComponent } from '../components/month/month.component';
import { WeekComponent } from '../components/week/week.component';
import { WeeklyRowsComponent } from '../components/week/components/weekly-rows/weekly-rows.component';
import { WeeklyRowComponent } from '../components/week/components/weekly-row/weekly-row.component';

import { LangService } from '../services/lang.service';
import { TimeService } from '../services/time.service';
import { CoreService } from '../services/core.service';
import { conf, AppConf } from '../services/conf';
import { TranslatePipe } from '../services/lang.pipe';
import { DatePipe } from '../services/date.pipe';

@NgModule({
  declarations: [
    XCalendarComponent,
    WeekComponent,
    MonthComponent,
    DayComponent,
    TranslatePipe,
    DatePipe,
    WeeklyRowsComponent,
    WeeklyRowComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LangService,
    { provide: conf, useValue: AppConf },
    TimeService,
    CoreService,
  ],
  exports: [XCalendarComponent]
})
export class XCalendarModule { }
