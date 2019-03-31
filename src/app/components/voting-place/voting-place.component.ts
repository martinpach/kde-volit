import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-voting-place',
  templateUrl: './voting-place.component.html',
  styleUrls: ['./voting-place.component.scss']
})
export class VotingPlaceComponent implements OnInit {
  // implement current location
  latitude = 48.716196;
  longitude = 21.256138;

  markers = [];

  addMarker(lat: number, lng: number, label: string) {
    this.markers.push({ lat, lng, alpha: 1, label });
  }

  constructor(private route: ActivatedRoute, private http: HttpClient, private db: DatabaseService) {
    navigator.geolocation.getCurrentPosition(console.log, console.log, { timeout: 300000 });
    route.queryParams.subscribe(({ place }) => {
      if (!place) {
        this.db.getAllPlaces().subscribe((places: any) => {
          places.forEach(p => this.addMarker(p.latlon.lat, p.latlon.lon, p.place));
        });
      } else {
        this.createMarker(place);
      }
    });
  }

  ngOnInit() {}

  createMarker(place) {
    this.http
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=AIzaSyDlzcFXYOdt4VRj3jc8YoZUAt9WmCDrfZI`)
      .subscribe((data: any) => {
        var lat = data.results[0].geometry.location.lat;
        var lon = data.results[0].geometry.location.lng;
        this.addMarker(lat, lon, place);
      });
  }
}
