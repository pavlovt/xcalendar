import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {
  @Input() selectedPeriod: string;
  constructor() {
  }

  ngOnInit() {
  }

}
