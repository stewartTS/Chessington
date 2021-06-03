import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const ourPiece = this

        return board.findMoves(directions, location, ourPiece, board, 7)

    }
}