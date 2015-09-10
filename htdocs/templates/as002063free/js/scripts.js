
/***************************************************************************************/
/*
/*		Designed by 'AS Designing'
/*		Web: http://www.asdesigning.com
/*		Email: info@asdesigning.com
/*		License: GNU/GPL
/*
/**************************************************************************************/

var asjQuery = jQuery.noConflict();

/************************************/
/*		Toggling					*/

asjQuery(document).ready(function() 
{
	asjQuery('ul li:last-child').addClass('lastItem');
	asjQuery('ul li:first-child').addClass('firstItem');

	asjQuery('*[rel=tooltip]').tooltip()
	asjQuery('*[rel=popover]').popover()
	asjQuery('.tip-bottom').tooltip(
	{placement: "bottom"});


	//************************************
	// Modal Window
	//************************************
	asjQuery('[href="#modal"]').click(function()
	{
		asjQuery('#modal').modal('toggle');
	});
	
	asjQuery('#modal button.modalClose').click(function()
	{
		asjQuery('#modal').modal('hide');
	});
	
	
	//************************************
	// Initialize the gallery touch
	//************************************
	asjQuery('a.touchGalleryLink').touchTouch();
	
	
	//************************************
	// Dropdown icons
	//************************************
	asjQuery('.dropdown-toggle').dropdown()
	
	
	//************************************
	// Gallery Hover Animation
	//************************************
	jQuery('a.zoom').hover(function()
	{
		asjQuery(this).find('span.zoom-bg').stop(true, true).animate({opacity: 0.7}, 100);
		asjQuery(this).find('span.zoom-icon').stop(true, true).animate({top:'50%'}, 100);
		},function(){
		asjQuery(this).find('span.zoom-bg').stop(true, true).animate({opacity: 0}, 100);
		asjQuery(this).find('span.zoom-icon').stop(true, true).animate({top:'-50%'}, 100);
	});
	
	
	//************************************
	// Hide #back-top first
	//************************************
	asjQuery("#back-top").hide();
		
		
	//************************************
	// Fade in #back-top
	//************************************		
	asjQuery(function () 
	{
		asjQuery(window).scroll(function () 
		{
			if (jQuery(this).scrollTop() > 100) 
			{
				asjQuery('#back-top').fadeIn();
			} 
			else 
			{
				asjQuery('#back-top').fadeOut();
			}
		});
	
		//************************************
		// Scroll body to 0px on click
		//************************************	
		asjQuery('#back-top a').click(function () 
		{
			asjQuery('body,html').animate(
			{
				scrollTop: 0
			}, 400);
			return false;
		});
	});
	
	
	//************************************
	// Pagination Active Button
	//************************************
	asjQuery('div.pagination ul li:not([class])').addClass('num');
	
	asjQuery(function()
	{
		//************************************
		// IPad/IPhone
		//************************************		
		var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
		ua = navigator.userAgent,
		
		gestureStart = function () 
		{
			viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
		},
		
		scaleFix = function () 
		{
			if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) 
			{
				viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
			}
		};
		scaleFix();
	});
		
	asjQuery('a.dropdown-toggle, .dropdown-menu a').on('touchstart', function(e) 
	{
		e.stopPropagation();
	});
		
});
	
	
	
