// Parsing a list of lists and convert into a JSON object:

var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];


function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 var newObject = {};

 var tranformEmployeeList = arr.map((item) => {

    newObject = item.reduce((object,i) => {
        object[i[0]] = i[1];
        return object;
     },{})
     
     return newObject;
 }
 )

 return tranformEmployeeList;
}


var newarr = transformEmployeeData(arr);

console.log(newarr);
