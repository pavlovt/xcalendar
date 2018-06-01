import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class TimeService {

  constructor() { }

  public generateHourLabels(initHour: number = 0, format: string = 'HH:mm'): Array<string> {
    const hour = moment().hour(initHour).minutes(0);
    const hourLabels = [];

    hourLabels.push(hour.format(format));

    for (let i = 0; i < 23; i++) {
      hourLabels.push(hour.add(1, 'h').format(format));
    }

    return hourLabels;
  }
}
