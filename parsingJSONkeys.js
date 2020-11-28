//  Parsing an JSON object’s Keys:
var object = {
    name: "RajiniKanth", 
    age: 33, 
    hasPets : true
};

function printAllKeys(obj)
    {
    console.log(Object.keys(obj));
   }

   printAllKeys(object);
