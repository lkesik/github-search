import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/models/Repo.model';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss'],
})
export class RepoItemComponent {
  @Input() name: string = 'mapbox/mapbox-gl-js';
  @Input() description: string =
    'Interactive, thoroughly customizable maps in the browser, powered by vector tiles and WebGL';
  @Input() tags: string[] = ['javascript', 'map'];
  @Input() language: string = 'JavaScript';
  @Input() stars: number = 150000;
  @Input() lastUpdated: string = '2023-10-03T16:41:36Z';
}
