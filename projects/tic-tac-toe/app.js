
$(document).ready(function(){
	var turn = -1;
	//var $s1, $s2, $s3, $s4, $s5, $s6, $s7, $s8, $s9;
	var squares = [0,0,0,0,0,0,0,0,0,0];

	var name = {"1":"blue", "-1":"pink"};

	//blue fox collect 1 when clicked, pink fox gets -1 when clicked, square is default as 0 when unclicked

	var rows = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];

	function sumRows(){
		var temp = [];
		rows.forEach(function(combo){
			var score = 0;
			combo.forEach(function(pos){
				score += squares[pos];
			});
			temp.push(score);
		});
		return temp;
	}

	function testIfFilled(){
		return squares.reduce(function(acc, cur, idx){
			return idx !== 0 && cur === 0 ? false : acc;
		}, true);
	}

	function testIfFilled2(){
		return squares.slice(1).join("").indexOf("0") < 0;
	}


	function checkWinner(){
		var sums = sumRows();
		// if blue fox wins result = 1, if pink fix wins result = -1
		sums.forEach(function(score){
			if(score === 3){
				$("#message").empty();
				alert("Mr. Blue Fox is the Winner!");
			}
			if(score === -3){
				$("#message").empty();
				alert("Mr. Pink Fox is the Winner!");
			}
		});
		if(testIfFilled()&&result === 0){
				$("#message").empty();
				alert("Looks like we have a tie!");
		}
	}

	//start game
	$('#message').append("Mr. Pink Fox, please begin!");

	//when first square is clicked, show pink fox
	$("td").click(function(){
		var pos = parseInt(this.id[1]);
		if(squares[pos] !== 0){
			$('#message').empty().append("A Fox already lives here");
		}
		else{
			$("#s" + pos + " #" + name[turn] + "-fox").fadeIn("fast");
			squares[pos] = turn;
			turn = -turn;
			$("#message").empty().append("Mr. " + name[turn][0].toUpperCase() + name[turn].substring(1) + " Fox, it's your turn!");
			checkWinner();
		}
	});

});


