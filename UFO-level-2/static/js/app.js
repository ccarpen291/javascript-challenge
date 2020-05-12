// from data.js


// Collecting the data from our static datasource
var tableData = data;

// Here the html code is called tbody we are selecting with d3
// This is getting a reference to the html table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// // Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
// we can call it whatever we want
// This is what we repeat over and over again
// "body tr td value"
tableData.forEach(function(tableData) {
    // console.log(tableData);
    // here we insert a new tr
    var row = tbody.append("tr");
    // now we insert a new column
    // we had the number of keys in that weather report
    // we are retrieivng the key and value
    // this is the row and we ahve to populate each column
    Object.entries(tableData).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      // here we insert the value into the td
      var cell = row.append("td");
      cell.text(value);
    });
  });


// This will get us the data to limit by a date

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {
    // Prevent the page from refreshing
    // d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    var cityInputElement = d3.select("#city").property("value");
    var stateInputElement = d3.select("#state").property("value");
    var countryInputElement = d3.select("#country").property("value");
    var shapeInputElement = d3.select("#shape").property("value");
    // Print the value to the console
    console.log(inputValue);
    console.log(tableData);
    var filteredData = tableData.filter(tableData => (tableData.datetime === inputValue) && (tableData.city === cityInputElement) && (tableData.state === stateInputElement) && (tableData.country === countryInputElement) && (tableData.shape === shapeInputElement));
    function filterData(inputValue, column){
      tableData.filter(tableData => tableData[column] === inputValue);
    }

    console.log(filteredData);
    // # id, . for classes and regular is a tag
    var list = d3.select("tbody");
    //  remove original table
    list.html("");
    // Rebuild the data table that has been from filtered
    filteredData.forEach((tableData) => {
        var row = tbody.append("tr");
        Object.entries(tableData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
  };