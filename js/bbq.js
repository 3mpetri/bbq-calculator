$(document).ready(function () {
	
	function roundHalf(num) {
    		num = Math.round(num*2)/2;
    		return num;
		}		
	
	/* function for printing bbq food */
	function food(meat_eating_people, no_ppl, veg_conf, no_ajvarcream, no_veg) {
		var total_meat = (meat_pp*meat_eating_people).toFixed(1);
		var total_bread = roundHalf(bread_pp*no_ppl);
		var total_onion = Math.ceil(onion_pp*no_ppl);
		var total_mushroom = (mushroom_pp*no_ppl*veg_conf).toFixed(1);
		var total_cheese = (cheese_pp*no_ppl*veg_conf).toFixed(1);
		var total_tomato = Math.ceil(tomato_pp*no_ppl*veg_conf);
		var total_paprika = Math.ceil(paprika_pp*no_ppl*veg_conf);
		var coef_cream = (10 - no_ajvarcream)/10;		
		var coef_ajvar = no_ajvarcream/10;
		var total_sourcream = (sourcream_pp*no_ppl*coef_cream).toFixed(1);
		var total_ajvar = (ajvar_pp*no_ppl*coef_ajvar).toFixed(1);
		var total_eggplant = Math.ceil(eggplant_pp*(no_veg));
		var total_zucchini = Math.ceil(zucchini_pp*(no_veg));
		
		// a function that takes variables and outputs them in a list!
		$("#list_bbq").text("Meat - " + total_meat + "kg");
		$("#list_bbq").append("<br>Bread - " + total_bread + "kg");
		$("#list_bbq").append("<br>Mushroom - " + total_mushroom + "kg");
		$("#list_bbq").append("<br>Cheese - " + total_cheese + "kg");
		$("#list_bbq").append("<br>Tomato - " + total_tomato + " pcs");
		$("#list_bbq").append("<br>Onion - " + total_onion + " pcs");
		$("#list_bbq").append("<br>Paprika - " + total_paprika + " pcs");
		$("#list_bbq").append("<br>Eggplant - " + total_eggplant + " pcs");
		$("#list_bbq").append("<br>Zucchini - " + total_zucchini + " pcs");
		$("#list_bbq").append("<br>Sour cream - " + total_sourcream + "kg");
		$("#list_bbq").append("<br>Ajvar - " + total_ajvar + "kg");
		
		
		
		if (meat_eating_people == 0) {
			$("#out_bbq .food").text("Barbecue with no meat? You need better friends.");		
		}	
		else {
			$("#out_bbq .food").text("You need around " + total_meat + "kg of meat for " + 
			meat_eating_people + " meat eating people! ");
		}
		$("#out_bbq .food").append("You also need about " + total_bread + "kg of bread. ");
		$("#out_bbq .food").append("Surely, you better get " + total_mushroom + "kg of mushrooms, " + 
			total_cheese + "kg of cheese, " + total_tomato + " pieces of tomato, " + 
			total_onion + " pieces of onions, and " +
			total_paprika + " pieces of paprika to go along with all that food! ");
		if (no_veg > 0) {		
			$("#out_bbq .food").append("For team veggie, throw in " + total_eggplant + " eggplants and " + 
				total_zucchini + " zucchini! ");
		}
		$("#out_bbq .food").append("Finally, might as well get " + total_sourcream + 
			" kg of sour cream and " + total_ajvar + "kg of ajvar. Everybody loves those!");
	}

	/* function for printing bbq drink */
	function drink(no_ppl, no_nonalc, no_redwhite, powerup) {
		var alcoholics = no_ppl - no_nonalc;
		var total_beer = (beer_pp*alcoholics).toFixed(1);
		var wine_coef = no_redwhite/10;		
		var total_rWine = (rWine_pp*alcoholics*(1-wine_coef)).toFixed(1);
		var total_wWine = (wWine_pp*alcoholics*wine_coef).toFixed(1);
		var total_cola = (cola_pp*alcoholics + (0.4*total_rWine)).toFixed(1);
		var total_mineral = (mineral_pp*alcoholics + (0.4*total_wWine)).toFixed(1);
		var total_juice = (juice_pp*no_nonalc).toFixed(1);
		var total_water = (water_pp*no_ppl).toFixed(1);
		
		if (powerup) {
		total_beer = (total_beer*2).toFixed(1);
		total_rWine = (total_rWine*2).toFixed(1);	
		total_wWine = (total_wWine*2).toFixed(1);					
		}
		
		// a function that takes variables and outputs them in a list
		$("#list_bbq").append("<br>");
		$("#list_bbq").append("<br>Beer - " + total_beer + "L");
		$("#list_bbq").append("<br>Red wine - " + total_rWine + "L");
		$("#list_bbq").append("<br>White wine - " + total_wWine + "L");
		$("#list_bbq").append("<br>Cola - " + total_cola + "L");
		$("#list_bbq").append("<br>Mineral water - " + total_mineral + "L");
		$("#list_bbq").append("<br>Natural water - " + total_water + "L");
		$("#list_bbq").append("<br>Juice - " + total_juice + "L");
		
		$("#out_bbq .drink").text("Getting to the good stuff. " + total_beer + "L of beer please. ");
		$("#out_bbq .drink").append("Throw in there " + total_rWine + "L of red and " + 
			total_wWine + "L of white wine (it'll go great with all that cheese). ");
		$("#out_bbq .drink").append("Definitely get at least " + total_cola + "L of Cola and " +
			total_mineral + "L of mineral water. ");
		$("#out_bbq .drink").append("NEVER forget water. " + total_water + "L of it. ");
		
		if (no_nonalc > 0) {		
		$("#out_bbq .drink").append("For all the sissies - " + total_juice + "L of juice.");
		}
	}

	/* function for printing tools */
	function tool(no_ppl) {
		var total_plates = Math.ceil(plates_pp*no_ppl);
		var total_cups = Math.ceil(cups_pp*no_ppl);
		var total_forks = Math.ceil(forks_pp*no_ppl);
		var total_saladBowl = Math.ceil(saladBowl_pp*no_ppl);
		
		// a function that takes variables and outputs them in a list!
		$("#list_bbq").append("<br>");
		$("#list_bbq").append("<br>Plates - " + total_plates + " pcs");
		$("#list_bbq").append("<br>Cups - " + total_cups + " pcs");
		$("#list_bbq").append("<br>Forks - " + total_forks + " pcs");
		$("#list_bbq").append("<br>Salad bowls - " + total_saladBowl + " pcs");
		
		$("#out_bbq .tool").text("Finally, you will need about " + total_plates + " paper plates, " + 
			total_cups + " plastic cups, " + total_forks + " plastic forks and " + 
			total_saladBowl + " Salad bowls. ");
		$("#out_bbq .tool").append("Don't forget all the bbq tools, enough wood, paper and coal, and big metal pot for the meat.");
	}

	function fun() {
		$("#out_bbq .fun").text("Bring some guitars, frisbee, a ball for soccer and volleyball, and.. have fun! :)");
	}

	/* function for calling outputs */
	function output(no_ppl, no_veg, no_nonalc, no_ajvarcream, no_redwhite, powerup) {
		var meat_eating_people = no_ppl - no_veg;
				
					
		if (no_veg > 0.2*no_ppl) {
						
			var veg_conf = (no_veg/no_ppl)+1; //izmedju 1 i 2 ovisno o omjeru
		}
		else {
			var veg_conf = 1;
		}
			
		if(parseInt(no_ppl) < parseInt(no_nonalc)){
			$("#out_bbq .food").text(no_ppl + " of you, and " + no_nonalc + " non alcoholics? Nope.");
			bbq_clearer();
		}		
			
		else if (meat_eating_people > 0) {
			food(meat_eating_people, no_ppl, veg_conf, no_ajvarcream, no_veg);
			drink(no_ppl, no_nonalc, no_redwhite, powerup);
			tool(no_ppl);
			fun();
			$('#out_bbq p').show();
			$('#out_bbq').show('slow');
		}
	
		else if (meat_eating_people == 0){
			$("#out_bbq .food").text("Kidding?");
			bbq_clearer();
		}		
		
		else {
			$("#out_bbq .food").text("More vegetarians than people in total? The end is near.");
			bbq_clearer();
		}
	}
  
  	/* fetching inputs from bbq form */
  	$("#inq_bbq form").on("submit", function(event) {
 		event.preventDefault();
  		var no_ppl = $("#inq_bbq #no_ppl").val(); //number of people
  		var no_veg = $("#inq_bbq #no_veg").val(); //number of vegetarians
  		var no_nonalc = $("#inq_bbq #no_nonalc").val(); //number of non alcoholics
  		var no_ajvarcream = $("#inq_bbq #no_ajvarcream").val(); //sour cream to ajvar preference
		var no_redwhite = $("#inq_bbq #no_redwhite").val(); //white wine to red wine preference
		
		var powerup = false;				
		if ($('#inq_bbq #powerup').is(':checked')) {var powerup = true;}
		
		output(no_ppl, no_veg, no_nonalc, no_ajvarcream, no_redwhite, powerup);

  	});
  	
  	// clear all the text fields
  	function bbq_clearer() {
		$("#out_bbq .drink").text("");
		$("#out_bbq .tool").text("");
		$("#out_bbq .fun").text("");
		$("#list_bbq").text("");
		$('#out_bbq p').show();
		$('#out_bbq').show('slow');  	
  	}
  
});

  