$(document).ready(function(){

	//set variables
	var speed=500;  //fade speed
	var autoswitch=true;  //auto slider option
	var autoswitch_speed=4000; //auto slider speed
	
	//add initial active class
	$('.slide').first().addClass('active');
	
	//Hide all slides
	$('.slide').hide();
	
	//show first slide
	$('.active').show();
	
	//Next button listener
	$('#next').on('click',nextSlide);
	
	//Prev button listener
	$('#prev').on('click',prevSlide);
	
	//Autoslider
	if(autoswitch==true){
		setInterval(nextSlide,autoswitch_speed);
	}
	
	//switch to next slide function
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		//if at last image go back to first
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		}
		else{
			$('.oldActive').next().addClass('active');
		}
		
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
	
	//switch to previous slide function
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		//if at last image go back to first
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		}
		else{
			$('.oldActive').prev().addClass('active');
		}
		
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

});