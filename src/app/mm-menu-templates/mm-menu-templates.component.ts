import { Component, OnInit } from '@angular/core';
import { MenuTemplatesService } from '../services/menu-templates.service';

@Component({
  selector: 'app-mm-menu-templates',
  templateUrl: './mm-menu-templates.component.html',
  styleUrls: ['./mm-menu-templates.component.scss']
})
export class MMMenuTemplatesComponent implements OnInit {
  public textVisible = false;
  public textVisible1 = false;
  public buttonVisible = false;
  public menuTemplatesTable1: any = null;

  constructor(
    private menuTemplatesService: MenuTemplatesService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.menuTemplatesService.getTable1().subscribe(data => this.menuTemplatesTable1 = data);
  }
}
