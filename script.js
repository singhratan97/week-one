//Creating a request variable 
var request = new XMLHttpRequest();

//Open the request
request.open('GET' , 'https://restcountries.eu/rest/v2/all', true);

//Send the request
request.send();

//Load the response
request.onload = function (){
    var data = JSON.parse(request.response);
    for(let i=0;i<data.length;i++)
        console.log(data[i].flag);
}