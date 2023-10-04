import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from 'src/app/models';
import { ReposService } from 'src/app/services/repos.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
})
export class RepoListComponent {
  items$: Observable<Repo[]> = this.reposService.getItems();
  totalCount$: Observable<number> = this.reposService.getTotalCount();

  constructor(private reposService: ReposService) {}
}
