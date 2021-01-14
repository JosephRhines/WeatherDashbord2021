console.log("hello")
var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=f2980ecc35d520148f7dd373eaa5ca70"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
   console.log(response);
});