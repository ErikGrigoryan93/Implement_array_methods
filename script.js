//----------------Implement array methods 

// 1 myMap
// 2 myFilter
// 3 myForEach
// 4 myFlat
// 5 myPop
// 6 mySlice
// 7 myPush
// 8 myIndexOf
// 9 myReduce


//1----------------myMap

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
 

//2----------------myFilter

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


//3----------------myForEach

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myForEach = function(callback) {
    
//     for ( let i = 0; i < this.length; i++) {
//         callback(this[i],i,this)
//     }
    
    
// }

// arr.myForEach(item => console.log(item))


//4----------------myFlat

// const arr = [1,2,[3,4,[5,6,[7,8,9]]]];

// Array.prototype.myFlat = function(depth = Infinity) {
//     const flatted = [];
//     let arr = this;
//     (function foo(list, dp) {
//         for(let el of list) {
//             if(Array.isArray(el) && dp) {
//                 foo(el, dp - 1)
//             } else {
//                 flatted.push(el)
//             } 
//         }
//     })(this, depth);

//     return flatted;
// };

// console.log(arr.myFlat());


//5----------------myPop

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myPop = function() {
//     return this.splice(-1)
// }

// console.log(arr.myPop());


//6----------------mySlice

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.mySlice = function(start,end) {
//     let sliced = [];
//     for(let i = start; i < end; i++) {
//         sliced.push(this[i])
//     }
//     return sliced

// }

// console.log(arr.slice(2,5));
// console.log(arr.mySlice(2,5));


//7----------------myPush

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myPush = function(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         this[this.length] = arg[i]
//     }
// }

// arr.push(15)
// arr.myPush([16,17,18])
// console.log(arr);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 20]


//8----------------myIndexOf

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myIndexOf = function(el) {
    
//     for (let i = 0; i < this.length; i++) {
//       if (this[i] === el ){
//           return i 
//       } 
      
//     }
//     return -1
    
// };

// console.log(arr.indexOf(9));//8
// console.log(arr.myIndexOf(8));//7


//9----------------myReduce
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myReduce = function(callback,initialValue) {
//     let accumulator = initialValue;
//     initialValue === undefined ? undefined : initialValue

//     for (let i = 0; i < this.length; i++) {
//         if (accumulator !== undefined) {
//             accumulator = callback(accumulator,this[i],i,this)
//         } else {
//             accumulator = this[0]
//         }
//     }

//     return accumulator
// }

// console.log(arr.myReduce((acc,calc) =>{
//     let sum = 0;
//     sum = acc + calc;
//     return sum
// },0));


//9----------------myReduceRigth

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.myReduceRight = function(callback,initialValue) {
//     let accumulator = initialValue;
//     initialValue === undefined ? undefined : initialValue

//     for (let i = this.length - 1; i >= 0; i--) {
//         if (accumulator !== undefined) {
//             accumulator = callback(accumulator,this[i],i,this)
//         } else {
//             accumulator = this[this.length - 1]
//         }
//     }

//     return accumulator
// }

// console.log(arr.reduceRight((acc,calc) =>{
//     return acc - calc
// },8));

// console.log(arr.myReduceRight((acc,calc) =>{
//     return acc - calc
// },8));



















