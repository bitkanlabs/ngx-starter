import { inject, TestBed } from '@angular/core/testing';

import { UserAccessProvider } from './user-access.provider';

describe('UserAccessProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAccessProvider],
    });
  });

  it('should be created', inject([UserAccessProvider], (service: UserAccessProvider) => {
    expect(service).toBeTruthy();
  }));
});
