import { TestBed } from '@angular/core/testing';

import { BadgeToastService } from './badge-toast.service';

describe('BadgeToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BadgeToastService = TestBed.get(BadgeToastService);
    expect(service).toBeTruthy();
  });
});
