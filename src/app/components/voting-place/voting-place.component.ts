import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-voting-place',
  templateUrl: './voting-place.component.html',
  styleUrls: ['./voting-place.component.scss']
})
export class VotingPlaceComponent implements OnInit {
  place: string;
  // implement current location
  latitude = 48.716196;
  longitude = 21.256138;

  markers = [
  ]

  addMarker(lat: number, lng: number, label: string) {
    this.markers.push({ lat, lng, alpha: 1 ,label });
  }


  constructor(private route: ActivatedRoute, private http: HttpClient, private db:DatabaseService ) {
    this.place = route.snapshot.params['id'];

    if (!this.place) {
    	this.db.getData().subscribe(data => {
    		console.log(data);
    	});
    } else {
    	this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.place}&key=AIzaSyDlzcFXYOdt4VRj3jc8YoZUAt9WmCDrfZI`).subscribe(data => {
	    	var lat = data.results[0].geometry.location.lat;
	    	var lon = data.results[0].geometry.location.lng;
	    	this.addMarker(lat, lon, this.place);
	    });
    } 
  }

  ngOnInit() {}
}
