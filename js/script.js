$(document).ready(function () {

$("transition").css("display", "none");

    $("transition").fadeIn(500);

	$("transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body transition").fadeOut(500, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}

	  $('.sl').slick({
	  	autoplay:true,
	  	autoplaySpeed:4000,
	  	fade:true,
	  	
	  	arrows:true,
	  	speed:700,
	  	asNavFor:'.sl2',

      });
      $('.sl2').slick({
	
			arrows:false,
			slidesToShow: 4,
			 slidesToScroll: 4,
			centerMode: true,
			centerPadding: '20px',
	  		asNavFor:'.sl',
	  		focusOnSelect: true,
	  		responsive:[{
	  			breakpoint:900,
	  			settings: {
	  				slidesToShow:3,
	  			}
	  		}]
      });
});






