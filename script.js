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

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myMap = function(callback) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        if (this[i] === undefined) {
            continue
        }
        result.push(callback(this[i], i, this));
    }

    return result;
}

const values = arr.myMap((item) => {
    return item + 1;
})

console.log(values);