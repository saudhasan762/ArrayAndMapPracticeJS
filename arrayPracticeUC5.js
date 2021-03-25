var arr = [];
for(i = 1;i <= 100; i++) {
    let unit = parseInt(i % 10);
    let tens = parseInt(i / 10);
    if(unit == tens){
        arr.push(i);
    }
}
console.log("Numbers with same digits: "+arr);

