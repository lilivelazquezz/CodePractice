var rotate = function (matrix) {
    let index = 1
    let outerIndex = 0
    let maxIndex = matrix.length - 1
    matrix.reverse();

     while(outerIndex < matrix.length) {
        while(index <= maxIndex) {
            let swapVal = matrix[index][outerIndex] // 13
            matrix[index][outerIndex] = matrix[outerIndex][index] //14; 
            matrix[outerIndex][index] = swapVal //13
            index++
        }
        outerIndex++
        index=outerIndex
        
     }
     console.log(matrix);
    }

    //rotate([[1,2,3],[4,5,6],[7,8,9]]);
    //Output: [[7,4,1],[8,5,2],[9,6,3]]
    
    rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]);
    //Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
