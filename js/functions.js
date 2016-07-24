

$(document).ready(function() {
$(".btn-pref .btn").click(function () {
    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).removeClass("btn-default").addClass("btn-primary");   
});
});

$(document).ready(function() {
$("#bot-service").click(function () {
		$("#animated").addClass("animated slideInLeft");
		// $(".tab").addClass("active"); // instead of this do the below 
		$(this).removeClass("animated slideInLeft");   
	});
	$("#bot-about").click(function () {
		$("#animated").removeClass("animated slideInLeft"); 
	});
	$("#bot-portfolio").click(function () {
		$("#animated").removeClass("animated slideInLeft"); 
	});
	$("#bot-contact").click(function () {
		$("#animated").removeClass("animated slideInLeft"); 
	});
});



//Ease Scroll

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
   