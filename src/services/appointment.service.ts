import { Injectable, Inject } from '@angular/core';
import * as moment from 'moment';
declare var chance;

@Injectable()
export class AppointmentService {
	data = []
  constructor() {}

  getData(count = 50, start = -3, end = 3) {
  	let min;
  	let res = this.range(0, count, 1).map((v, i) => {
  		min = chance.date({min: moment().add(start, 'days').toDate(), max: moment().add(end, 'days').toDate()})
  		return {
  			id: i+1,
  			title: chance.sentence(),
  			assigned: chance.name(),
  			startDate: min,
  			endDate: chance.date({min: min, max: moment(min).add(1, 'hours').toDate()}),
  		};
  	})
  	// calc the overlaping appointments
  	res.forEach((v:any) => {
  		v.overlap = res.filter(vv => Math.max(v.startDate, vv.startDate) < Math.min(v.endDate, vv.endDate)).map(vv => vv.id);
  		v.bgcolor = chance.color({format: 'hex'});
  	})
		// console.log(res.filter(v => v.overlap.length > 1))
  	return res;
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
