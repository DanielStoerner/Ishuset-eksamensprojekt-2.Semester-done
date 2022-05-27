$(document).ready(function(){
  //   Smooth scroll bar som virker når man trykker på knapperne i menuen/navbar.
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior", "smooth");
  });

  // menu bar java herunder
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });  
});
  

$(document).ready(function(){

  var width = $(window).width();
      if (window.innerWidth <= '900') {
          $('.navbar').addClass('sticky');
  
      }

      else {
        $(window).scroll(function(){
          // denne kode gør at når scroll y er på 20, så starten div sticky
          if(this.scrollY > 20){
              $('.navbar').addClass("sticky");
          }else{
              $('.navbar').removeClass("sticky");
          }
          // Scroll up knappen, kommer først når man har scrollet 500 ned
          if(this.scrollY > 500){
              $('.scroll-up-btn').addClass("show");
          }else{
              $('.scroll-up-btn').removeClass("show");
          }
      });
      }

  $(window).on("resize", function() {
    if (window.innerWidth > '900') {
      $('.navbar').removeClass('sticky');
      }

      if (window.innerWidth < '900') {
        $('.navbar').addClass('sticky');
        }
  });
   
});

// -------------- billed galleri -------------------



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous 
function plusSlides(n) {
  showSlides(slideIndex += n);
}



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

var options = {
    prevNextButtons: false
  };
  
  // enable prev/next buttons at 768px
  if ( matchMedia('screen and (min-width: 768px)').matches ) {
    options.prevNextButtons = true;
  }
  
  // disable draggable at 1200px
  if ( matchMedia('screen and (min-width: 1200px)').matches ) {
    options.draggable = false;
  }
  
  
  $('.carousel').flickity( options );
  
  
