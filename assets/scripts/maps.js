function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: 50.75000000, lng: -3.75000000 },
    });
    const image =
      "";
    const beachMarker = new google.maps.Marker({
      position: { lat: 50.75000000, lng: -3.75000000 },
      map,
      icon: image,
    });
  }
  
  window.initMap = initMap;
  