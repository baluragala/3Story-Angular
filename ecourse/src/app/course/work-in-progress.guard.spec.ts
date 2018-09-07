import { TestBed, async, inject } from '@angular/core/testing';

import { WorkInProgressGuard } from './work-in-progress.guard';

describe('WorkInProgressGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkInProgressGuard]
    });
  });

  it('should ...', inject([WorkInProgressGuard], (guard: WorkInProgressGuard) => {
    expect(guard).toBeTruthy();
  }));
});
