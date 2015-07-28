$(document).ready(function() {

board = $('#board');
console.log(board);

tile = '<div class="tile" id="tile_0"></div>'

reduct = function(a,b) {
	return a + b;
}

tileLoop = function (num) {
	var rebuiltString = ""
	for (var i = 0; i < num.length; i++) {
		if (num[i] === "0") {
			num[i] = i;
		console.log(num[i]);

		}
	};
}

$('#startGame').click(function() {
	console.log('Submit Clicked');
	var tileValue = parseInt($('#gridLevel').val());
	createBoard(tileValue);
})
// VISUAL ABOVE



// LOGIC BELOW

function createBoard(gridSize) {
	 realGameHolderRow = []
	 realGameHolder = []
	
	// create row Array
	var row = [];

	// create array of row's
	var grid = []
	
	// bomb count based of of gridsize, for now need to look at %
	var bombCount = gridSize;
	

	// defualt bomb count, B = bomb placement
	for (var i = 0; i < gridSize; i++) {
		row.push(0);
		grid.push(row);

	};

	console.log(grid);

		for (var i = 0; i < (gridSize * 10); i++) {
			if (i % gridSize == 0){
				if (i == !0) {
		realGameHolder.push("<br>");
		console.log('Added LineBreak ---------------')		
			}
		
			} else {
				realGameHolder.push(tile);
				console.log('Added tile ---------------')
			}
	};


		var	tileDims = parseInt($('#board').css("width")) / gridSize;
		console.log("-------------------->>>>>>>")
		console.log(tileDims)
		
		$(board).html(realGameHolder);
		$('.tile').css("width", tileDims);
		$('.tile').css("height", tileDims);
		// Attaches Click handlers after tils are created

			$('.tile').click(function() {
			console.log('Tile Clicked');
			console.log($(this));
	
				})
		
		
	// for (var i = 0; i < gridSize; i++) {

	// 	grid.push(row);
		
	// };
// console.log("Completed Grid ------------------");
// console.log(grid);
// console.log("Completed Grid ------------------");


	// var	whileCounter = 0;	
	// 		// console.log("placeBombs ------------------");
	// 	while (bombCount > 0) {
	// 		whileCounter++;

	// 		//  Math.floor(Math.random() * (max - min + 1)) + min;
	// 	var x = Math.floor(Math.random() * (gridSize - 0 + 1)) + 0;
	// 	var y = Math.floor(Math.random() * (gridSize - 0 + 1)) + 0;
		
	// 	console.log("This is X! "+x);
	// 	console.log("This is Y! "+y);

	// 	console.log("Bomb Count "+ bombCount)
	// 	console.log("While Count "+ whileCounter)
	// 	if (grid[x][y]) {
	// 		grid[x][y] = "BOMB"
	// 		bombCount--;
	// 	}
	// }



	return grid;
}

function placeBombs (grid) {
	var x = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
	var y = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
			

	while (bombCount < gridSize) {

	}
};


// function createGame(gridSize) {
// 	var row = [];
// 	// create row Array
// 	var grid = []
// 	// create array of row's
// 	var bombCount = gridSize;
// 	for (var i = 0; i < gridSize; i++) {
// 		var isBomb = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
		
// 			console.log(isBomb)

// 		if (isBomb % 2 === 0) {
// 			if (bombCount > 0) {
// 				row.push("BOMB");
// 				bombCount -=1;
// 			};

// 		} else {
// 		row.push("X");
// 		}		

// 	grid.push(row);
// 	console.log(grid);
// };

// 	return grid;
// }

  //javaScript Here
});