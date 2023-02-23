/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function (matrix) {
  //console.log(matrix);
  let newArray = matrix;
  let counter = 0;
  let finalArray = [];
  let newNumbers = [];

  /*
    console.log(matrix[2][0] + " IS 7");
    console.log(matrix[1][0] + " IS 4");
    console.log(matrix[0][0] + " IS 1");

    console.log(matrix[2][1] + " IS 8");
    console.log(matrix[1][1] + " IS 5");
    console.log(matrix[0][1] + " IS 2");

    console.log(matrix[2][2] + " IS 9");
    console.log(matrix[1][2] + " IS 6");
    console.log(matrix[0][2] + " IS 3");
    */

  for (let j = 0; j < newArray.length; j++) {
    for (let i = newArray.length - 1; i > -1; i--) {
      // console.log(newArray[i][j]);
      counter++;
      if (counter === matrix.length) {
        counter = 0;
      }
      finalArray.push(newArray[i][j]);
      //console.log(counter + " this is counter");
    }
  }

  //console.log(matrix[0].length);
  for (let i = 0; i < matrix[0].length; i++) {
    newNumbers.push(finalArray.splice(0, matrix[0].length));
  }
  console.log(newNumbers);
};

rotate([[1, 2, 3],[4, 5, 6],[7, 8, 9],]);
//Output: [[7,4,1],[8,5,2],[9,6,3]]

//rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]);
//Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
