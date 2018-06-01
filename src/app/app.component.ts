import { Component } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [];
  constructor(appointments: AppointmentService) {
  	this.data = appointments.getData()
  }
}
