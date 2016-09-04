sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$('#slider > img#1').fadeIn(300);
	$('div#d1').show();
	startSlider();

});

function startSlider() {
	count = $('#slider > img').size();
	loop = setInterval(function(){
		if (sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
		}

		$("img").fadeOut(300);
		$(".centerText").hide();
		$("#slider > img#" + sliderNext).fadeIn();
		$("div#d" + sliderNext).show();


		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;
	}, 3000)
}

function prev(){
	var newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next(){
	var newSlide = sliderInt + 1;
	showSlide(newSlide);
}

function stopLoop(){
	window.clearInterval(loop);
	//stops the loop
}

function showSlide(id){
	stopLoop();
	if (id > 4) {
		id = 1;
	}else if(id < 1){
		id = 4;
	}

	$("img").fadeOut(300);
	$(".centerText").hide();
	$("#slider > img#" + id).fadeIn();
	$("div#d" + id).show();

	sliderInt = id;
	sliderNext = id + 1;
	startSlider();
}

$("#slider > img").hover(function() {
	stopLoop();

	$('#center').html("Slider Paused");
},
function(){
	startSlider();
	$("#center").html("Slider Running");
}
);
