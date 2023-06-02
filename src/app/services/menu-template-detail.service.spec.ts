import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MenuTemplateDetailService } from './menu-template-detail.service';

describe('MenuTemplateDetailService', () => {
  let service: MenuTemplateDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MenuTemplateDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
