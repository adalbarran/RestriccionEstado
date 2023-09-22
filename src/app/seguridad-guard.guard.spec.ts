import { TestBed } from '@angular/core/testing';

import { SeguridadGuardGuard } from './seguridad-guard.guard';

describe('SeguridadGuardGuard', () => {
  let guard: SeguridadGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SeguridadGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
