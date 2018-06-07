import { Component, OnInit, Input, Inject } from '@angular/core';
import { TimeService } from '../../services/time.service';
import { CoreService } from '../../services/core.service';
import { conf, AppConf } from '../../services/conf';
import * as moment from 'moment';

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() allData = [];
  data = [];
  hours = [];
  selectedDay = new Date();
  constructor(
    private timeService: TimeService,
    private core: CoreService,
    @Inject(conf) private conf: any
  ) {
    this.hours = this.timeService.generateHourLabels(0);
  }

  ngOnInit() {
    const date = moment(this.selectedDay).format(this.conf.dateFormat)
    // get the data for this day
    this.data = this.allData.filter(v => moment(v.startTime).format(this.conf.dateFormat) === date)
    console.log(this.data)
  }

}
