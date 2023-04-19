// Create an array of each country's numbers

d3.json("http://127.0.0.1:5000/api/v1.0/regions").then(function (data) {
  //AFRICA
  let africaEn = (data[0].sum)
  let africaAg = (data[1].sum)
  let africaOther = (data[2].sum)
  let africaWaste = (data[3].sum)
  //ASIA PACIFIC
  let asiaEn = (data[4].sum)
  let asiaAg = (data[5].sum)
  let asiaOther = (data[6].sum)
  let asiaWaste = (data[7].sum)
  //CENTRAL AND SOUTH AMERICA
  let cenAmericaEn = (data[11].sum)
  let cenAmericaAg = (data[10].sum)
  let cenAmericaOther = (data[8].sum)
  let cenAmericaWaste = (data[9].sum)
  //EUROPE
  let europeEn = (data[14].sum)
  let europeAg = (data[13].sum)
  let europeOther = (data[15].sum)
  let europeWaste = (data[12].sum)
  //MIDDLE EAST
  let mideastEn = (data[18].sum)
  let mideastAg = (data[16].sum)
  let mideastOther = (data[17].sum)
  let mideastWaste = (data[19].sum)
  //NORTH AMERICA
  let norAmericaEn = (data[23].sum)
  let norAmericaAg = (data[20].sum)
  let norAmericaOther = (data[21].sum)
  let norAmericaWaste = (data[22].sum)
  //OTHER
  let otherEn = (data[24].sum)
  let otherAg = (data[26].sum)
  let otherOther = (data[27].sum)
  let otherWaste = (data[25].sum)
  //RUSSIA
  let russiaEn = (data[28].sum)
  let russiaAg = (data[31].sum)
  let russiaOther = (data[30].sum)
  let russiaWaste = (data[29].sum)
  //WORLD
  let worldEn = (data[35].sum)
  let worldAg = (data[33].sum)
  let worldOther = (data[34].sum)
  let worldWaste = (data[32].sum)
  
  const type = ["Energy", "Agriculture", "Other", "Waste"];

  const africa = [africaEn,africaAg,africaOther,africaWaste];
  const asia = [asiaEn, asiaAg, asiaOther, asiaWaste];
  const cenAmerica = [cenAmericaEn, cenAmericaAg, cenAmericaOther, cenAmericaWaste];
  const europe = [europeEn, europeAg, europeOther, europeWaste];
  const middleEast = [mideastEn, mideastAg, mideastOther, mideastWaste];
  const northAmerica = [norAmericaEn, norAmericaAg, norAmericaOther, norAmericaWaste];
  const other = [otherEn, otherAg, otherOther, otherWaste];
  const russia = [russiaEn, russiaAg, russiaOther, russiaWaste];
  const world = [worldEn, worldAg, worldOther, worldWaste];


  // Display the default plot
  function init() {
    let data = [{
      values: africa,
      labels: type,
      type: "pie"
    }];

    let layout = {
      height: 600,
      width: 800
    };

    Plotly.newPlot("pie", data, layout);
  }

// On change to the DOM, call getData()
  d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
  function getData() {
    let dropdownMenu = d3.select("#selDataset");
// Assign the value of the dropdown menu option to a letiable
    let dataset = dropdownMenu.property("value");
// Initialize an empty array for the country's data
    let data = [];

    if (dataset == 'africa') {
        data = africa;
    }
    else if (dataset == 'asiaPacific') {
        data = asia;
    }
    else if (dataset == 'centralSouthAmerica') {
        data = cenAmerica;
    }
    else if (dataset == 'europe') {
      data = europe;
    }
    else if (dataset == 'middleEast') {
        data = middleEast;
    }
    else if (dataset == 'northAmerica') {
      data = northAmerica;
    }
    else if (dataset == 'other') {
      data = other;
    }
    else if (dataset == 'world') {
      data = world;
    }
    else if (dataset == 'russiaCaspian') {
      data = russia;
    }
  // Call function to update the chart
    updatePlotly(data);
  }

  // Update the restyled plot's values
  function updatePlotly(newdata) {
    Plotly.restyle("pie", "values", [newdata]);
  }

  init();

})