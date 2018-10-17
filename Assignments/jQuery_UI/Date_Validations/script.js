$(document).ready(function(){
  $('form').submit(function(){
    return false;
  })

  $('#from').datepicker();
  $('#to').datepicker();

  $('button').click(function(){
    var fromDate = $('#from').val();
    var toDate = $('#to').val();
    var name = $('#name').val();
    console.log(fromDate);
    console.log(toDate);
    console.log(name);
    if(name == ""){
      alert("You Must Enter a Name!");
    }
    else{
      $('#dialog').append("<p>Hi "+name+"! You are all set to leave on "+fromDate+" and return "+toDate+".")
      $('#dialog').dialog();
    }
  })

})
