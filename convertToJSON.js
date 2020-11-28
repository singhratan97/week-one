// Parsing a list of lists and convert into a JSON object:

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];


function fromListToObject(arr) {
 var newObject = {};

 newObject = arr.reduce((object,item) => {
    object[item[0]] = item[1];
    return object;
 },{})
 
 return newObject;
}

var object = fromListToObject(arr);

console.log(object);
