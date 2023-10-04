import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, filter } from 'rxjs';
import { Repo } from '../models/Repo.model';
import { ReposDto } from '../models/ReposDto.model';
import { REPOSITORIES_URL } from '../util/constants';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  private results = new Subject<ReposDto>();

  // TODO handle paging

  constructor(private http: HttpClient, private router: Router) {
    // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe( r=> {
    //   console.log(r);
    // })
  }

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
