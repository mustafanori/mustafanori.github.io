// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
        // $('.portfolio-item').isotope({
        //  	itemSelector: '.item',
        //  	layoutMode: 'fitRows'
        //  });
        $('.portfolio-menu ul li').click(function(){
          $('.portfolio-menu ul li').removeClass('active');
          $(this).addClass('active');
          
          var selector = $(this).attr('data-filter');
          $('.portfolio-item').isotope({
            filter:selector
          });
          return  false;
        });
        $(document).ready(function() {
        var popup_btn = $('.popup-btn');
        popup_btn.magnificPopup({
        type : 'image',
        gallery : {
          enabled : true
        }
        });
        });
       
        // direct browser to top right away
if (window.location.hash)
scroll(0,0);
// takes care of some browsers issue
setTimeout(function(){scroll(0,0);},1);

$(function(){
//your current click function
$('.scroll').on('click',function(e){
e.preventDefault();
$('html,body').animate({
    scrollTop:$($(this).attr('href')).offset().top + 'px'
},1000,'swing');
});

// if we have anchor on the url (calling from other page)
if(window.location.hash){
// smooth scroll to the anchor id
$('html,body').animate({
    scrollTop:$(window.location.hash).offset().top + 'px'
    },1000,'swing');
}
});
 /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});
//progress bar
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});