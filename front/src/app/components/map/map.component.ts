import { Component, Input, OnInit, ViewChild } from '@angular/core';
declare var mapboxgl: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  @ViewChild('map', { static: true }) map: any;

  constructor() { }

  ngOnInit() {
    const lat = Number(4.5489655);
    const lng = Number(-75.6621385);

    mapboxgl.accessToken = 'pk.eyJ1IjoieG5paWNvIiwiYSI6ImNrZzc2a2ExcDA0Z3YyeHFteHRkcDQ3Y3EifQ.3jISGhoH1HaQUnXso9n6Mw';
    var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-75.656693, 4.556198],
    zoom: 17.5,
    pitch: 45,
    bearing: -17.6,
    container: 'map',
    antialias: true
    });
     
    // The 'building' layer in the mapbox-streets vector source contains building-height
    // data from OpenStreetMap.
    map.on('load', function () {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;
     
    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
    labelLayerId = layers[i].id;
    break;
    }
    }
     
    map.addLayer(
    {
    'id': '3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
    'fill-extrusion-color': '#BC4749',
     
    // use an 'interpolate' expression to add a smooth transition effect to the
    // buildings as the user zooms in
    'fill-extrusion-height': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'height']
    ],
    'fill-extrusion-base': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'min_height']
    ],
    'fill-extrusion-opacity': 0.6
    }
    },
    labelLayerId
    );
    });
  }
}