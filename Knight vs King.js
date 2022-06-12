// You put a Knight and a King in the board.

// Complete the method that tell us which one can capture the other one.

// You are provided with two object array; each contains an integer (the rank, first item) and a string/char (the file, second item) to show the position of the pieces in the chess board.

// Return:

// "Knight" if the knight is putting the king in check,
// "King" if the king is attacking the knight
// "None" if none of the above occur

function knightVsKing(knP, kiP) {
    var dx = Math.abs(knP[0]-kiP[0]);
    var dy = Math.abs(knP[1].charCodeAt(0)-kiP[1].charCodeAt(0));
    if (dx<2 && dy<2) return "King";
    if (dx+dy==3 && dx*dy>0) return "Knight";
    return "None"; 
   }