function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: 50.75000000, lng: -3.75000000 },
    });
    const image =
      "https://1drv.ms/i/c/17800d23338d1269/IQOmfmaO_eGLTYy90u269wztAVKmfn9y34X5ZZ3Sg8PLXPo?width=30";
    const beachMarker = new google.maps.Marker({
      position: { lat: 50.75000000, lng: -3.75000000 },
      map,
      icon: image,
    });
  }
  
  window.initMap = initMap;
  