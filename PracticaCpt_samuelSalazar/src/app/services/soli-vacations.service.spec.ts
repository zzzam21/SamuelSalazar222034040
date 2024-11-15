import { TestBed } from '@angular/core/testing';

import { SoliVacationsService } from './soli-vacations.service';

describe('SoliVacationsService', () => {
  let service: SoliVacationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoliVacationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
