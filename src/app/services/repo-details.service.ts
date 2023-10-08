import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue, Repo } from '../models';
import { ISSUES_URL_SUFFIX, REPO_DETAILS_URL } from '../util/constants';

@Injectable({
  providedIn: 'root',
})
export class RepoDetailsService {
  constructor(private http: HttpClient) {}

  getRepoDetails(repoName: string): Observable<Repo> {
    return this.http.get<Repo>(`${REPO_DETAILS_URL}/${repoName}`);
  }

  getRepoIssues(repoName: string): Observable<Issue[]> {
    return this.http.get<Issue[]>(
      `${REPO_DETAILS_URL}/${repoName}${ISSUES_URL_SUFFIX}`
    );
  }
}
