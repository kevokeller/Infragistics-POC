import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxListModule, IgxAvatarModule, IgxGridModule, IgxChipsModule } from '@infragistics/igniteui-angular';
import { MMHomeComponent } from './mm-home.component';

describe('MMHomeComponent', () => {
  let component: MMHomeComponent;
  let fixture: ComponentFixture<MMHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MMHomeComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxListModule, IgxAvatarModule, IgxGridModule, IgxChipsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MMHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
