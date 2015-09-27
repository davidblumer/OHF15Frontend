var map;
var markers = [];

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

window.onload = function () {
    window.map = new google.maps.Map(document.getElementById("mapbg"),
        {
            center: new google.maps.LatLng(48.123913, 11.598894),
            zoom: 15,
            scrollwheel: true,
            mapTypeId: 'roadmap',
            mapTypeControl: false
        });

    updateData();

    window.setInterval(function () {
        updateData();
    }, 5000);

    //var marker = new google.maps.Marker({
    //    position: new google.maps.LatLng(48.123913, 11.598894),
    //    map: map,
    //    icon: icons['nature'].icon,
    //    title: 'Hello World!'
    //});
};

function addMarker(poi) {
    icon = icons[poi.type.name];

    if (icon !== undefined) {
        var marker = new google.maps.Marker({
            position: poi.geo,
            icon: icons[poi.type.name]['icon'],
            map: map
        });

        markers.push(marker);
    }
};

function clearMarkers() {
    for (var i in markers) {
        markers[i].setMap(null);
    }
    markers = [];
}

function updateData() {

    clearMarkers();

    var center = map.getCenter();
    var url = "http://localhost:8000/api/pois";

    var request = $.ajax({
        //url: "http://82716380.ngrok.io?lat=&lng=&distance=10",
        url: url,
        method: "GET"
    });

    request.done(function (data) {
        for (var i in data.pois) {
            addMarker(data.pois[i]);
        }
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
};

var whitelist = [];
$(document).ready(function () {
    $('#filter-list .checkbox input').each(function () {
        var checkbox = $(this);
        if (checkbox.is(':checked')) {
            whitelist.push(checkbox.val());
        }
    });
})
