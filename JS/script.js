function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "NavMenu") {
        x.className += " responsive";
    } else {
        x.className = "NavMenu";
    }
}


function initMap() {
  var uluru = {lat: 41.837961, lng: -87.627401};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
