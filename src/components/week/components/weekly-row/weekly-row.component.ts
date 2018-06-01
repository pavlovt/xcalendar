import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weekly-row',
  templateUrl: './weekly-row.component.html',
  styleUrls: ['./weekly-row.component.scss']
})
export class WeeklyRowComponent implements OnInit {
  public days = new Array(7);
  constructor() { }

  ngOnInit() {
  }

}
