import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxDropDownModule, IgxGridModule, IgxActionStripModule } from '@infragistics/igniteui-angular';
import { MMMenuTemplatesComponent } from './mm-menu-templates.component';

describe('MMMenuTemplatesComponent', () => {
  let component: MMMenuTemplatesComponent;
  let fixture: ComponentFixture<MMMenuTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MMMenuTemplatesComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxDropDownModule, IgxGridModule, IgxActionStripModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MMMenuTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
