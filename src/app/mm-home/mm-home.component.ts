import { Component, OnInit } from '@angular/core';
import { CRMAppService } from '../services/crmapp.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-mm-home',
  templateUrl: './mm-home.component.html',
  styleUrls: ['./mm-home.component.scss']
})
export class MMHomeComponent implements OnInit {
  public northwindCustomers: any = null;
  public cRMAppMeetingsTasks: any = null;

  constructor(
    private northwindService: NorthwindService,
    private cRMAppService: CRMAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('CustomersType').subscribe(data => this.northwindCustomers = data);
    this.cRMAppService.getMeetingsTasks().subscribe(data => this.cRMAppMeetingsTasks = data);
  }
}
