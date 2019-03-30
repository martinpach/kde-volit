import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './containers/candidates/candidates.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { VotingPlaceComponent } from './components/voting-place/voting-place.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartiesComponent } from './containers/parties/parties.component';
import { PartyComponent } from './components/party/party.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    HomePageComponent,
    VotingPlaceComponent,
    CandidateComponent,
    PartiesComponent,
    PartyComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
