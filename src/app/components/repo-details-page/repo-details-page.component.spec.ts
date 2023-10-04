import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { RepoDetailsService } from 'src/app/services/repo-details.service';
import { RepoDetailsPageComponent } from './repo-details-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RepoDetailsPageComponent', () => {
  let component: RepoDetailsPageComponent;
  let fixture: ComponentFixture<RepoDetailsPageComponent>;

  const mostRepoDetailsService: Partial<RepoDetailsService> = {
    getRepoIssues: () => of(),
    getRepoDetails: () => of(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoDetailsPageComponent],
      providers: [
        { provide: RepoDetailsService, useValue: mostRepoDetailsService },
      ],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(RepoDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
