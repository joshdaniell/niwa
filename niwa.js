// Set NIWA request URL
const Url = 'https://api.niwa.co.nz/tides/data?apikey=OqrDnYJWXCCvAfwHT7xunCPLP7qXys8c&lat=-36.3108799&long=174.760635&numberOfDays=3';

// Get data from NIWA
async function fetchAsync (url) {
  let response = await fetch(url);
  // I think this extracts the JSON data from the NIWA response
  let data = await response.json();
  // I seem to be getting the right data from NIWA when logging it
  console.log(data);
  // But I'm getting stuck when trying to add time times to HTML - I'm not sure how to pick out the values I want
  document.getElementById("NIWA").innerHTML = JSON.stringify(data);
}

// Run program
fetchAsync (Url)
