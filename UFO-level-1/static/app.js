var tableData = data;

var tbody = d3.select('tbody');

data.forEach((sighting) => {
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {
        row.append('td').text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    tbody.html("");
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    filteredData.forEach(function(selections) {
    var row = tbody.append("tr");
    Object.entries(selections).forEach(([key, value]) => {
        row.append("td").text(value);
    });
  });
});