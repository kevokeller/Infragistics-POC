import { Component, OnInit } from '@angular/core';
import { MenuTemplateDetailService } from '../services/menu-template-detail.service';

@Component({
  selector: 'app-mm-menu-templates-detail',
  templateUrl: './mm-menu-templates-detail.component.html',
  styleUrls: ['./mm-menu-templates-detail.component.scss']
})
export class MMMenuTemplatesDetailComponent implements OnInit {
  public textVisible2 = false;
  public textVisible3 = false;
  public buttonVisible1 = false;
  public menuTemplateDetailTable1: any = null;

  constructor(
    private menuTemplateDetailService: MenuTemplateDetailService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.menuTemplateDetailService.getTable1().subscribe(data => this.menuTemplateDetailTable1 = data);
  }
}
