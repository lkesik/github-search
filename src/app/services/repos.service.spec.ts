import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ReposService } from './repos.service';
import { of } from 'rxjs';

const mockActivatedRoute: Partial<ActivatedRoute> = {
  queryParamMap: of(convertToParamMap({ q: 'test/repo' })),
};

describe('ReposService', () => {
  let service: ReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    });
    service = TestBed.inject(ReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
