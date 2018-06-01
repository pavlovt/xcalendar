import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weekly-rows',
  templateUrl: './weekly-rows.component.html',
  styleUrls: ['./weekly-rows.component.scss']
})
export class WeeklyRowsComponent implements OnInit {
  @Input() hourLabelValues: Array<string>;
  public rows = new Array(24);

  constructor() { }

  ngOnInit() {
  }

}
