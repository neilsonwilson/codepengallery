var slides, slides_total, slide_current;

document.addEventListener('page:load', changePicture);
slides = document.getElementsByClassName('catimage');
slides_total = slides.length;
slide_current = 0;
changePicture(slide_current);

function changePicture (slide) {
  for(var i = 0; i < slides_total; i++){
  slides[i].style.display = 'none'; //turn all pictures off
  }
  slides[slide].style.display = "block"; // turn on slide passed to
  };

document.getElementsByClassName('prev')[0].addEventListener('click', function () {
  if(slide_current > 0){
    slide_current--;
  }else{
    slide_current = slides_total;
  }
  console.log(slide_current);
  changePicture(slide_current);
});

document.getElementsByClassName('next')[0].addEventListener('click', function () {
  if(slide_current < slides_total){
    slide_current++;
  }else{
    slide_current = 1
  }
  console.log(slide_current);
  changePicture(slide_current);
});

document.getElementsByClassName('reset')[0].addEventListener('click', function () {
  slide_current = 0
  console.log(slide_current);
  changePicture(slide_current);
});

// document.addEventListener('DOMContentLoaded', function(){
//   slides = document.getElementsByClassName('catimage');
//   slides_total = slides.length;
//   slide_current = 0;
//   changePicture(slide_current);

//   window.setInterval(function () {
//     if(slide_current >= (  slides_total - 1 ) ) {
//       slide_current = 0;
//     }else {
//       slide_current++;
//     }
//     changePicture(slide_current);
//     console.log(slide_current);
//     }, 300);
// });



// means to execute the code only once the document has finished loading

// function changeCats (){
// 	// get the pictures!
// 	slides = document.getElementsByClassName('col-sm-12');
// 	// how many pictures are there?
// 	slides_total = slides.length;
// 	// let's start with the first picture
// 	slide_current = 0;
// 	// function to set time interval (this will loop)
// 	window.setInterval(function(){	
// 		// change the picture to the current time
// 		changePicture(slide_current);
// 		//if we get to the last slide, go back to the first one
// 		if(slide_current >= (slides_total-1)){
// 			slide_current = 0;
// 		// otherwise, just go to the next slide
// 		}else{
// 			slide_current++; //this is an abbreviation for slide_current = slide_current + 1
// 		}
// 		//log the slide to the console so for confirmation
// 		console.log(slide_current);
// 		//do this every 3s
// 		}, 300);
// }

// document.addEventListener('page:load', changePicture);
// document.addEventListener('ready', changePicture);

// // document.saddEventListener('DOMContentLoaded', changeCats);
// // helper functino takes a slide as input
// function changePicture(slide){
// 	// iterate though all slides
// 	for(var i = 0; i < slides.length; i++){
// 		//change their display to none
// 		slides[i].style.display = 'none';
// 	};
// 	// change the display for the current slide back on!
// 	slides[slide].style.display = 'block';

// };