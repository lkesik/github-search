import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { ReposService } from 'src/app/services/repos.service';
import { RepoListComponent } from './repo-list.component';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  const mockReposService: Partial<ReposService> = {
    getItems: () => of(),
    getTotalCount: () => of(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoListComponent],
      providers: [{ provide: ReposService, useValue: mockReposService }],
    });
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
