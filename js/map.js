window.onload = function() {      
        var map = new google.maps.Map(document.getElementById("mapbg"),
        {        
        center: new google.maps.LatLng(48.123913, 11.598894),        
        zoom: 15,
        scrollwheel: true,        
        mapTypeId: 'roadmap',      
        mapTypeControl: false
        });
        
        var iconBase = 'images/marker/';
        var icons = {
          nature: {
            icon: iconBase + 'marker_nature.png',
          },
          culture: {
            icon: iconBase + 'marker_culture.png'
          },
          romantic: {
            icon: iconBase + 'marker_romantic.png'
          }
        };

        function addMarker(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        };
        var marker = new google.maps.Marker({
            position:new google.maps.LatLng(48.123913, 11.598894),
            map: map,
            icon: icons['nature'].icon,
            title: 'Hello World!'
        });
        
        
};      
 