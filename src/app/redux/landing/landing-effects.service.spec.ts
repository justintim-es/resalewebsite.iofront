import { TestBed } from '@angular/core/testing';

import { LandingEffectsService } from './landing-effects.service';

describe('LandingEffectsService', () => {
  let service: LandingEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
