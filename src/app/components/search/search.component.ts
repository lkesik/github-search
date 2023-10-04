import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  searchTerm: string = '';
  private destroy$ = new Subject<void>();

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {
    this.route.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((queryParams) => {
        if (queryParams.has('q')) {
          this.searchTerm = queryParams.get('q') || '';
        }
      });
  }

  onSubmitSearch(e: Event) {
    e.preventDefault();
    this.searchService.search(this.searchTerm);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
