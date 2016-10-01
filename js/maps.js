/**
 * Created by RiMaStInO on 29/09/2016.
 */


$( document ).ready(function() {
    initMap();
});


var map;
function initMap() {
    var bounds = new google.maps.LatLngBounds();
   var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.3277733, lng: 16.244146499999943},
       disableDefaultUI: true,
        zoom: 13,
       mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles:[
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ],
    });


    /* AGGIUNGERE NELL'ARRAY MARKERS I PUNTI DA VISUALIZZARE SULLA MAPPA CON RELATIVE ICONE */

    var markers = [
        ['Via Kennedy, 87036 Quattromiglia CS, Italia', 39.3277733,16.244146499999943, 'img/icon_maps.png'],
        ['Via Alessandro Volta, 130, 87036 Quattromiglia CS', 39.35594, 16.24364, 'img/icon_maps1.png'],
        ['Via Don Giovanni Minzoni, 77, 87036 Quattromiglia CS', 39.33618, 16.24167, 'img/icon_maps2.png'],
    ];


    for (i = 0; i < markers.length; i++){
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon: markers[i][3],
        });
    }








}



