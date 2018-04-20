document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let state = 'on';

let initMap = () => {

    let map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 13,
      disableDefaultUI: true,
      draggable: false,
      zoomControl: false, 
      scrollwheel: false, 
      disableDoubleClickZoom: true,
      center: {lat: 33.746, lng: -84.37}
    });

    let marker = new google.maps.Marker({
      position: {lat: 33.75, lng: -84.389},
      map: map,
      title: 'Hello World!'
    });

    
    return marker;
}

let marker = initMap()
let toggleMarkerAnimation = (marker) => {
    if(state === 'on') {
        marker.setAnimation(null)
        state = 'off';
    } else if (state = 'false') {
        marker.setAnimation(google.maps.Animation.BOUNCE)
        state = 'on';
    }
}

toggleMarkerAnimation(marker);

setInterval(() => { toggleMarkerAnimation(marker)}, 2500)
