var cities =[]

$("#localButton").on("click", function(event) {
    event.preventDefault();
    var cityLocal = $("#search-local").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityLocal + "&appid=f2980ecc35d520148f7dd373eaa5ca70&units=imperial"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
       
       $("#current").text(response.name);
       $("#temp").text("Temperature: " + response.main.temp + " F")
       $("#humid").text("Humidity: " + response.main.humidity + " %")
       $("#wind").text("Wind Speed: " + response.wind.speed + " MPH")
       
       cities.push(response.name)
       localStorage.setItem("Cities", JSON.stringify(cities));
       updateHistory()
       var lat = response.coord.lat;
       var lon = response.coord.lon;
        
    $.ajax ({
    url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=f2980ecc35d520148f7dd373eaa5ca70&units=imperial",
    Method: "GET"
    }).then(function (fire) {
        
        $("#uv").text("UV: " + fire.current.uvi);
    })
    });
     
})
function updateHistory() {
cities = JSON.parse((localStorage.getItem("Cities"))) || []
for (let i= 1;i < 6;i++) {
    var result = cities[cities.length-i];
    if (result) {
        $("#history" + i).text(result)
    }
}
}

updateHistory()

