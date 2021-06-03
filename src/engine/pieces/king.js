import Square from '../square';
import Piece from './piece';
import Rook from './rook';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const directions = [[1, 1], [-1, 1], [1, -1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]]; 
        const ourPiece = this

        // // const allMoves = board.findMoves(directions, location, ourPiece, board, 1);
        // // allMoves.forEach(move => {

            
        // });


        //console.log(board);
        return board.findMoves(directions, location, ourPiece, board, 1);
       
    }
}