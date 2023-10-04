import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: SearchService;

  const mockQueryParamMap = new Subject<ParamMap>();

  const mockActivatedRoute: Partial<ActivatedRoute> = {
    queryParamMap: mockQueryParamMap.asObservable(),
  };

  const mockSearchService: Partial<SearchService> = {
    search: () => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: SearchService, useValue: mockSearchService },
      ],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    searchService = TestBed.inject(SearchService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call SearchService on submission', () => {
    const searchServiceSpy = spyOn(searchService, 'search');
    expect(searchServiceSpy).not.toHaveBeenCalled();
    component.searchTerm = 'something';

    component.onSubmitSearch(new Event('event'));

    expect(searchServiceSpy).toHaveBeenCalledTimes(1);
    expect(searchServiceSpy).toHaveBeenCalledWith(component.searchTerm);
  });

  it('should set searchTerm based on query params', () => {
    const oldSearchTerm = 'oldValue';
    component.searchTerm = oldSearchTerm;
    const newSearchTerm = 'newValue';

    mockQueryParamMap.next(convertToParamMap({ q: newSearchTerm }));

    expect(component.searchTerm).not.toBe(oldSearchTerm);
    expect(component.searchTerm).toBe(newSearchTerm);
  });

  it('should render searchTerm value to input field', () => {
    const newSearchTerm = 'newValue';
    component.searchTerm = newSearchTerm;

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const debugElement = fixture.debugElement.query(By.css('#searchTerm'));
      expect(debugElement.nativeElement.value).toBe(newSearchTerm);
    });
  });
});
