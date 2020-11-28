// Parsing two JSON objects and Compare:

var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ]


   function chksecurityQuestions(securityQuestions,question) {
    var newvar = securityQuestions.filter((item) => {
        if(item.question == question)
        {
            if(item.expectedAnswer == ans)
            return item;
        }
    })

    if(newvar.length == 1)
    return true
    else
    return false
    //return true or false; 
   }



   //Test case1:
   var ques = "What was your first pet’s name?";
   var ans  =  'FlufferNutter';
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // true



   //Test case2:
   var ques = "What was your first pet’s name?";
   var ans  =  'DufferNutter';
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // false
