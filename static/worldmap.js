// Create a map object.
var myMap = L.map("map", {
    center: [15.5994, -15.6731],
    zoom: 2
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  d3.json("http://127.0.0.1:5000/api/v1.0/emissions").then(function(data) {
    //console.log(data[i].region);
    var markers = {


        Africa: [-8.7832, 34.5085],
      

        "Asia Pacific": [0.9619, 114.5548],

      
        "Central and South America": [-8.7635, -63.8972],

      
        "Europe": [46.9480, 7.4474],

     
        "Middle East": [34.0873, 49.7022],

    
    
        "North America": [36.1540, -95.9928],
      
        "Russia & Caspian": [51.1605, 71.4704],


        "Other": [33.990750, -47.663413],

        "World": [43.008, -75.345]


    };
    for (var i = 0; i < data.length; i++) {
      console.log(markers[data[i].region]);
      L.circle(markers[data[i].region], {
        fillColor: "red",
        radius: data[i].sum * 50
      }).bindPopup(`<h2>Region: ${data[i].region}<h2><br><h3>Emissions: ${data[i].sum.toFixed(2)} Kilotons<h3>`).addTo(myMap);
    }

  })



  function markerSize(population) {
    return Math.sqrt(population) * 50;
  }
    
   

    // // Loop through the cities array, and create one marker for each city object.
    // for (var i = 0; i < markers.length; i++) {
    //   L.circle(markers[i].location, {
    //     fillOpacity: 0.75,
    //     color: "black",
    //     fillColor: "purple",
    //     // Setting our circle's radius to equal the output of our markerSize() function:
    //     // This will make our marker's size proportionate to its population.
    //     radius: markerSize(markers[i].population)
    //   }).bindPopup().addTo(map);
    // }