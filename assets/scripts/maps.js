function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: 50.75000000, lng: -3.75000000 },
    });

    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h2 id="firstHeading" class="firstHeading">My Home, Devon</h2>' +
        '<div id="bodyContent">' +
        "<p><b>About:</b> Being a software developer in <b>Devon, UK,</b> offers a unique blend of " +
        "professional and lifestyle benefits. The region is home to a growing tech " +
        "community, with opportunities to work on innovative projects across various " +
        "industries. Companies in Exeter, Plymouth, and other parts of Devon are " +
        "increasingly seeking skilled developers, providing a fertile ground for career " +
        "growth. The picturesque landscapes and coastal beauty of Devon also " +
        "offer a serene backdrop for work-life balance, making it an ideal location for " +
        "those who appreciate both professional challenges and a quiet quality of life. " +
        "</div>" +
        "</div>";

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "My Home, Devon",
    });

    const image = "https://1drv.ms/i/c/17800d23338d1269/IQOmfmaO_eGLTYy90u269wztAVKmfn9y34X5ZZ3Sg8PLXPo?width=30";

    const beachMarker = new google.maps.Marker({
        position: { lat: 50.75000000, lng: -3.75000000 },
        map,
        icon: image,
    });

    beachMarker.addListener("click", () => {
        infowindow.open({
            anchor: beachMarker,
            map,
        });
    });
}

window.initMap = initMap;