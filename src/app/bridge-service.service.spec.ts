import { TestBed } from '@angular/core/testing';

import { BridgeServiceService } from './bridge-service.service';

describe('BridgeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BridgeServiceService = TestBed.get(BridgeServiceService);
    expect(service).toBeTruthy();
  });
});
