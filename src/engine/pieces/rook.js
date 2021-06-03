import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];


        for (let i = 1; this.checkIfOnBoard(location.row, location.col + i); i++) {
           const square = Square.at(location.row, location.col + i);
            if (board.getPiece(square)) {
                if(this.player == (board.getPiece(square)).player || (board.getPiece(square) instanceof King)) {
                    break;
                }
                moves.push(square);
                break;
            } 
            moves.push(square); 
        }

        for (let i = 1; this.checkIfOnBoard(location.row + i, location.col); i++) {
            const square = Square.at(location.row + i, location.col);
            if (board.getPiece(square)) {
                if(this.player == (board.getPiece(square)).player || (board.getPiece(square) instanceof King)) {
                    break;
                }
                moves.push(square);
                break;
            } 
            moves.push(square); 
        }


        for (let i = 1;this.checkIfOnBoard(location.row, location.col - i); i++) {
            const square = Square.at(location.row, location.col - i);
            if (board.getPiece(square)) {
                if(this.player == (board.getPiece(square)).player || (board.getPiece(square) instanceof King)) {
                    break;
                }
                moves.push(square);
                break;
            } 
            moves.push(square); 
        }

        for (let i = 1; this.checkIfOnBoard(location.row - i, location.col); i++) {
            const square = Square.at(location.row - i, location.col);
            if (board.getPiece(square)) {
                if(this.player == (board.getPiece(square)).player || (board.getPiece(square) instanceof King)) {
                    break;
                }
                moves.push(square);
                break;
            } 
            moves.push(square); 
        }

        //const legalMoves = moves.filter(move => move.row > -1 && move.row < 8 && move.col > -1 && move.col < 8);
        return moves;
    }
}
