// Parsing a list and transform the first and last elements of it:

var arr = ['GUVI', 'I', 'am', 'Geek'];
function transformFirstAndLast(arr) {
 newObject = {};
 newObject[arr[0]] = arr[arr.length-1];
 return newObject;
}

var obj = transformFirstAndLast(arr);
console.log(obj);
