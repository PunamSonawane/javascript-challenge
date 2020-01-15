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
function myFunction() {
    var e = document.getElementById("select").value;
    console.log(e)
    if(e=="date-time"){
        d3.select("#inputitem").attr("placeholder","Enter Date")
    }else if(e=="City"){
        d3.select("#inputitem").attr("placeholder", "Enter City");
    }else if(e=="State"){
        d3.select("#inputitem").attr("placeholder", "Enter State");
    }else if(e=="Country"){
        d3.select("#inputitem").attr("placeholder", "Enter Country");
    }else if(e=="Shape"){
        d3.select("#inputitem").attr("placeholder", "Enter Shape");
    }
}

// Complete the click handler for the form
button.on("click", function() {
    var inputText = d3.select('#inputitem').property("value");
    //console.log(inputText)
    var filteredDate = tableData.filter(tdata => tdata.datetime == inputText) 
    var filteredCity = tableData.filter(tdata => tdata.city == inputText) 
    var filteredState = tableData.filter(tdata => tdata.state == inputText) 
    var filteredCountry = tableData.filter(tdata => tdata.country == inputText) 
    var filteredShape = tableData.filter(tdata => tdata.shape == inputText) 
    
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
    else if(filteredCity!=""){
        // Iterate through each object
        //console.log(filteredCity.city)
        filteredCity.forEach((fcity) => {
            
        var row = tbody.append("tr");
        row.append("td").text(fcity.datetime);
        row.append("td").text(fcity.city);
        row.append("td").text(fcity.state);
        row.append("td").text(fcity.country);
        row.append("td").text(fcity.shape);
        row.append("td").text(fcity.durationMinutes);
        row.append("td").text(fcity.comments);
    })
    }
    else if(filteredState!=""){
        // Iterate through each object
        filteredState.forEach((fstate) => {
            
            var row = tbody.append("tr");
            row.append("td").text(fstate.datetime);
            row.append("td").text(fstate.city);
            row.append("td").text(fstate.state);
            row.append("td").text(fstate.country);
            row.append("td").text(fstate.shape);
            row.append("td").text(fstate.durationMinutes);
            row.append("td").text(fstate.comments);
        })
        }
        else if(filteredCountry!=""){
            // Iterate through each object
            filteredState.forEach((fcount) => {
                var row = tbody.append("tr");
                row.append("td").text(fcount.datetime);
                row.append("td").text(fcount.city);
                row.append("td").text(fcount.state);
                row.append("td").text(fcount.country);
                row.append("td").text(fcount.shape);
                row.append("td").text(fcount.durationMinutes);
                row.append("td").text(fcount.comments);
            })
            }
            else if(filteredShape!=""){
                // Iterate through each object
                filteredState.forEach((fsh) => {
                    var row = tbody.append("tr");
                    row.append("td").text(fsh.datetime);
                    row.append("td").text(fsh.city);
                    row.append("td").text(fsh.state);
                    row.append("td").text(fsh.country);
                    row.append("td").text(fsh.shape);
                    row.append("td").text(fsh.durationMinutes);
                    row.append("td").text(fsh.comments);
                })
                }else{
                    console.log("Sorry no match found")
                }    
   

})
