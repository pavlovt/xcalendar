import { Component, Input } from '@angular/core';

@Component({
  selector: 'xcalendar',
  templateUrl: './xcalendar.component.html',
  // styleUrls: ['./xcalendar.component.css']
})
export class XCalendarComponent {

  @Input() lang? = 'en';
}
