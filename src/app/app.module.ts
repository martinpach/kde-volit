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
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormPageComponent } from './components/form-page/form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    HomePageComponent,
    VotingPlaceComponent,
    CandidateComponent,
    PartiesComponent,
    PartyComponent,
    AboutPageComponent,
    HeaderComponent,
    FooterComponent,
    FormPageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlzcFXYOdt4VRj3jc8YoZUAt9WmCDrfZI'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
