
// let matrix = [[1, 2, 3], [4, ' ', 5], [7, 8, 6]]
let Goalmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, ' ']]
class SampleSpace {
    constructor(matrix, sp, root) {
        this.root = root;
        this.matrix = matrix;
        this.sp = sp;
    }
}

let path = [];
let node = new SampleSpace([[1, 2, 3], [4, ' ', 5], [7, 8, 6]], [2, 2], null)
path.push([[[1, 2, 3], [4, ' ', 5], [7, 8, 6]]])
let check = (matrix) => {

    let sp;
    let count = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matrix[i][j] == ' ') {
                sp = [i, j]
                continue
            }
            if (matrix[i][j] != Goalmatrix[i][j]) count++

        }
    }
    if (count == 0) {
        return 0
    }
    return count 
}
let stat=(matrix)=>{
    path.forEach((arr)=>{
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(matrix[i][j] != arr[i][j]) return false
            }
        }
    })
    return true


}
let m = (node) => {
    let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrix[i][j] = node.matrix[i][j]
        }
    }
    return matrix;
}
let best = (node) => {
    let newArr;
    
    let count = 0;
    if (node.sp[0] - 1 >= 0) {
        let arr = m(node)
        // arr = matrix;
        let val = arr[node.sp[0] - 1][node.sp[1]]
        arr[node.sp[0]][node.sp[1]] = val;
        arr[node.sp[0] - 1][node.sp[1]] = ' '
        if(stat(arr)){
            let temp=check(arr)
            if(temp!=0){
              if(count<temp){
                 count=temp
                 newArr=arr
              }
            }
        }
    }
    if (node.sp[0] + 1 <= 2) {
       let arr1 = m(node);
      
        let val = arr1[node.sp[0] + 1][node.sp[1]]
        arr1[node.sp[0]][node.sp[1]] = val;
        arr1[node.sp[0] + 1][node.sp[1]] = ' '

        if(stat(arr1)){
            let temp=check(arr1)
            if(temp!=0){
              if(count<temp){
                 count=temp
                 newArr=arr1
              }
            }
        }
    }
    if (node.sp[1] - 1 >= 0) {
       let arr2 = m(node);
        
        let val = arr2[node.sp[0]][node.sp[1] - 1]
        arr2[node.sp[0]][node.sp[1]] = val;
        arr2[node.sp[0]][node.sp[1] - 1] = ' '
        if(stat(arr2)){
            let temp=check(arr2)
            if(temp!=0){
              if(count<temp){
                 count=temp
                 newArr=arr2
              }
            }
        }
    }
    if (node.sp[1] + 1 <= 2) {
        let arr3 = m(node);
        // arr = matrix;
        let val = arr3[node.sp[0]][node.sp[1] + 1]
        arr3[node.sp[0]][node.sp[1]] = val;
        arr3[node.sp[0]][node.sp[1] + 1] = ' '
        if(stat(arr3)){
            let temp=check(arr3)
            if(temp!=0){
              if(count<temp){
                 count=temp
                 newArr=arr3
              }
            }
        }
    }
    return {count,newArr}
}
// console.log(count, sp)
console.log(best(node))
