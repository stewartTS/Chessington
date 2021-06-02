import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);

        let moves = [];
        for (let i = 1; i < 8; i++) {     
            const locationRow = location.row + i
            const locationCol = location.col + i
            const locationRow2 = location.row - i
            const locationCol2 = location.col - i

            if (locationRow < 8 && locationCol < 8) {
                moves.push(Square.at(locationRow, locationCol));  
            }
            if (locationRow < 8 && locationCol2 > -1) {
                moves.push(Square.at(locationRow, locationCol2));  
            }
            if (locationRow2 > -1 && locationCol2 > -1) {
                moves.push(Square.at(locationRow2, locationCol2));
            }
            if (locationRow2 > -1 && locationCol < 8) {
                moves.push(Square.at(locationRow2, locationCol));
            }
        }
        return moves;
    }
}
