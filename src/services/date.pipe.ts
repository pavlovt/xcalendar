import { Pipe, PipeTransform, Inject } from '@angular/core';
import { conf, AppConf } from './conf';
import * as moment from 'moment';

@Pipe({
    name: 'date',
    pure: false // add in this line, update value when we change language
})

export class DatePipe implements PipeTransform {

    constructor(@Inject(conf) private conf: any) { }
    // format = datetime | date | hour | custom
    // if format == custom then customFormat is used for the formatting
    // else one of the config date formats are used
    transform(value: string, format: string, customFormat: string): any {
        if (!value) return;
        let fmt = '';
        if (format == 'custom' && customFormat) fmt = customFormat
        else if (this.conf[format + 'Format']) fmt = this.conf[format + 'Format']
        else fmt = this.conf.dateFormat;

        return moment(value).format(fmt);
    }
}