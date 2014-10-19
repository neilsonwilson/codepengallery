//
var slides, slides_total, slide_current;
// means to execute the code only once the document has finished loading
document.addEventListener('DOMContentLoaded', function(){
	// get the pictures!
	slides = document.getElementsByClassName('col-sm-12');
	// how many pictures are there?
	slides_total = slides.length;
	// let's start with the first picture
	slide_current = 0;
	// function to set time interval (this will loop)
	window.setInterval(function(){	
		// change the picture to the current time
		changePicture(slide_current);
		//if we get to the last slide, go back to the first one
		if(slide_current >= (slides_total-1)){
			slide_current = 0;
		// otherwise, just go to the next slide
		}else{
			slide_current++; //this is an abbreviation for slide_current = slide_current + 1
		}
		//log the slide to the console so for confirmation
		console.log(slide_current);
		//do this every 3s
		}, 200);
});
// helper functino takes a slide as input
function changePicture(slide){
	// iterate though all slides
	for(var i = 0; i < slides.length; i++){
		//change their display to none
		slides[i].style.display = 'none';
	};
	// change the display for the current slide back on!
	slides[slide].style.display = 'block';

};