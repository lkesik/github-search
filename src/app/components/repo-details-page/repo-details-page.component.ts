import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Issue } from 'src/app/models';
import { Repo } from 'src/app/models/Repo.model';
import { RepoDetailsService } from 'src/app/services/repo-details.service';

@Component({
  selector: 'app-repo-details-page',
  templateUrl: './repo-details-page.component.html',
  styleUrls: ['./repo-details-page.component.scss'],
})
export class RepoDetailsPageComponent {
  issues$: Observable<Issue[]>;
  repo$: Observable<Repo>;
  repoFullName: string;

  constructor(
    private repoDetailsService: RepoDetailsService,
    private route: ActivatedRoute
  ) {
    this.repoFullName = `${this.route.snapshot.params['author']}/${this.route.snapshot.params['repo']}`;

    this.issues$ = this.repoDetailsService.getRepoIssues(this.repoFullName);
    this.repo$ = this.repoDetailsService.getRepoDetails(this.repoFullName);
  }
}
