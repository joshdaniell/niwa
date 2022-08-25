// NIWA text data request URL
const dataUrl = "https://api.niwa.co.nz/tides/data?apikey=OqrDnYJWXCCvAfwHT7xunCPLP7qXys8c&lat=-36.2882&long=174.8102&numberOfDays=3";

// NIWA chart request URL
const chartUrl = "https://api.niwa.co.nz/tides/chart.png?apikey=OqrDnYJWXCCvAfwHT7xunCPLP7qXys8c&lat=-36.2882&long=174.8102&numberOfDays=3";

// Get and dsiplay text data from NIWA
async function dataNIWA() {
  let response = await fetch(dataUrl);
  let data = await response.json();
  console.log(data);
  for (i = 0; i < data.values.length; i++) {
    const item = data.values[i];
    // Set tide description
    let tide = "Tide";
    if(item.value<1) {
      tide = "Low tide"; 
    } else {
      tide = "High tide";
    }
    // Date formatting for headings and tide times
    const date = new Date(item.time);
    const headingOptions = {weekday: "long", month: "long", day: "numeric"};
    const options = {hour: "numeric", minute: "numeric"};
    const prettyDate = new Intl.DateTimeFormat('en-AU', options).format(date);
    const prettyHeadingDate = new Intl.DateTimeFormat('en-AU', headingOptions).format(date);
    // Risky loop which assumes there will always be 4 tides each day
    if(i < 4) {
      document.getElementById("todayHeading").innerHTML = prettyHeadingDate;
 document.getElementById("today").innerHTML += `${tide} at ${prettyDate} | ${item.value}m<br>`;

    } else if (i >= 4 && i < 8) {
      document.getElementById("tomorrowHeading").innerHTML = prettyHeadingDate;  document.getElementById("tomorrow").innerHTML += `${tide} at ${prettyDate} | ${item.value}m<br>`;
   
    } else {
      document.getElementById("nextDayHeading").innerHTML = prettyHeadingDate;  document.getElementById("nextDay").innerHTML += `${tide} at ${prettyDate} | ${item.value}m<br>`;
    }
  }
}

// Get and display chart data from NIWA
async function chartNIWA() {
  let response = await fetch(chartUrl);
  document.getElementById("chartNIWA").src = response.url;
}

// Clear and get fresh data from NIWA
function refresh() {
  document.getElementById("today").innerHTML = "";
  document.getElementById("tomorrow").innerHTML = "";
  document.getElementById("nextDay").innerHTML = "";
  dataNIWA();
  // chartNIWA();
}

// Retrieve and periodically refresh data
setInterval(refresh(), 3600000);
