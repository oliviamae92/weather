// YOUR SCRIPTS GO HERE
$.simpleWeather({
  location: 99004,
  
  unit: 'f',
  
  success: function(weather) {
    //Check for weather
     console.log(weather);
    //Display weather
    $('.temp').text(weather.temp);
    $('.city').text(weather.city);
    $('.state').text(weather.region);
    $('.image img').attr('src', weather.image)
  },
  error: function(error) {
     console.log('Look Outside!')
  },
});