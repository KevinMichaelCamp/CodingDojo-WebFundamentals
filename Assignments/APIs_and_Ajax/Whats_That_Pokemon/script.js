$(document).ready(function() {
  for (var i = 1; i <= 151; i++) {
    $('#pokemon').append('<img id=' + i + ' src="http://pokeapi.co/media/sprites/pokemon/' + i + '.png">');
  }
  $('img').click(function() {
    var id = $(this).attr("id");
    $.get("http://pokeapi.co/api/v2/pokemon/" + id + "/", function(res) {
      console.log(res);
      $('#stats').html("<h2>" + res.name + "</h2>");
      $('#stats').append('<img src="http://pokeapi.co/media/sprites/pokemon/' + id + '.png">');
      $('#stats').append("<h2>Types</h2>");
      $('#stats').append("<ul></ul>");
      for (var j = 0; j < res.types.length; j++) {
        $('#stats').append("<li>" + res.types[j].type.name + "</li>");
      }
      $('#stats').append("<h2>Height</h2>");
      $('#stats').append("<h2>" + res.height + "</h2>");
      $('#stats').append("<h2>Weight</h2>");
      $('#stats').append("<h2>" + res.weight + "</h2>");
    }, 'json');
  })
});
