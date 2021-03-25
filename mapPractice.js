let dictionary = new Map();

for(i=0; i < 50; i++){
    let dice = Math.floor(Math.random() * 10) % 6 + 1 ;
    dictionary.set(i, dice);
}
console.log(dictionary);