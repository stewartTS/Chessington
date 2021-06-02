import Square from '../square';
import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const allMoves = [];
        
        // for (let i = 0; i < 8; i++) {
        //     if (i !== location.col) {
        //         allMoves.push(Square.at(location.row, i));
        //     }
        //     if (i !== location.row) {
        //         allMoves.push(Square.at(i, location.col));
        //     }
        // }

        for (let i = 1; i < 8; i++) {
            const locationRowPlus = location.row + i
            const locationRowMinus = location.row - i
            const locationColPlus = location.col + i
            const locationColMinus = location.col - i

            allMoves.push(Square.at(locationRowPlus, locationColPlus));
            allMoves.push(Square.at(locationRowPlus, locationColMinus));
            allMoves.push(Square.at(locationRowMinus, locationColMinus));
            allMoves.push(Square.at(locationRowMinus, locationColPlus));
            
            allMoves.push(Square.at(locationRowPlus, location.col));
            allMoves.push(Square.at(locationRowMinus, location.col));
            allMoves.push(Square.at(location.row, locationColPlus));
            allMoves.push(Square.at(location.row, locationColMinus));


        }
        const legalMoves = allMoves.filter(move => move.row > -1 && move.row < 8 && move.col > -1 && move.col < 8)
        return legalMoves;
    }
}
