import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Repo } from '../models/Repo.model';
import { ReposDto } from '../models/ReposDto.model';
import { REPOSITORIES_URL } from '../util/constants';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  private results = new Subject<ReposDto>();

  // TODO handle paging

  constructor(private http: HttpClient) {}

  getItems(): Observable<Repo[]> {
    return this.results.pipe(map((result) => result.items));
  }

  getTotalCount(): Observable<number> {
    return this.results.pipe(map((result) => result.total_count));
  }

  // TODO handle if searchterm already loaded
  loadReposFromSearch(searchTerm: string): void {
    // TODO export to constants or config file
    if (!searchTerm) {
      return;
    }

    this.http
      .get<ReposDto>(`${REPOSITORIES_URL}?q=${searchTerm}`)
      .subscribe((d) => {
        this.results.next(d);
      });
  }
}
