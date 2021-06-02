import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];
        for (let i = 1; i < 8; i++) {
            const locationRow = location.row + i
            const locationCol = location.col + i
            const locationRow2 = location.row - i
            const locationCol2 = location.col - i

            moves.push(Square.at(locationRow, locationCol));
            moves.push(Square.at(locationRow, locationCol2));
            moves.push(Square.at(locationRow2, locationCol2));
            moves.push(Square.at(locationRow2, locationCol));

        }
        const legalMoves = moves.filter(move => move.row > -1 && move.row < 8 && move.col > -1 && move.col < 8)
        return legalMoves;
    }
}
