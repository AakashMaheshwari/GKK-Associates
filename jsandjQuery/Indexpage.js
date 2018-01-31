

$(document).ready(function () {
  $('.dropdown-toggle').dropdown();
  
});

/* Removing the Dropdown Menu when the link on menu is clicked */
$(document).ready(function(){
  $("#Aboutus-Submenu li a").on("click",function(){
    $("#Aboutus-Submenu").addClass('closed');
    $('#menubar').prop('checked', false); // Unchecks it
   
  });
  
  $('nav ul li a').on("mouseover",function(e){
    e.preventDefault();
    $("#Aboutus-Submenu").removeClass('closed');
  });
  $("#Services-Submenu li a").on("click",function(){
    $("#Services-Submenu").addClass('closed');
    $('#menubar').prop('checked', false); // Unchecks it
   
  });
  $('nav ul li a').on("mouseover",function(e){
    e.preventDefault(); 
    $("#Services-Submenu").removeClass('closed');
  });
  $("#Industries-Submenu li a").on("click",function(){
    $("#Industries-Submenu").addClass('closed');
    $('#menubar').prop('checked', false); // Unchecks it
   
  });
  $('nav ul li a').on("mouseover",function(e){
    e.preventDefault();
   
    $("#Industries-Submenu").removeClass('closed');
  });
  $("#menu-Contact").on("click",function(){
   /* $("#contactUs").addClass('closed');*/
    $('#menubar').prop('checked', false); // Unchecks it
   
  });

  $("#About-Menu").on("click",function(){
    /*$("#Industries-Submenu").addClass('closed');*/
    $('#menubar').prop('checked', false); // Unchecks it
   
  });

  $("#Home").on("click",function(){
    $('#menubar').prop('checked', false); // Unchecks it
   
  });
  /*$("label").on("click",function(e){
    e.preventDefault();
    $("nav").toggle();
  });*/


})
/*Making the navigation sticky to top on scrolling */
$(document).ready(function(){
 
 // grab the initial top offset of the navigation
  var stickyNavTop=$("#navigationbar").offset().top; 

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav= function(){
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
    
    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
    if (scrollTop > 60) { 
      $('#navigationbar').addClass('nav-fixed-top');
  } else {
      $('#navigationbar').removeClass('nav-fixed-top'); 
  }
  };
  $(window).scroll(function() {
    stickyNav();
  });

  
})


/*smooth scrolling to sections on clicking navigation menu*/
$(document).ready(function (){
  var scrollinks=$('.scroll');
  scrollinks.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop:$(this.hash).offset().top-40
    },500);
  });
  })

$(window).on("load",function(){
  if($(this).width()<=768){
  $("#Mobile-Header").hide().fadeIn(3000);
  $("#Mobile-Header img").hide().fadeIn(5000);
  $('#LogoImage').css("display","none");
  }
  else{
    $("#Mobile-Header").hide();
    $(".Mobile-version").hide();
  }
  })

  $(document).ready(function(){
    var navposition=$('#navigationbar').offset().top;
    if(navposition>60){
      $('#navigationbar').addClass('nav-fixed-top');
    } else {
        $('#navigationbar').removeClass('nav-fixed-top'); 
    }
    

    /* Function for showing Logo on Scrolling*/
    var mobilenavigation=function(){   
      var scrollTop = $(window).scrollTop();
    if($(this).width()<=768){
      
      if(scrollTop<90)
      {

      $('#LogoImage').css("display","none");
      }
    
    else {
      $('#LogoImage').css("display","block");
    }
  }
  
}
$(window).scroll(function() {
  mobilenavigation();
});

  })

  $(document).ready(function(){
    if($(this).width()<=768)
    {
      $('.services-Desc p').remove();
      $('.footer-content div').removeClass('aligndiv');
      $('.footer-content div img').css("margin-left","30%");
      $("#Sector-Images").remove();
    }
  })
