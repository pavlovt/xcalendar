import { Component, OnInit, Input, Inject } from '@angular/core';
import { TimeService } from '../../services/time.service';
import { CoreService } from '../../services/core.service';
import { conf, AppConf } from '../../services/conf';
import * as moment from 'moment';
console.log(CoreService)
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

  startToPx(jsdate) {
    const start = moment(jsdate).format('YYYY-MM-DD 00:00:00')
    console.log(start, moment(jsdate).format('YYYY-MM-DD HH:mm:ss'), moment(jsdate).diff(moment(start)), parseInt(moment(jsdate).diff(moment(start))/1000/60*(this.conf.pxPerHour/60), 10))
    // return the diff in minutes
    return parseInt(moment(jsdate).diff(moment(start))/1000/60*(this.conf.pxPerHour/60), 10);
  }

  lenToPx(item) {
    let start = moment(item.startDate),
        end = moment(item.endDate);
        console.log(start.format('HH:mm'), end.format('HH:mm'), moment(end).diff(moment(start)))
    // the event is longer than one day
    // then let its' height be until the end of today
    if (end.date() != start.date()) end = moment(moment(item.startDate).format('YYYY-MM-DD 23:59:59'))
    // return the diff in minutes
    return parseInt(moment(end).diff(moment(start))/1000/60*(this.conf.pxPerHour/60), 10);
  }
}
