// ------------------Implement array methods 
// 1 myMap
// 2 myFilter
// 3 myForEach
// 4 myFlat
// 5 mySlice
// 6 myIndexOf
// 7 myPush
// 8 myPop
// 9 myReduce

//----------------myMap

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myMap = function(callback) {
//     const result = [];
//     for(let i = 0; i < this.length; i++) {
//         if (this[i] === undefined) {
//             continue
//         }
//         result.push(callback(this[i], i, this));
//     }
//     return result;

// }

// const values = arr.myMap((item) => {
//     return item + 1 ;
// })

// console.log(values);

//-----------------myFilter

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myFilter = function(checkElement) {
//     const returnArr = [];
//     for (let i = 0; i < this.length; i++) {
//       if (checkElement(this[i])) {
//         returnArr.push(this[i]);
//       }
//     }
//     return returnArr;
// };


// const values = arr.myFilter(item => item > 5)
// console.log(values);

//------------------myForEach

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myForEach = function(callback) {
    
    for ( let i = 0; i < this.length; i++) {
        callback(this[i],i,this)
    }
    
    
}

arr.myForEach(item => console.log(item))
















