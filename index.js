var readlineSync = require('readline-sync');
const chalk = require('chalk');

const dot1 = chalk.yellow.bold;
const dot2 = chalk.blue.bold;
const dot3 = chalk.red.bold; 
const question= chalk.rgb(249, 199, 79);
const rightAnswer = chalk.rgb(255, 204, 0);
const wrongAnswer = chalk.rgb(255, 0, 0);
const users = chalk.rgb(232, 93, 4);
var currentScore = 0;

console.log(chalk.rgb(242, 204, 143).bold("Are You a F"+dot1(".")+"R"+dot2(".")+"I"+dot3(".")+"E"+dot1(".")+"N"+dot2(".")+"D"+dot3(".")+"S fan? \n"));
console.log(chalk.rgb(224, 122, 95)("Take This Ultimate FRIENDS Quiz & We'll Know If You Know That They Know,We Know How Good You Are..😉 \n"));





function play(question, answer){
  var userAnswer= readlineSync.question(question);

    if(userAnswer.toUpperCase() ===  answer.toUpperCase()){
      currentScore= currentScore+2;
      console.log(rightAnswer("Right!"));
      
  
    }else{
     console.log(wrongAnswer("Wrong!"));
      if(currentScore>0){
        currentScore = currentScore-1;
        console.log(rightAnswer("Right answer: ")+ answer)
      
      }
    }
      console.log(chalk.rgb(255, 117, 26)("Score: "), currentScore);
}

function checkHighScore(){
  for(var i=0; i< allScores.length; i++){

  if(currentScore > allScores[i] && currentScore > highestScore){
    console.log(chalk.rgb(255, 117, 26).bold.inverse("Bravo!!👏 You broke the records. You seem to be a great FRIENDS fan..Please send me a screenshot, so that I can update your score in the leaderboard."));
    break;
  }else{
    console.log(chalk.rgb(255, 117, 26).bold.inverse("\nCheckout all the HighScores listed below.If you broke any of the records, send me the screenshot, I will update it in the leaderboard."))
    break;
  }
}
}

// Highscores
var leaderboard=[
  {
  name: users("Ankit"),
  score: 10
},
{
  name: users("Sakshi"),
  score: 8
},
{
  name: users("Priya"),
  score: 12
}

]


var questions=[{
  question:question(`\nPhobe says "he's her BLANK" to represent the realstionship between Ross and Rachel in the early espisodes.
A. Special someone
B. Lover
C. Lobster
D. Cat
Choose Your Option: `),
answer: "C"
},
{
  question:question(`\nWhat is the name of phobe's half brother and twin sister?
A. Frank and Izzy
B. Frank Jr. and Ursula 
C. Irsula and Fred Jr.
D. Frank and Ursula
Choose Your Option:  `),
answer: "B"
},
{
  question:question(`\nWho does Ross take out for Valentine's day in season 1?
A. Rachel
B. Kristen
C. Julie
D. Carol
Choose Your Option: `),
answer:"D"
},
{
  question:question(`\nFor a brief amount of time, Joey and Chandler weren't roommates. Who replaces Joey as Chandler's new roommate? 
A. Eddie 
B. Drunk Bobby 
C. Russ 
D. Janice
Choose Your Option: `)
,
answer: "A"
},
{
  question:question(`\nHow many times has Ross Geller been married and divorced?
A. Married thrice, two divorces, one annulment 
B. Married and divorced thrice. 
C. Married thrice, two divorces and a separation. 
D. Married and divorced twice
Choose Your Option: `),
answer: "B" 
},
{
  question:question(`\nWhat did Ross name his white-headed pet capuchin monkey? 
A. Marcella 
B. Marciel
C. Marcel  
D. Macarena 
Choose Your Option: `),
answer: "C" 
},
 {
  question:question(`\nWhere did Carol first meet Susan?
A. In college?
B. At work?
C. At the gym?
D. At Central Perk?
Choose Your Option: `),
answer: "C" 
},
{
  question:question(`\nWe know that Chandler was the one to say the closing lines on the show. What does he say? 
A. Let's get some coffee?
B. This is goodbye.
C. I love you all so much.
D. Sure, where?
Choose Your Option: `),
answer: "D" 

},
{
  question:question(`\nWhich of the following ingredients were not in Rachel's iconic Thanksgiving trifle? 
A. Ladyfingers and jam
B. Beef with peas and onions
C. Raisin and Walnuts
D. Bananas and custard
Choose Your Option: `),
answer: "C" 

},
]

if(readlineSync.keyInYN(chalk.rgb(244, 241, 222)("Do You Want To Play? "))){
  //  y key pressed

  var userName = readlineSync.question(chalk.rgb(129, 178, 154)("\nEnter Your Name? \n"));
  console.log(chalk.rgb(129, 178, 154)("Welcome, "+ userName +" to the "+ (chalk.rgb(242, 204, 143).bold("F"+dot1(".")+"R"+dot2(".")+"I"+dot3(".")+"E"+dot1(".")+"N"+dot2(".")+"D"+dot3(".")+"S")) + " Trivia Quiz.."));
  
   console.log(chalk.rgb(0, 153, 153).bold("\n*** Rules Of A Game ***"));
 console.log(chalk.rgb(0, 153, 153)("\n1. There are some MCQ questions about F.R.I.E.N.D.S Sitcom."));
  console.log(chalk.rgb(0, 153, 153)("2. You have to choose one correct option"));

 console.log(chalk.rgb(0, 153, 153)("3. For every correct answer, you will be rewarded two points."));
 console.log(chalk.rgb(0, 153, 153)("4. For every wrong answer, you will get a penalty of one point."));
 console.log(chalk.rgb(129, 178, 154)("\nLet's see How Great F.R.I.E.N.D.S Fan You Are.."));
 console.log(chalk.green.bold("\n--- START ---"));

for(var i=0; i<questions.length; i++){
  currentquestion= questions[i];
  play(currentquestion.question, currentquestion.answer);
}
 console.log(rightAnswer("\nYour Overall Score: "),  currentScore)

var allScores = leaderboard.map(scores=> scores.score)

var highestScore = Math.max(...allScores);

  checkHighScore();

 console.log(question("*****************************************"));
 console.log(rightAnswer.bold("\nHighScores: "));
//  Loop to print all the scores
 for (var j = 0; j < leaderboard.length; j++) {
  console.log(leaderboard[j].name + " : " + leaderboard[j].score)
  }

  console.log(question("\n*****************************************"));
   console.log(chalk.rgb(224, 122, 95).bold("\nThanks For Playing."))






  
}else{
  console.log(chalk.rgb(129, 178, 154).bold("\nNo Problem, we can catch up some time later. Have a nice day !"))
}
