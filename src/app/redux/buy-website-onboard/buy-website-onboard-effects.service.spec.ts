import { TestBed } from '@angular/core/testing';

import { BuyWebsiteOnboardEffectsService } from './buy-website-onboard-effects.service';

describe('BuyWebsiteOnboardEffectsService', () => {
  let service: BuyWebsiteOnboardEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyWebsiteOnboardEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
