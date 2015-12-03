'use strict'

var map;
var infowindow;

function initMap() {
  var pyrmont = {lat: -33.867, lng: 151.195};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 500,
    types: ['store']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

//
// $(document).ready(initMap);
//
// // function init(){
// //   console.log('init.');
//
//   // var promise = $.getJSON("");
//   // promise.success(function(data) {
//   //   console.log('data is: ', data);
//   //
//   // });
//
//   // var map;
//   // var service;
//   // var infowindow;
//   //
//   // function initialize() {
//   //   var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
//   //
//   //   map = new google.maps.Map(document.getElementById('map'), {
//   //       center: pyrmont,
//   //       zoom: 15
//   //     });
//   //
//   //   var request = {
//   //     location: pyrmont,
//   //     radius: '500',
//   //     types: ['store']
//   //   };
//   //
//   //   service = new google.maps.places.PlacesService(map);
//   //   service.nearbySearch(request, callback);
//   // }
//   //
//   // function callback(results, status) {
//   //   if (status == google.maps.places.PlacesServiceStatus.OK) {
//   //     for (var i = 0; i < results.length; i++) {
//   //       var place = results[i];
//   //       createMarker(results[i]);
//   //     }
//   //   }
//   // }
//
//   var map;
//   var infowindow;
//
//   function initMap() {
//     var pyrmont = {lat: -33.867, lng: 151.195};
//
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: pyrmont,
//       zoom: 15
//     });
//
//     infowindow = new google.maps.InfoWindow();
//
//     var service = new google.maps.places.PlacesService(map);
//     service.nearbySearch({
//       location: pyrmont,
//       radius: 500,
//       types: ['store']
//     }, callback);
//   }
//
//   function callback(results, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }
//     }
//   }
//
//   function createMarker(place) {
//     var placeLoc = place.geometry.location;
//     var marker = new google.maps.Marker({
//       map: map,
//       position: place.geometry.location
//     });
//
//     google.maps.event.addListener(marker, 'click', function() {
//       infowindow.setContent(place.name);
//       infowindow.open(map, this);
//     });
//   }
//
//
//
//
// // }
