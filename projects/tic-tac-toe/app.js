
$(document).ready(function(){
	var turn = 0;
	var $s1, $s2, $s3, $s4, $s5, $s6, $s7, $s8, $s9;

	function checkWinner(){
	//append message to announce winner
		if($s1 + $s2 + $s3 == 3
			||$s4 + $s5 + $s6 == 3
			||$s7 + $s8 + $s9 == 3
			||$s1 + $s5 + $s9 == 3
			||$s3 + $s5 + $s7 == 3
			||$s1 + $s4 + $s7 == 3
			||$s2 + $s5 + $s8 == 3
			||$s3 + $s6 + $s9 == 3){
			$("#message").empty();
			alert("Mr. Blue Fox is the Winner!");
		}
		if($s1 + $s2 + $s3 == 0
			||$s4 + $s5 + $s6 == 0
			||$s7 + $s8 + $s9 == 0
			||$s1 + $s5 + $s9 == 0
			||$s3 + $s5 + $s7 == 0
			||$s1 + $s4 + $s7 == 0
			||$s2 + $s5 + $s8 == 0
			||$s3 + $s6 + $s9 == 0){
			$("#message").empty();
			alert("Mr. Pink Fox is the Winner!");
		}
		//append message if it is a tie
		else if($("#s1").hasClass("filled")
			&& $("#s2").hasClass("filled")
			&& $("#s3").hasClass("filled")
			&& $("#s4").hasClass("filled")
			&& $("#s5").hasClass("filled")
			&& $("#s6").hasClass("filled")
			&& $("#s7").hasClass("filled")
			&& $("#s8").hasClass("filled")
			&& $("#s9").hasClass("filled")){
			$("#message").empty();
			alert("Looks like we have a tie!");
		}
	}

	//start game
	$('#message').append("Mr. Pink Fox, please begin!");

	//when first square is clicked, show pink fox
	$("#s1").click(function(){
		if($(this).hasClass("filled")){
			$('#message').empty().append("A Fox already lives here");
		}
		else if(turn === 0 && !$(this).hasClass("filled")){
			//when first square is clicked, show pink fox
			$("#s1 #pink-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 1;
			$s1 = 0;
			$("#message").empty().append("Mr. Blue Fox, it's your turn!");
			//check each turn to see if we have a winner
			checkWinner();
		}
		else if(turn === 1 && !$(this).hasClass("filled")){
			//switch player, when the next square is clicked, show opposite color fox
			$("#s1 #blue-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 0;
			$s1 = 1;
			$("#message").empty().append("Mr. Pink Fox, it's your turn!");
			checkWinner();
		}
	});

	$("#s2").click(function(){
		if($(this).hasClass("filled")){
			$('#message').empty().append("A Fox already lives here");
		}
		else if(turn === 0 && !$(this).hasClass("filled")){
			$("#s2 #pink-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 1;
			$s2 = 0;
			$("#message").empty().append("Mr. Blue Fox, it's your turn!");
			checkWinner();
		}
		else if(turn === 1 && !$(this).hasClass("filled")){
			$("#s2 #blue-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 0;
			$s2 = 1;
			$("#message").empty().append("Mr. Pink Fox, it's your turn!");
			checkWinner();
		}
	});

	$("#s3").click(function(){
		if($(this).hasClass("filled")){
			$('#message').empty().append("A Fox already lives here");
		}
		else if(turn === 0 && !$(this).hasClass("filled")){
			$("#s3 #pink-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 1;
			$s3 = 0;
			$("#message").empty().append("Mr. Blue Fox, it's your turn!");
			checkWinner();
		}
		else if(turn === 1 && !$(this).hasClass("filled")){
			$("#s3 #blue-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 0;
			$s3 = 1;
			$("#message").empty().append("Mr. Pink Fox, it's your turn!");
			checkWinner();
		}
	});

	$("#s4").click(function(){
		if($(this).hasClass("filled")){
			$('#message').empty().append("A Fox already lives here");
		}
		else if(turn === 0 && !$(this).hasClass("filled")){
			$("#s4 #pink-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 1;
			$s4 = 0;
			$("#message").empty().append("Mr. Blue Fox, it's your turn!");
			checkWinner();
		}
		else if(turn === 1 && !$(this).hasClass("filled")){
			$("#s4 #blue-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 0;
			$s4 = 1;
			$("#message").empty().append("Mr. Pink Fox, it's your turn!");
			checkWinner();
		}
	});

	$("#s5").click(function(){
		if($(this).hasClass("filled")){
			$('#message').empty().append("A Fox already lives here");
		}
		else if(turn === 0 && !$(this).hasClass("filled")){
			$("#s5 #pink-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 1;
			$s5 = 0;
			$("#message").empty().append("Mr. Blue Fox, it's your turn!");
			checkWinner();
		}
		else if(turn === 1 && !$(this).hasClass("filled")){
			$("#s5 #blue-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 0;
			$s5 = 1;
			$("#message").empty().append("Mr. Pink Fox, it's your turn!");
			checkWinner();
		}
	});

	$("#s6").click(function(){
		if($(this).hasClass("filled")){
			$('#message').empty().append("A Fox already lives here");
		}
		else if(turn === 0 && !$(this).hasClass("filled")){
			$("#s6 #pink-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 1;
			$s6 = 0;
			$("#message").empty().append("Mr. Blue Fox, it's your turn!");
			checkWinner();
		}
		else if(turn === 1 && !$(this).hasClass("filled")){
			$("#s6 #blue-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 0;
			$s6 = 1;
			$("#message").empty().append("Mr. Pink Fox, it's your turn!");
			checkWinner();
		}
	});

	$("#s7").click(function(){
		if($(this).hasClass("filled")){
			$('#message').empty().append("A Fox already lives here");
		}
		else if(turn === 0 && !$(this).hasClass("filled")){
			$("#s7 #pink-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 1;
			$s7 = 0;
			$("#message").empty().append("Mr. Blue Fox, it's your turn!");
			checkWinner();
		}
		else if(turn === 1 && !$(this).hasClass("filled")){
			$("#s7 #blue-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 0;
			$s7 = 1;
			$("#message").empty().append("Mr. Pink Fox, it's your turn!");
			checkWinner();
		}
	});

	$("#s8").click(function(){
		if($(this).hasClass("filled")){
			$('#message').empty().append("A Fox already lives here");
		}
		else if(turn === 0 && !$(this).hasClass("filled")){
			$("#s8 #pink-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 1;
			$s8 = 0;
			$("#message").empty().append("Mr. Blue Fox, it's your turn!");
			checkWinner();
		}
		else if(turn === 1 && !$(this).hasClass("filled")){
			$("#s8 #blue-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 0;
			$s8 = 1;
			$("#message").empty().append("Mr. Pink Fox, it's your turn!");
			checkWinner();
		}
	});

	$("#s9").click(function(){
		if($(this).hasClass("filled")){
			$('#message').empty().append("A Fox already lives here");
		}
		else if(turn === 0 && !$(this).hasClass("filled")){
			$("#s9 #pink-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 1;
			$s9 = 0;
			$("#message").empty().append("Mr. Blue Fox, it's your turn!");
			checkWinner();
		}
		else if(turn === 1 && !$(this).hasClass("filled")){
			$("#s9 #blue-fox").fadeIn("fast");
			$(this).addClass("filled");
			turn = 0;
			$s9 = 1;
			$("#message").empty().append("Mr. Pink Fox, it's your turn!");
			checkWinner();
		}	
	});

});


