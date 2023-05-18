// Responsive Nav
$(function() {
    menu = $('nav ul');
  
    $('#openup').on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
  
    $(window).resize(function() {
      var w = $(this).width();
      if (w > 480 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  
    $('nav li').on('click', function(e) {
      var w = $(window).width();
      if (w < 480) {
        menu.slideToggle();
      }
    });
    $('.open-menu').height($(window).height());
  });
  
  // Smooth Scrolling
  $('.cf a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

  //Año concurrente
  document.getElementById("year").innerHTML = new Date().getFullYear();

  //Preload images
    var images = new Array();
    function preloadImages(){
        for (i=0; i < preloadImages.arguments.length; i++){
            images[i] = new Image();
            images[i].src = preloadImages.arguments[i];
        }
    }
    preloadImages("logo.jpg", "bg.jpg");

    //Validar email
    function validateEmail(theForm) {
        if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theForm.email-id.value)){
        return(true);
    }
        alert("Invalid e-mail address! Please enter again carefully!.");
        return(false);
    }

    //Cookies
    function compruebaAceptaCookies() {
        if(localStorage.aceptaCookies != 'true'){
          cajacookies.style.display = 'block';
        }
      }
      
      function aceptarCookies() {
        localStorage.aceptaCookies = 'true';
        cajacookies.style.display = 'none';
      }
      
      $(document).ready(function () {
        compruebaAceptaCookies();
      });