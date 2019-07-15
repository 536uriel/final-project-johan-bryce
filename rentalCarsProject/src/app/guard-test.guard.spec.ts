import { TestBed, async, inject } from '@angular/core/testing';

import { GuardTestGuard } from './guard-test.guard';

describe('GuardTestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardTestGuard]
    });
  });

  it('should ...', inject([GuardTestGuard], (guard: GuardTestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
