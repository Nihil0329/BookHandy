$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.nav').removeClass('nav-toggle');

    if($(window).scrollTop() > 10){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

  });

  $('.facility').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

});

function openpart(portion) {
  var i;
  var x = document.getElementsByClassName("portion");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
  }
  document.getElementById(portion).style.display = "block";  
  }