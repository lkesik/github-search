import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoDetailsPageComponent } from './components/repo-details-page/repo-details-page.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';

const routes: Routes = [
  {path: ':author/:repo', component: RepoDetailsPageComponent},
  {path: '', component: RepoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
