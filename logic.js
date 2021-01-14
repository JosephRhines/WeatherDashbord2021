console.log("hello")





$("#localButton").on("click", function(event) {
    event.preventDefault();
    var cityLocal = $("#search-local").val();
    var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" + cityLocal + "&appid=f2980ecc35d520148f7dd373eaa5ca70"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
       console.log(response);
    });




})

