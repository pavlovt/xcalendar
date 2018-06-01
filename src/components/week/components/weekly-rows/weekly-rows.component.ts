import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weekly-rows',
  templateUrl: './weekly-rows.component.html',
  styleUrls: ['./weekly-rows.component.scss']
})
export class WeeklyRowsComponent implements OnInit {
  public rows = new Array(24);

  constructor() { }

  ngOnInit() {
  }

}
