import { Component } from '@angular/core';
import { ReposService } from 'src/app/services/repos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';

  constructor(private reposService: ReposService) {}

  onSubmitSearch(e: Event) {
    e.preventDefault();
    this.reposService.loadReposFromSearch(this.searchTerm);
  }
}
