document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let myMap = () => {
    var mapProp= {
        center:new google.maps.LatLng(33.746,-84.389),
        zoom:13,
        disableDefaultUI: true,
        draggable: false,
        zoomControl: false, 
        scrollwheel: false, 
        disableDoubleClickZoom: true

    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

myMap();