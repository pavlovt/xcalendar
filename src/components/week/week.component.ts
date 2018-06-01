import { Component, OnInit, Input } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
  @Input() initHourValue = 0;
  public daysOfTheWeek = [];
  public hours = [];

  constructor(
    private timeService: TimeService
  ) {
    this.daysOfTheWeek = new Array(7);
    this.hours = this.timeService.generateHourLabels(this.initHourValue);
  }

  ngOnInit() {
    console.log(this.hours);
  }

}
