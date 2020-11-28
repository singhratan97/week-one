//  Parsing an JSON object and convert it to a list:

var obj = {
    name: 'ISRO', 
    age: 35, 
    role: 'Scientist'
};
function convertListToObject(obj) {
 console.log(Object.entries(obj));
}

convertListToObject(obj);
