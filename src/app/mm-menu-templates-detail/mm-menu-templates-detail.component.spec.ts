import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxDropDownModule, IgxTabsModule, IgxGridModule, IgxActionStripModule } from '@infragistics/igniteui-angular';
import { MMMenuTemplatesDetailComponent } from './mm-menu-templates-detail.component';

describe('MMMenuTemplatesDetailComponent', () => {
  let component: MMMenuTemplatesDetailComponent;
  let fixture: ComponentFixture<MMMenuTemplatesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MMMenuTemplatesDetailComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxDropDownModule, IgxTabsModule, IgxGridModule, IgxActionStripModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MMMenuTemplatesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
