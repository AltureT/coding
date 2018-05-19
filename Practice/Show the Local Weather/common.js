$(document).ready(function() {
    $("#btn").on("click", getWeather);
});

function getWeather() {
    // var lon,
    //     lat;
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         lat = position.coords.latitude;
    //         lon = position.coords.longitude;
    // }
    var weaid = $("#city").val();
    $.ajax({
        type: "get",
        url: "http://api.k780.com:88/?app=weather.future&weaid=" + weaid + "&appkey=22252&sign=15cc0d959c7a00bdf164aaed3cc33f82&format=json&jsoncallback=data",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "data",
        success: function(response) {
            $("#location").text(response.result[0].citynm);
            $("#temperature").text(response.result[0].temperature);
            $("#meteorological").text(response.result[0].weather);
        }
    });
}