'use strict'

$(document).ready(getGeoLoc);

var map;
var infowindow;
var clientLocation;

function getGeoLoc(data) {
  $.ajax({
    method: "POST",
    url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyC_2WXrXlP9hst8Pnv9bQtL0zrbZq_zqK0"
  }).done(function(geoloc) {
    var lat = geoloc.location.lat;
    var lng = geoloc.location.lng;
    var coords = {lat: lat, lng: lng}
    console.log(coords);
    initMap(coords);
  });
}

function initMap(someCoords) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: someCoords, //{lat: -33.867, lng: 151.195},
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

    // Add a basic style for geo data.
    map.data.setStyle(function(feature) {
      var mag = Math.exp(parseFloat(feature.getProperty('mag'))) * 0.1;
      return /** @type {google.maps.Data.StyleOptions} */({
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: mag,
          fillColor: '#f00',
          fillOpacity: 0.35,
          strokeWeight: 0
        }
      });
    });

  infowindow = new google.maps.InfoWindow();

  // // Create the search box and link it to the UI element.
  //  var input = document.getElementById('pac-input');
  //  var searchBox = new google.maps.places.SearchBox(input);
  //  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

   // Bias the SearchBox results towards current map's viewport.
  //  map.addListener('bounds_changed', function() {
  //    searchBox.setBounds(map.getBounds());
  //  });

   var script = document.createElement('script');
   script.setAttribute('src',
     'https://storage.googleapis.com/maps-devrel/quakes.geo.json');
   document.getElementsByTagName('head')[0].appendChild(script);
}

// Defines the callback function referenced in the jsonp file.
function eqfeed_callback(data) {
  map.data.addGeoJson(data);
  console.log('EQ FEED GEOJSON DATA: ',data);
}

// function callback(results, status) {
//   console.log('debug - callback');
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       console.log(results[i]);
//       createMarker(results[0]);
//     }
//   }
// }

// function queryInput(query) {
//   console.log(query);
//   var service = new google.maps.places.PlacesService(map);
//   service.textSearch({
//     location: {lat: -33.867, lng: 151.195},
//     radius: 500,
//     query: query,
//   }, callback);
//   return false;
//
// }
//
// function createMarker(place) {
//   var placeLoc = place.geometry.location;
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

  // google.maps.event.addListener(marker, 'click', function() {
  //   infowindow.setContent(place.name);
  //   infowindow.open(map, this);
  // });
//}
