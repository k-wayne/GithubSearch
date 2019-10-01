import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from '../components/github/github.component';
import { SearchComponent } from '../components/search/search.component';

const routes: Routes = [
  { path: 'goals', component: GithubComponent },
  { path: 'about', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }