import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, map, filter, takeUntil } from 'rxjs';
import { Repo } from '../models/Repo.model';
import { ReposDto } from '../models/ReposDto.model';
import { REPOSITORIES_URL } from '../util/constants';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ReposService implements OnDestroy {
  private destroy$ = new Subject<void>();
  private results = new Subject<ReposDto>();

  // TODO handle paging

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((queryParams) => {
        if (queryParams.has('q')) {
          const searchTerm = queryParams.get('q') || '';
          this.loadReposFromSearch(searchTerm);
        }
      });
  }

  getItems(): Observable<Repo[]> {
    return this.results.pipe(map((result) => result.items));
  }

  getTotalCount(): Observable<number> {
    return this.results.pipe(map((result) => result.total_count));
  }

  loadReposFromSearch(searchTerm: string): void {
    if (!searchTerm) {
      return;
    }

    this.http
      .get<ReposDto>(`${REPOSITORIES_URL}?q=${searchTerm}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((d) => {
        this.results.next(d);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
