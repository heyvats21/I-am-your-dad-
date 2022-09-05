var readlineSync=require("readline-sync")
var score=0; //initial score 


var your_userName=readlineSync.question("What is your Name buddy? ")
console.log("welcome🙋‍♂️ "+your_userName)

function spidermanQuiz(question,answer){
  var useranswer=readlineSync.question(question)  //question comes in userAnswer

  
  if(useranswer==answer){
    console.log("right") 
    score++
  }
  else{
    console.log("wrong")
    score--
  }
  console.log(score)
  console.log("=========================")

 
}





//array of questions 
var question_List=[{
  question:"What is my Name? ",
  answer:"Vatsal"
},{
  question:"Which is my favourite song? ",
  answer:"Kesariya"
},{
  question:"Which is my favourite superhero? ",
  answer:"IronMan"
},{
  question:"What is your Dad Name? ",
  answer:"Vatsal"
},{
  question:"What's the name of your dad's favourite youtuber? ",
  answer:"Mumbiker Nikhil"
}];



for(var i=0;i<question_List.length;i++){
  var current_question=question_List[i]
  spidermanQuiz(current_question.question,current_question.answer)
}




