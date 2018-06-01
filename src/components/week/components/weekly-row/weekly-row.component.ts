import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weekly-row',
  templateUrl: './weekly-row.component.html',
  styleUrls: ['./weekly-row.component.scss']
})
export class WeeklyRowComponent implements OnInit {
  @Input() hourLabel: string;
  public days = new Array(7);
  constructor() { }

  ngOnInit() {
  }

}
