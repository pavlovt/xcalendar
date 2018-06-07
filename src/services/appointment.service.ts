import { Injectable, Inject } from '@angular/core';
import * as moment from 'moment';
declare var chance;

@Injectable()
export class AppointmentService {
	data = []
  constructor() {}

  getData(count = 10, start = -3, end = 3) {
  	let min;
  	let res = this.range(0, count, 1).map((v, i) => {
  		min = chance.date({min: moment().add(start, 'days').toDate(), max: moment().add(end, 'days').toDate()})
  		min = moment(moment().format('YYYY-MM-DD 00:00:00')).add(10 * i, 'minutes').toDate()
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

  	res.forEach((v:any) => {
  		res.forEach((vv:any) => {
  			if (this.intersect(v.overlap, vv.overlap).length >  0) v.overlap = v.overlap.concat(vv.overlap).filter(this.unique).sort()
  		})
  	})
		
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

	intersect(a, b) {
	    var t;
	    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
	    return a.filter(function (e) {
	        return b.indexOf(e) > -1;
	    });
	}

	unique(value, index, self) { 
	    return self.indexOf(value) === index;
	}

}
