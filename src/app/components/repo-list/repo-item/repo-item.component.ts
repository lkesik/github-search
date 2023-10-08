import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/models/Repo.model';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss'],
})
export class RepoItemComponent {
  @Input() name?: string;
  @Input() url?: string;
  @Input() description?: string;
  @Input() tags?: string[];
  @Input() language?: string;
  @Input() stars?: number;
  @Input() lastUpdated?: string;
}
