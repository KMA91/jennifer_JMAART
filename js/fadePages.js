var isMobile = false;

// CHANGE ABOUT ME => GALLERY
function aboutMeToGallery(){
  document.body.style.overflow = 'visible';
  $("#ABOUTME").css("display", "none").removeClass('fadeUp');
  $("#aboutme").fadeOut(1000);
  $("#top").fadeIn(1500);
  $("#middle").fadeIn(1500);
  $("#footer").removeClass('sticky-footer')
}

// CHANGE FROM GALLERY => ABOUT ME
function galleryToAboutMe(){
  document.body.style.overflow = 'hidden';
  $("#middle").fadeOut(500);
  $("#top").fadeOut(500);
  $("#aboutme").fadeIn(1000);
  $("#footer").addClass('sticky-footer')
  $("#ABOUTME").css("display", "block").addClass('fadeUp').fadeOut(2000);
}

$(document).ready(function() {
  // LightGallery Initiation
  $("#lightgallery").lightGallery();
  $('.gallery--group').lightGallery({
      selector: '.lightgallery'
  });

  // Check to see if being viewed from mobile device
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
  }
})

// Automatically fade to and from gallery and about me
window.onscroll = function(ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && !isMobile) {
    galleryToAboutMe();
  }
}
