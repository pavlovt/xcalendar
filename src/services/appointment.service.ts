import { Injectable, Inject } from '@angular/core';
import * as moment from 'moment';
declare var chance;

@Injectable()
export class AppointmentService {
	data = []
  constructor() {}

  getData() {
  	let min;
  	return this.range(0, 50, 1).map(v => {
  		min = chance.date({min: moment().add(-15, 'days').toDate(), max: moment().add(15, 'days').toDate()})
  		return {
  			title: chance.sentence(),
  			assigned: chance.name(),
  			startDate: min,
  			endDate: chance.date({min: min, max: moment(min).add(1, 'hours').toDate()}),
  		};
  	})
  }

  range(start, stop, step) {
	    var a = [start];
	    while (start < stop) {
	        start += step || 1;
	        a.push(start);
	    }
	    return a;
	}

}
