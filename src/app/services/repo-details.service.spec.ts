import { TestBed } from '@angular/core/testing';

import { RepoDetailsService } from './repo-details.service';

describe('RepoDetailsService', () => {
  let service: RepoDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
