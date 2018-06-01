import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XCalendarModule } from './xcalendar.module';
import { AppointmentService } from '../services/appointment.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    XCalendarModule,
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
