import { Injectable, Inject } from '@angular/core';
import { conf, AppConf } from './conf';
import * as moment from 'moment';

@Injectable()
export class CoreService {
  constructor(@Inject(conf) private conf: any) {}

  // find the top position of this date comparing with the start of the day
  startToPx(jsdate) {
    const start = moment(jsdate).format('YYYY-MM-DD 00:00:00')
    // console.log(start, moment(jsdate).format('YYYY-MM-DD HH:mm:ss'), parseInt(moment(jsdate).diff(moment(start))/1000/60*(this.conf.pxPerHour/60), 10))
    // return the diff in minutes
    const z: any = moment(jsdate).diff(moment(start))/1000/60*(this.conf.pxPerHour/60);
    return parseInt(z, 10);
  }

  lenToPx(item) {
    let start = moment(item.startDate),
        end = moment(item.endDate);
        // console.log(start.format('HH:mm'), end.format('HH:mm'), moment(end).diff(moment(start)))
    // the event is longer than one day
    // then let its' height be until the end of today
    if (end.date() != start.date()) end = moment(moment(item.startDate).format('YYYY-MM-DD 23:59:59'))
    // return the diff in minutes
    const z: any = moment(end).diff(moment(start))/1000/60*(this.conf.pxPerHour/60);
    return parseInt(z, 10);
  }

}
