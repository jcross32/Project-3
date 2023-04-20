d3.json("http://127.0.0.1:5000/api/v1.0/energy").then(function (data) {
    console.log(data)
    //AFRICA
 
    let africaFlared = (data[0].sum)
    let africaFugitive = (data[1].sum)
    let africaVented = (data[2].sum)
    //ASIA PACIFIC

    let asiaFlared = (data[3].sum)
    let asiaFugitive = (data[4].sum)
    let asiaVented = (data[5].sum)
    //CENTRAL AND SOUTH AMERICA

    let cenAmericaFlared = (data[6].sum)
    let cenAmericaFugitive = (data[7].sum)
    let cenAmericaVented = (data[8].sum)
    //EUROPE

    let europeFlared = (data[9].sum)
    let europeFugitive = (data[10].sum)
    let europeVented = (data[11].sum)
    //MIDDLE EAST

    let mideastFlared = (data[12].sum)
    let mideastFugitive = (data[13].sum)
    let mideastVented = (data[14].sum)
    //NORTH AMERICA

    let norAmericaFlared = (data[15].sum)
    let norAmericaFugitive = (data[16].sum)
    let norAmericaVented = (data[17].sum)
    //OTHER

    let otherFlared = (data[18].sum)
    let otherFugitive = (data[19].sum)
    let otherVented = (data[20].sum)
    //RUSSIA

    let russiaFlared = (data[21].sum)
    let russiaFugitive = (data[22].sum)
    let russiaVented = (data[23].sum)
    //WORLD

    let worldFlared = (data[24].sum)
    let worldFugitive = (data[25].sum)
    let worldVented = (data[26].sum)

    const type = ["Flared", "Fugitive", "Vented"];

    const africa = [africaFlared, africaFugitive, africaVented];
    const asia = [asiaFlared, asiaFugitive, asiaVented];
    const cenAmerica = [cenAmericaFlared, cenAmericaFugitive, cenAmericaVented];
    const europe = [europeFlared, europeFugitive, europeVented];
    const middleEast = [mideastFlared, mideastFugitive, mideastVented];
    const northAmerica = [norAmericaFlared, norAmericaFugitive, norAmericaVented];
    const other = [otherFlared, otherFugitive, otherVented];
    const russia = [russiaFlared, russiaFugitive, russiaVented];
    const world = [worldFlared, worldFugitive, worldVented];

    function init() {
        let data = [{
            x: africa,
            y: type,
            type: "bar",
            orientation: "h",
            
        }];

        let layout = {
            title: "Energy Emission by Type",
            xaxis: {
            title: "Emissions in Kilotons"
             },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
            }
        }       
  
  Plotly.newPlot("plot", data, layout);
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
console.log(dataset)
console.log(asia)
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
            Plotly.restyle("plot", "x", [newdata]);
        }

        init();
    })