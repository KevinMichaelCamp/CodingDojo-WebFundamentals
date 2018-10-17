$(document).ready(function() {

  $('form').submit(function() {
    return false;
  })

  $('button').click(function() {
    var city = $('input').val();
    console.log(city);
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=8a9feb7c238bb86175a7ffbfb74c1356", function(res) {
      var degrees = Math.round(((9/5) * res.main.temp) - 459.67);
      var weather = res.weather[0].description;
      $('#results').html("<h2>The weather in "+city+" is "+weather+".")
      $('#results').append("<h2>The temperature is "+degrees+"° Fahrenheit.</h2>")
      console.log(res);
    }, 'json');
  })

})
