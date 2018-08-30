var isMobile = false;
var hasStickyFooter = false;
// CHANGE ABOUT ME => GALLERY
function aboutMeToGallery(){
  document.body.style.overflow = 'visible';
  $("#ABOUTME").css("display", "none").removeClass('moveUp');
  $("#aboutme").fadeOut(1000);
  $("#top").fadeIn(1500);
  $("#middle").fadeIn(1500);
  $(".footer--aboutme").fadeIn(1500);
  $("footer").removeClass('sticky-footer');
}

// CHANGE FROM GALLERY => ABOUT ME
function galleryToAboutMe(){
  document.body.style.overflow = 'hidden';
  $("#middle").fadeOut(500);
  $("#top").fadeOut(500);
  $("#aboutme").fadeIn(1000);
  $(".footer--aboutme").fadeOut(0);
  $("#ABOUTME").css("display", "block").addClass('moveUp').fadeOut(2000);
}

//
// function toggleStickyFooter(){
//   if($("footer").hasClass("sticky-footer")){
//     $("footer").removeClass('sticky-footer');
//   }else{
//     $("footer").addClass('sticky-footer');
//   }
// }
$(document).ready(function() {
  // Check to see if being viewed from mobile device
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
  }

  // LightGallery Initiation
  $("#lightgallery").lightGallery();
  $('.gallery--group').lightGallery({
      selector: '.lightgallery'
  });

})

$(window).resize(function(){
  if($(window).height() > 780 && !isMobile && $("footer").hasClass("sticky-footer")){
        $("footer").removeClass('sticky-footer');
  } else {
    // if(){
    //   $("footer").addClass('sticky-footer');
      // toggleStickyFooter();
  };
});

// Automatically fade to and from gallery and about me
window.onscroll = function(ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && !isMobile) {
    galleryToAboutMe();
  }
}
