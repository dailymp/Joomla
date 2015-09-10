
/***************************************************************************************/
/*
/*		Designed by 'AS Designing'
/*		Web: http://www.asdesigning.com
/*		Email: info@asdesigning.com
/*		License: GNU/GPL
/*
/**************************************************************************************/

var asjQuery = jQuery.noConflict();

asjQuery(window).load(function() 
{
	asjQuery("#phocagallery-module-ri").css("margin", "0px auto");	
	asjQuery(".menu li").fadeIn(1);	
});

	
asjQuery(document).ready(function()
{
	asjQuery('#mainmenu ul li.deeper').hover(
		function() {
			asjQuery(this).addClass("actives");
			asjQuery(this).find('>ul').stop(false, true).fadeIn();
			asjQuery(this).find('>ul ul').stop(false, true).fadeOut('fast');
		},
		function() {
			asjQuery(this).removeClass("actives");        
			asjQuery(this).find('ul').stop(false, true).fadeOut('fast');
		}
	);
});

