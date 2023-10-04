import { Component } from '@angular/core';
import { Repo } from 'src/app/models/Repo.model';
import { ReposService } from 'src/app/services/repos.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
})
export class RepoListComponent {
  items: Observable<Repo[]> = this.reposService.getItems();
  totalCount: Observable<number> = this.reposService.getTotalCount();

  constructor(private reposService: ReposService) {}
}
