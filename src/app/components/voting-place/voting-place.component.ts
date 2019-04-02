/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../../services/database.service';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-voting-place',
  templateUrl: './voting-place.component.html',
  styleUrls: ['./voting-place.component.scss']
})
export class VotingPlaceComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  // implement current location
  latitude = 48.716196;
  longitude = 21.256138;
  markers = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private db: DatabaseService) {
  }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true
    };

    var map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  
    document.getElementById("page-logo-text").style.display = "none";

    // try geolocation
    var infoWindow = new google.maps.InfoWindow({
      disableAutoPan: true
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('Tvoja lokácia.');
        infoWindow.open(map);
        map.setCenter(pos);
    })};
    this.loadMarkers();
    this.map = map;
  }


  loadMarkers() {
    this.route.queryParams.subscribe(({ place }) => {
      if (!place) {
        this.db.getAllPlaces('miestnosti').subscribe((places: any) => {
          places.forEach(p => this.addMarker(p.latlon.lat, p.latlon.lon, p.place));
        });
        navigator.geolocation.getCurrentPosition(
          position => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.latitude;
          },
          console.log,
          { timeout: 300000 }
        );
      } else {
        this.createMarker(place, true);
      }
    });
  }

  createMarker(place, query) {
    // todo implement db
    this.http
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=AIzaSyDlzcFXYOdt4VRj3jc8YoZUAt9WmCDrfZI`)
      .subscribe((data: any) => {
        var lat = data.results[0].geometry.location.lat;
        var lon = data.results[0].geometry.location.lng;
        this.addMarker(lat, lon, place);
        this.map.setCenter(new google.maps.LatLng(lat, lon));
      });
  }

  addMarker(lat: number, lng: number, label: string) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      // icon size should be 32x32
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/' +
        'full/images/info-i_maps.png',
      map: this.map
    });

    var info = new google.maps.InfoWindow({
      content: label,
      disableAutoPan: true
    })

    info.open(this.map, marker);
    marker.addListener('click', function() {
      window.open(`https://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`);
    });
  }
  
}
