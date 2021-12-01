import { TestBed } from '@angular/core/testing';

import { DayphotoService } from './dayphoto.service';

describe('DayphotoService', () => {
  let service: DayphotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayphotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
