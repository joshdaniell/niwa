// Set NIWA request URL
const Url = 'https://api.niwa.co.nz/tides/data?apikey=OqrDnYJWXCCvAfwHT7xunCPLP7qXys8c&lat=-36.3108799&long=174.760635&numberOfDays=3';

// Get data from NIWA
async function fetchAsync (url) {
  let response = await fetch(url);
  // I think this extracts the JSON data from the NIWA response
  let data = await response.json();
  console.log(data);
  // Here I'm trying to print the JSON to HTML but not sure how to pick out the values I want
  document.getElementById("NIWA").innerHTML = JSON.stringify(data[1].time);
}

// Run program
fetchAsync (Url)
