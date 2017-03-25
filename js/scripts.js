// YOUR SCRIPTS GO HERE
$.simpleWeather({
    location: 99004
    , unit: 'f'
    , success: function (weather) {
        //Check for weather
        console.log(weather);
        //Display weather
        $('.temp').text(weather.temp + 'F');
        $('.city').text(weather.city);
        $('.state').text(weather.region);
        $('.image img').attr('src', weather.image);
    }
    , error: function (error) {
        console.log('Look Outside!')
    }
, });
$('.geo button').click(function () {
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function (position) {
        getWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
});
// Get geolocated weather
var getWeather = function (location, degree) {
    $.simpleWeather({
        location: location
        , degree: degree
        , degree: 24
        , woeid: ''
        , unit: 'f'
        , success: function (weather) {
            // Display Data
            console.log(degree);
            $('.geo .temp').text(weather.temp + 'F');
            $('.geo .city').text(weather.city);
            $('.geo img').attr('src', weather.image);
            $('.geo .title').text(weather.title);
            if (weather.currently == "Rain") {
                $("#poke-choice").attr("src", "../img/Castform_Rain.png");
            }
            else if (weather.currently == "Partly Cloudy") {
                $("#poke-choice").attr("src", "../img/Castform_Cloudy.png");
            }
            else if (weather.currently == "Cloudy") {
                $("#poke-choice").attr("src", "../img/Castform_Cloudy.png");
            }
            else if (weather.currently == "Sunny") {
                $("#poke-choice").attr("src", "../img/Castform_Sunny.png");
            }
            else if (weather.currently == "Snow") {
                $("#poke-choice").attr("src", "../img/Castform_Snow.png");
            }
            // Entire weather object
            console.log();
        }
        , error: function (error) {
            console.log('Look Outside!')
                // Show if weather cannot be retreived
        }
    });
};