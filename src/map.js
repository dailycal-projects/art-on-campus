var artLocations = [{"coordinates":[37.870782, -122.262313], "name": "The Football Players", "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/The_Football_Players_by_Douglas_Tilden%2C_view_2_-_University_of_California%2C_Berkeley_-_DSC04938.JPG/150px-The_Football_Players_by_Douglas_Tilden%2C_view_2_-_University_of_California%2C_Berkeley_-_DSC04938.JPG"},
     {"coordinates":[37.870232, -122.261735], "name": "The Grizzly Bears", "imageLink": "https://www.berkeley.edu/news/media/releases/2002/08/images/bear.jpg"},
     {"coordinates":[37.872141, -122.256799], "name": "Art 3", "imageLink": "https://cdn.shopify.com/s/files/1/1061/1924/files/Thinking_Face_Emoji.png?9898922749706957214"},
     {"coordinates":[37.873632, -122.263612], "name": "Art 4", "imageLink": "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/clown-face.png"},
];

const createMap = function(graphicDivSelector) {

    let map = L.map(graphicDivSelector).setView([37.871992, -122.259568], 16);
    let osmLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (var i = 0; i < artLocations.length; i++) {
      const art = artLocations[i];
      var circle = L.circle([art.coordinates[0], art.coordinates[1]], {
          color: '#142733',
          fillColor: '#142733',
          fillOpacity: 0.5,
          radius: 10
      }).addTo(map);

      circle.bindPopup(art.name + "<img src='" + art.imageLink + "'</img></a>");
      circle.on('mouseover', function (e) {
          this.openPopup();
      });
      circle.on('mouseout', function (e) {
          this.closePopup();
      });
    }



      // update our map
      function update(step) {
          const coords = artLocations[step].coordinates;
          const lat = coords[0];
          const lng = coords[1];
          map.flyTo([lat, lng], 18);

          console.log('updated to ' + coords);

      }

      return {update: update}


}
