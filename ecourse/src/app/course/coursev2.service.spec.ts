import { TestBed, inject } from '@angular/core/testing';

import { Coursev2Service } from './coursev2.service';

describe('Coursev2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Coursev2Service]
    });
  });

  it('should be created', inject([Coursev2Service], (service: Coursev2Service) => {
    expect(service).toBeTruthy();
  }));
});
