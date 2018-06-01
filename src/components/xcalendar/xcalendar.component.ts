import { Component, Input, Inject, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { conf, AppConf } from '../../services/conf';
import langs from '../../langs';

@Component({
  selector: 'xcalendar',
  templateUrl: './xcalendar.component.html',
  // styleUrls: ['./xcalendar.component.css']
})
export class XCalendarComponent implements OnInit {
  @Input() lang ? = 'en';
  @Input() dayWeekInitHour = 0;

  public selectedPeriod = 'w';

  constructor(lang: LangService, @Inject(conf) private config: any) {
  }

  ngOnInit() {
    this.config.lang = this.lang;
  }

  public switchPeriod(periodId: string): void {
    this.selectedPeriod = periodId;
  }
}
