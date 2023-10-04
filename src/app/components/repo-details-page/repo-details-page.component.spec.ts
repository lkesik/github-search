import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailsPageComponent } from './repo-details-page.component';

describe('RepoDetailsPageComponent', () => {
  let component: RepoDetailsPageComponent;
  let fixture: ComponentFixture<RepoDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoDetailsPageComponent]
    });
    fixture = TestBed.createComponent(RepoDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
