// Parsing two JSON objects and Compare:

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};


function assertObjectsEqual(actual, expected, testName){
    if(JSON.stringify(actual) == JSON.stringify(expected))
    console.log("PASSED");
    else
    console.log("FAILED", [testName], " Expected", expected, "but got", actual );
}

assertObjectsEqual(actual,expected,"detects that two objects are equal");
 

