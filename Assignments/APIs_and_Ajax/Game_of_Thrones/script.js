$(document).ready(function() {

  $('#stark').click(function() {
    $.get("https://www.anapioficeandfire.com/api/houses/362", function(res) {
      $('#detail').html("<p>Name: " + res.name + "</p>");
      $('#detail').append("<p>Words: " + res.words + "</p>");
      $('#detail').append("<p>Titles: " + res.titles + "</p>");
    }, 'json');
  })

  $('#targaryen').click(function() {
    $.get("https://www.anapioficeandfire.com/api/houses/378", function(res) {
      $('#detail').html("<p>Name: " + res.name + "</p>");
      $('#detail').append("<p>Words: " + res.words + "</p>");
      $('#detail').append("<p>Titles: " + res.titles + "</p>");
    }, 'json');
  })

  $('#lannister').click(function() {
    $.get("https://www.anapioficeandfire.com/api/houses/229", function(res) {
      $('#detail').html("<p>Name: " + res.name + "</p>");
      $('#detail').append("<p>Words: " + res.words + "</p>");
      $('#detail').append("<p>Titles: " + res.titles + "</p>");
    }, 'json');
  })

  $('#baratheon').click(function() {
    $.get("https://www.anapioficeandfire.com/api/houses/16", function(res) {
      console.log(res);
      $('#detail').html("<p>Name: " + res.name + "</p>");
      $('#detail').append("<p>Words: " + res.words + "</p>");
      $('#detail').append("<p>Titles: " + res.titles + "</p>");
    }, 'json');
  })
})
