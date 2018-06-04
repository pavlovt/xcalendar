import { Component, OnInit, Input } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() allData = [];
  hours = [];
  selectedDay = new Date();
  constructor(
    private timeService: TimeService
  ) {
    this.hours = this.timeService.generateHourLabels(0);
  }

  ngOnInit() {
  }

}
