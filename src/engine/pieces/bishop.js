import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const directions = [[1, 1], [-1, 1], [1, -1], [-1, -1]]; 
        const ourPiece = this

        return board.findMoves(directions, location, ourPiece, board, 7)    
       
    }

    // getAvailableMoves(board) {
        
    //     const location = board.findPiece(this);
    //     const moves = [];

    //     for (let i = 1; this.checkIfOnBoard(location.row + i, location.col + i); i++) {
    //         if (board.getPiece(Square.at(location.row + i, location.col + i))) {
    //             break;
    //         }
    //         moves.push(Square.at(location.row + i, location.col + i));
    //     }

    //     for (let i = 1; this.checkIfOnBoard(location.row + i, location.col - i); i++) {
    //         if (board.getPiece(Square.at(location.row + i, location.col - i))) {
    //             break;
    //         }
    //         moves.push(Square.at(location.row + i, location.col - i));
    //     }

    //     for (let i = 1; this.checkIfOnBoard(location.row - i, location.col - i); i++) {
    //         if (board.getPiece(Square.at(location.row - i, location.col - i))) {
    //             break;
    //         }
    //         moves.push(Square.at(location.row - i, location.col - i));
    //     }

    //     for (let i = 1; this.checkIfOnBoard(location.row - i, location.col + i); i++) {
    //         if (board.getPiece(Square.at(location.row - i, location.col + i))) {
    //             break;
    //         }
    //         moves.push(Square.at(location.row - i, location.col + i));
    //     }
    //     return moves;
    // }
}
