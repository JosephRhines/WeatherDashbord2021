$("#localButton").on("click", function(event) {
    event.preventDefault();
    var cityLocal = $("#search-local").val().trim();
    var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" + cityLocal + "&appid=f2980ecc35d520148f7dd373eaa5ca70&units=imperial"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
       console.log(response);
       $("#current").text(response.name);
       $("#temp").text("Temperature: " + response.main.temp + " F")
       $("#humid").text("Humidity: " + response.main.humidity + " %")
       $("#wind").text("Wind Speed: " + response.wind.speed + " MPH")
       console.log(response.name)
    });

})

