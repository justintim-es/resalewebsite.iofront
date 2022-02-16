import { TestBed } from '@angular/core/testing';

import { BuyWebsiteEffectsService } from './buy-website-effects.service';

describe('BuyWebsiteEffectsService', () => {
  let service: BuyWebsiteEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyWebsiteEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
