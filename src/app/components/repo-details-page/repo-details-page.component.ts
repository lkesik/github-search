import { Component, OnInit } from '@angular/core';
import { RepoDetailsService } from 'src/app/services/repo-details.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Repo } from 'src/app/models/Repo.model';

@Component({
  selector: 'app-repo-details-page',
  templateUrl: './repo-details-page.component.html',
  styleUrls: ['./repo-details-page.component.scss'],
})
export class RepoDetailsPageComponent {
  issues$: Observable<any>; // TODO create model interface for issues
  repo$: Observable<Repo>;
  repoFullName: string;

  constructor(
    private repoDetailsService: RepoDetailsService,
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot);
    this.repoFullName = `${this.route.snapshot.params['author']}/${this.route.snapshot.params['repo']}`;

    this.issues$ = this.repoDetailsService.fetchRepoIssues(this.repoFullName);
    this.repo$ = this.repoDetailsService.fetchRepoDetails(this.repoFullName);
  }
}
