import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesComponent } from './containers/candidates/candidates.component';
import { VotingPlaceComponent } from './components/voting-place/voting-place.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PartiesComponent } from './containers/parties/parties.component';

const routes: Routes = [
  { path: 'parties', component: PartiesComponent },
  { path: 'parties/:id/candidates', component: CandidatesComponent },
  { path: 'voting-place/:id', component: VotingPlaceComponent },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
