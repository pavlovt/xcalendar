import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
  public daysOfTheWeek = [];
  constructor() {
    this.daysOfTheWeek = new Array(7);
  }

  ngOnInit() {
  }

}
