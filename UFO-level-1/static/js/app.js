// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use D3 to select the table
var table = d3.select("table");
// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped")
// Select the button
var button = d3.select("#filter-btn");
//Function to change input text as per selection
// Complete the click handler for the form
button.on("click", function() 
{
    var inputText = d3.select('#inputitem').property("value");
    
    var filteredDate = tableData.filter(tdata => tdata.datetime == inputText) 
    if(filteredDate!="")
    {
        // Iterate through each object
        filteredDate.forEach((fdate) => {
            var row = tbody.append("tr");
            row.append("td").text(fdate.datetime);
            row.append("td").text(fdate.city);
            row.append("td").text(fdate.state);
            row.append("td").text(fdate.country);
            row.append("td").text(fdate.shape);
            row.append("td").text(fdate.durationMinutes);
            row.append("td").text(fdate.comments);
       
        })
    }
    else
    {
        console.log("Sorry match not found.")
    }
})