$(document).ready(function(){
  $('#iphad').hide().fadeIn('slow');

  $('#pandatime').click(function()
  {
  		//$('#screen').css({background: black url(window.location.host + /assets/bg0.jpg) no-repeat center;})

  });

  $('.icon').hover(function()
  {
  		var audio = document.getElementById("oink");
		audio.play();

  });
  $('#myModal').modal('show');

  //icons behaviour
  $('#winston').click(function(){
    $('#myModal').modal('show');
  });

 /* $('#pandatime').click(function() {
    $('#screen').hide();
    $('#screen').fadeIn('slow');
    $('#screen').css("background-image", "url(" + "http://superiphase3ds.heroku.com/assets/bg" +randomNumberBetween(0,8) + ".jpg"+ " )" );
  });*/

  $('#derp').click(function() {
     $('#screen').hide();
    $('#screen').fadeIn('slow');
    $('#screen').css("background-image", "url(" + "http://superiphase3ds.heroku.com/assets/bg" +randomNumberBetween(0,8) + ".jpg"+ " )" );
  });

  $('#iphad').click(function(){
     $('#screen').fadeIn('slow');
  });

});

function randomNumberBetween(min, max)
{
var random = Math.floor(Math.random() * (max - min + 1)) + min;
return random;
}