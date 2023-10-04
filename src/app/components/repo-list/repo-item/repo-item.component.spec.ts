import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoItemComponent } from './repo-item.component';
import { NiceNumberPipe } from 'src/app/pipes/nice-number.pipe';

describe('RepoItemComponent', () => {
  let component: RepoItemComponent;
  let fixture: ComponentFixture<RepoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoItemComponent, NiceNumberPipe]
    });
    fixture = TestBed.createComponent(RepoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
