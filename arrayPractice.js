var arr = [];
while(arr.length < 10){
    var r = Math.floor(Math.random() * 1000) + 1;
    if(r > 100) arr.push(r);
}
console.log(arr);

function secondMaxWithSorting(arr){
    const arrSorted = arr.sort((a,b) => a - b);
    return arrSorted[arr.length - 2];
}
console.log("Second largest number with Sorting: "+secondMaxWithSorting(arr));

function secondMinWithSorting(arr){
    const arrSorted = arr.sort((a,b) => a - b);
    return arrSorted[1];
}
console.log("Second smallest number with sorting: "+secondMinWithSorting(arr));

function secondMax (arr){ 
    var max = Math.max.apply(null, arr); 
    arr.splice(arr.indexOf(max), 1); 
    return Math.max.apply(null, arr); 
}
console.log("Second largest number: "+secondMax(arr));

function secondMin (arr){ 
    var min = Math.min.apply(null, arr); 
    arr.splice(arr.indexOf(min), 1); 
    return Math.min.apply(null, arr); 
}
console.log("Second smallest number: "+secondMin(arr));
