import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RepoDetailsService } from './repo-details.service';

describe('RepoDetailsService', () => {
  let service: RepoDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RepoDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
