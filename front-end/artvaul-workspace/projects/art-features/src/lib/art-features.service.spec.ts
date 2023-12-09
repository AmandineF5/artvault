import { TestBed } from '@angular/core/testing';

import { ArtFeaturesService } from './art-features.service';

describe('ArtFeaturesService', () => {
  let service: ArtFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
