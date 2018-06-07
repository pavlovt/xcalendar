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
  		// min = moment(moment().format('YYYY-MM-DD 00:00:00')).add(30 * i, 'minutes').toDate()
  		return {
  			id: i+1,
  			title: chance.sentence(),
  			assigned: chance.name(),
  			startDate: min,
  			endDate: moment(min).add(1, 'hours').toDate(), //chance.date({min: min, max: moment(min).add(1, 'hours').toDate()}),
  		};
  	}).sort((a,b) => a.startDate.getTime() - b.startDate.getTime())
  	// calc the overlaping appointments
  	res.forEach((v:any) => {
  		v.overlap = res.filter((vv:any) => {
  			return !(v.endDate.getTime() <= vv.startDate.getTime() || v.startDate.getTime() >= vv.endDate.getTime());
  		}).map(vv => vv.id);
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
