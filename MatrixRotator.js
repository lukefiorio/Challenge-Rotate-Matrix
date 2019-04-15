const Direction = require('./Direction').Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor(matrix) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction) {
    // do work here

    // make a dummy array to accept the rotated matrix values
    // make copy in a new object (rather than pointer to same object)
    let newArray = [];
    for (let row = 0; row < this.matrix.length; row++) {
      newArray[row] = this.matrix[row].slice();
    }

    if (direction === 'ClockWise') {
      for (let row = 0; row < this.matrix.length; row++) {
        for (let col = 0; col < this.matrix[0].length; col++) {
          let rowShift = col - row;
          let colShift = this.matrix.length - 1 - (col + row);
          newArray[row + rowShift][col + colShift] = this.matrix[row][col];
        }
      }
    } else if (direction === 'CounterClockWise') {
      for (let row = 0; row < this.matrix.length; row++) {
        for (let col = 0; col < this.matrix[0].length; col++) {
          let colShift = row - col;
          let rowShift = this.matrix.length - 1 - (col + row);
          newArray[row + rowShift][col + colShift] = this.matrix[row][col];
        }
      }
    }

    this.matrix = newArray;

    // must be a valid Direction, see Direction.js
  }
};
