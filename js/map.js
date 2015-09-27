var map;

var iconBase = 'images/marker/';
        var icons = {
          nature: {
            icon: iconBase + 'marker_nature.png'
          },
          culture: {
            icon: iconBase + 'marker_culture.png'
          },
          fun: {
            icon: iconBase + 'marker_fun.png'
          },
          work: {
            icon: iconBase + 'marker_work.png'
          },
          food: {
            icon: iconBase + 'marker_food.png'
          },
          people: {
            icon: iconBase + 'marker_people.png'
          },
          party: {
            icon: iconBase + 'marker_party.png'
          },
          sights: {
            icon: iconBase + 'marker_sights.png'
          },
          bed: {
            icon: iconBase + 'marker_bed.png'
          },
          locations: {
            icon: iconBase + 'marker_locations.png'
          },
          sports: {
            icon: iconBase + 'marker_sports.png'
          },
          shopping: {
            icon: iconBase + 'marker_shopping.png'
          }
        };

window.onload = function() {      
        map = new google.maps.Map(document.getElementById("mapbg"),
        {        
            center: new google.maps.LatLng(48.123913, 11.598894),        
            zoom: 15,
            scrollwheel: true,        
            mapTypeId: 'roadmap',      
            mapTypeControl: false
        });
        
        

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
 
 function updateData ()
 {
     var center = map.getCenter();
    
var request = $.ajax({
  url: "script.php", // TODO URL ANAPSSEN
  method: "POST",
  data: { zoom: 346346, lng: center.longitude, lat: center.latitude },
  dataType: "json"
});
 
request.done(function( msg ) {
  for (var i in msg)
  {
      var currentblaga = msg[i];
      
      // TODO: marker setzen
  }
  
  
});
 
request.fail(function( jqXHR, textStatus ) {
  alert( "Request failed: " + textStatus );
});
 };
 
 $(document).ready(function()
 {
    updateData();
    
    window.setInterval(function()
    {
        updateData();
    }, 5000);
    
     
 });
var whitelist = [];
   var listen = $('#filter-list .checkbox input').each(function()
   {
    var checkbox = $(this);
        if (checkbox.is(':checked'))
        {
        whitelist.push(checkbox.val());
       
        };
   });
           
        
        
  