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

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myForEach = function(callback) {
    
//     for ( let i = 0; i < this.length; i++) {
//         callback(this[i],i,this)
//     }
    
    
// }

// arr.myForEach(item => console.log(item))

//-----------------myFlat

// const arr = [1,2,[3,4,[5,6,[7,8,9]]]];

// Array.prototype.myFlat = (callback) => {
//     const flattend =[];
//     (function toflat(list, dp){
//         for (const el of list) {
//             if (Array.isArray(el) && dp) {
//                 toflat(el, dp - 1)
//             } else {
//                 flattend.push(el)
//             }
//         }
//     })(this,depth)
// }

// console.log(arr.myFlat())

// const result = arr.flat(5)

// console.log(result);

//--------------------------------------------------
// const arr = [1,2,[3,4,[5,6,[7,8,9]]]];

// function myflat(array,depth = 1) {
//     const flattend = [];
//     (function flattener(list,dp){
//         for ( const el of list) {
//             if (Array.isArray(el) && dp) {
//                 flattener(el,dp - 1)
//             } else {
//                 flattend.push(el)
//             }
//         }
//     })(array,depth);
//     return flattend
// }

// console.log(myflat(arr,Infinity));

//---------------------------------------myPop

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myPop = function() {
//     return this.splice(-1)
// }

// console.log(arr.myPop());

























