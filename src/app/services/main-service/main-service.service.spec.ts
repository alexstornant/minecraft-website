import { TestBed } from '@angular/core/testing';

import { MainServiceService } from './main-service.service';

describe('MainContentServiceService', () => {
  let service: MainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
