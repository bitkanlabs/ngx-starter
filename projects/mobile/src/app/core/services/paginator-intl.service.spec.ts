import { inject, TestBed } from '@angular/core/testing';

import { PaginatorIntlService } from './paginator-intl.service';

describe('PaginatorIntlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginatorIntlService],
    });
  });

  it('should be created', inject([PaginatorIntlService], (service: PaginatorIntlService) => {
    expect(service).toBeTruthy();
  }));
});
