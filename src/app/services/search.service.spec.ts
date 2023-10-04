import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('SearchService', () => {
  let service: SearchService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(SearchService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('search() should call router navigation', () => {
    const routerSpy = spyOn(router, 'navigate');
    expect(routerSpy).not.toHaveBeenCalled();
    const searchTerm = 'something';

    service.search(searchTerm);

    expect(routerSpy).toHaveBeenCalledTimes(1);
    expect(routerSpy).toHaveBeenCalledWith(['/'], {queryParams: {q: searchTerm}});
  });
});
