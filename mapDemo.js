let keyString = 'a string'
let keyObj = {}
let keyFunc = function() {}

let myMap = new Map()
myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, "value associated with keyObj")
myMap.set(keyFunc, "value associated with KeyFunc")

let size = myMap.size
let valStr = myMap.get(keyString)
let isKeyExist = myMap.has('a string')

for(let [key, value] of myMap) console.log("Loop1: "+key + '=' +value)
for(let [key, value] of myMap.entries()) console.log("Loop2: "+key+ '=' +value)
for(let key of myMap.keys()) console.log("Loop3: "+key)
for(let value of myMap.values()) console.log("Loop4: "+value)

let first = new Map([ [1, 'one'], [2, 'two'], [3, 'three'] ])
let second = new Map([ [1, 'uno'], [2, 'dos'] ])
let merge = new Map([...first, ...second, [1, 'eins']])

let hashKey = merge.has(1)
let delKey = merge.delete(1)
if(merge.has(1)) console.log(merge.get(1))
console.log("Pos2: "+merge.get(2))
merge.clear();
console.log(merge.size)
