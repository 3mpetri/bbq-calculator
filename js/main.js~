$(document).ready(function () {
	/* hide the forms
	$('#inq').find('div').hide();*/
	
	/* global variables, pp - per person*/	
	/* food */
	meat_pp = 0.4; //kg
	fish_pp = 0.3; //kg	
	
	bread_pp = 0.2; //kg
	mushroom_pp = 0.075; //kg
	cheese_pp = 0.04; //kg
	tomato_pp = 0.75; //piece
	onion_pp = 0.4; //piece
	paprika_pp = 0.5; //piece
	sourcream_pp = 0.1; //kg
	ajvar_pp = 0.1; //kg
	eggplant_pp = 0.4; //piece
	zucchini_pp = 0.6; //piece

	/* drinks */
	soft_alc_pp = 1.5; //L
	hard_alc_pp = 0.2; //L
	beer_pp = 1.5; //L
	rWine_pp = 0.4; //L
	wWine_pp = 0.4; //L
	water_pp = 0.75; //L
	juice_pp = 0.5; //L
	cola_pp = 0.2; //%bWine
	mineral_pp = 0.2; //%wWine
	
	/* tools */
	plates_pp = 1.5; //piece
	cups_pp = 1.5; //piece
	forks_pp = 1.5; //piece
	napkins_pp = 3; //piece
	saladBowl_pp = 0.2; //piece
		
	/* fun */
	guitar = 1;
	frisbee = 1;
	ball = 1;

	/* toggle input forms depending on navigation selection */
	/*	
	$('#link_bbq').click(function () {
		$('#inq_bbq').toggle('slow');
		return false;
	});
	*/
	
	$('#nav a').click(function(event){
      event.preventDefault();
      $('#out_bbq').hide('slow');
      $('#out_cobi').hide('slow');
		$('#out_fish').hide('slow');
      var page = $(this).text().toLowerCase();
      var hidden = $('[id="inq_'+page+'"]').is(':hidden');
		if (hidden) {      
      	$('#inq').find('div').hide();
			}      
      $('[id="inq_'+page+'"]').slideToggle('slow');  
   });
   
   $('.show_list a').click(function () {
		//magic happens here
		var id = $(this).parent().parent().attr('id');
		fin = id.length;	
		id = id.substr(4,fin);
		$('[id="list_'+id+'"]').slideToggle('slow');
		return false;
	});
      
})