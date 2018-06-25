import { inject, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { I18nService } from './i18n.service';

describe('I18nService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports  : [TranslateModule.forRoot()],
      providers: [I18nService],
    });
  });

  it('should be created', inject([I18nService], (service: I18nService) => {
    expect(service).toBeTruthy();
  }));
});
