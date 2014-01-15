$(document).ready(function () {
	
	function roundHalf(num) {
    	num = Math.round(num*2)/2;
    	return num;
	}		
	
	function food(no_ppl, no_spiciness) {

		var spice_conf = (no_spiciness/10)+0.5; //izmedju 0.5 i 1.5 ovisno o omjeru
		var total_fish = (fish_pp*no_ppl).toFixed(1);
		var total_carp = (total_fish*(2/3)).toFixed(1);
		var total_catfish = (total_fish*(1/4)).toFixed(1);
		var total_pike = (total_fish*(1/12)).toFixed(1);
		var total_onion = roundHalf(no_ppl*(1/3));
		var total_tomato = (no_ppl*(0.15)).toFixed(1);
		var total_sPepper = (no_ppl*(0.15)).toFixed(1);
		var total_hPepper = (no_ppl*(0.03)*spice_conf).toFixed(1);
		var total_chilly = roundHalf(no_ppl*(0.25)*spice_conf);
		
		
		// a function that takes variables and outputs them in a list!
		$("#list_fish").text("Carp - " + total_carp + "");
		$("#list_fish").append("<br>Catfish - " + total_catfish + "kg");
		$("#list_fish").append("<br>Pike - " + total_pike + "kg");
		$("#list_fish").append("<br>Onion - " + total_onion + " pcs");
		$("#list_fish").append("<br>Tomato - " + total_tomato + "L");
		$("#list_fish").append("<br>Sweet pepper - " + total_sPepper + "kg");
		$("#list_fish").append("<br>Hot pepper - " + total_hPepper + "kg");
		$("#list_fish").append("<br>Chilly pepper - " + total_chilly + " pcs");

		
		// 0.3kg ribe
		// 0.2saran : 0.075som : 0.025stuka
		// 1/3 glavice luk
		// 0.15L kuhane rajcice
		// 0.03KG sitna ljuta paprika
		// 0.15KG sitna slatka paprika
		// 0.25 ljute papricice
		

		$("#out_fish .food").text("Looks like you need " + total_fish + "kg of fish! Make that " + total_carp + "kg of carp, " 
			+ total_catfish + "kg of catfish, and " +	total_pike + "kg of pike fish. ");
		$("#out_fish .food").append("Get about " + total_onion + " pieces of onion, " + total_tomato + "L of tomato sauce, " +
			total_sPepper + "kg of sweet pepper, " + total_hPepper + "kg of hot pepper, and " + total_chilly + " pieces of chilly pepper!");

	}

	function drink(no_ppl, no_nonalc) {
		var alcoholics = no_ppl - no_nonalc;
		var total_beer = roundHalf(beer_pp*alcoholics);
		var total_juice = roundHalf(juice_pp*no_nonalc);
		var total_water = roundHalf(water_pp*no_ppl);
		var total_wWine = roundHalf(wWine_pp*alcoholics);
		var total_mineral = roundHalf(mineral_pp*alcoholics);
		
		$("#list_fish").append("<br>");
		$("#list_fish").append("<br>Beer - " + total_beer + "L");
		$("#list_fish").append("<br>White wine - " + total_wWine + "L");	
		$("#list_fish").append("<br>Juice - " + total_juice + "L");	
		$("#list_fish").append("<br>Mineral water - " + total_mineral + "L");	
		$("#list_fish").append("<br>Water - " + total_water + "L");	
		
		
		$("#out_fish .drink").text("Fetch " + total_beer + "L of beer and " + total_wWine + "L of white wine. ");
		
		if (no_nonalc > 0) {		
			$("#out_fish .drink").append("You'll need " + total_juice + "L of juice to keep everybody happy. ");
			}

		$("#out_fish .drink").append("Don't forget to get in there at least " + total_mineral + "L of mineral and " + total_water 
			+ "L of natural water.");		

	}

	function tool(no_ppl) {
		var total_plates = Math.ceil(plates_pp*no_ppl);
		var total_cups = Math.ceil(cups_pp*no_ppl);
		var total_forks = Math.ceil(forks_pp*no_ppl); //using the number of forks for the spoons, sorry.
		
		$("#list_fish").append("<br>");
		$("#list_fish").append("<br>Plates - " + total_plates + " pcss");
		$("#list_fish").append("<br>Cups - " + total_cups + " pcs");
		$("#list_fish").append("<br>Forks - " + total_forks + " pcs");			
		
			
		$("#out_fish .tool").text("Finally, you will need about " + total_plates + " deep plastic plates, " + 
			total_cups + " plastic cups and " + total_forks + " spoons. ");
		$("#out_fish .tool").append("Bon Appetit!");
	}

	function fun() {
	}
	
	// output function calls food(), drink(), tool() and fun() priting functions
	function output(no_ppl, no_spiciness, no_nonalc) {
					
			if (parseInt(no_ppl) < parseInt(no_nonalc)) {
				$("#out_fish .food").text(no_ppl + " of you, and " + no_nonalc + " non alcoholics? Nope.");
				fish_clearer();			
			}		
													
			else {
				food(no_ppl, no_spiciness);
				drink(no_ppl, no_nonalc);
				tool(no_ppl);
				fun();
				$('#out_fish p').show();
				$('#out_fish').show('slow');
			}	
	}  
	  
  	/* fetching inputs from bbq form */
  	$("#inq_fish form").on("submit", function(event) {
 		event.preventDefault();
  		var no_ppl = $("#inq_fish #no_ppl").val(); //number of people
  		var no_spiciness = $("#inq_fish #no_spiciness").val(); //amount of spiciness
  		var no_nonalc = $("#inq_fish #no_nonalc").val(); //number of non alcoholics
		
		output(no_ppl, no_spiciness, no_nonalc);
  	});
  	
  	// clear all the text fields
  	function fish_clearer() {
		$("#out_fish .drink").text("");
		$("#out_fish .tool").text("");
		$("#out_fish .fun").text("");
		$("#list_fish").text("");
		$('#out_fish p').show();
		$('#out_fish').show('slow');  	
  	}
  
});

  