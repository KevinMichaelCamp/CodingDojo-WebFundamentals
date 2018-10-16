$(document).ready(function() {

  $('form').submit(function() {
    return false;
  })

  $('button').click(function() {
    var city = $('input').val();
    console.log(city);
    $.get("http://api/openweathermap.org/data/2.5/weather?q=" + city + "/5b1a0de273bbbcbbe13f59305c5a3d21", function(res) {
      console.log(res);
    }, 'json');
  })

})
