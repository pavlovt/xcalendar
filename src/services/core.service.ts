import { Injectable, Inject } from '@angular/core';
import { conf, AppConf } from './conf';
import * as moment from 'moment';

@Injectable()
export class CoreService {
  constructor(@Inject(conf) private conf: any) {}

  // find the top position of this date comparing with the start of the day
  timeToPx(jsdate) {
  	const start = moment(jsdate).format('YYYY-MM-DD 00:00:00')
  	// return the diff in minutes
  	return moment(jsdate).diff(moment(start))/1000/60*(this.conf.pxPerHour/60);
  }
}
