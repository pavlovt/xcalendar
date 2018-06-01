import { Component, Input, Inject } from '@angular/core';
import { LangService } from '../../services/lang.service'
import { conf, AppConf } from '../../services/conf';
import langs from '../../langs'

@Component({
  selector: 'xcalendar',
  templateUrl: './xcalendar.component.html',
  // styleUrls: ['./xcalendar.component.css']
})
export class XCalendarComponent {
  @Input() lang ? = 'en';

  public selectedPeriod = 'w';

  constructor(lang: LangService, @Inject(conf) private conf: any) {
  }

  ngOnInit() {
  	this.conf.lang = this.lang;
  }

  public switchPeriod(periodId: string): void {
    this.selectedPeriod = periodId;
  }
}
