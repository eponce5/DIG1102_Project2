
document.getElementById("Rock").addEventListener("click", choiceSelect);
document.getElementById("Paper").addEventListener("click", choiceSelect);
document.getElementById("Scissors").addEventListener("click", choiceSelect);

var scoreUser = document.getElementById("win-count");
var scoreComputer = document.getElementById("loss-count");
var tieDraw = document.getElementById("tie-count");

function getbuttonValue() {
  
var button = document.getElementsByName("choice");

for (var i = 0; i < button.length; i++) {
    if (button[i].checked) {
   return button[i].value;
   }
  }
};


var record = [];

function choiceSelect() {

   var selections = document.getElementById("Rock", "Paper", "Scissors");
    var userChoice = getbuttonValue();
    var computerChoice =  selections[Math.floor(Math.random() * 3)];
   
    
   document.getElementById("win-count").innerHTML = userChoice;
   document.getElementById("loss-count").innerHTML = computerChoice;
    document.getElementById("tie-count").innerHTML = tieDraw;
}

 function scoring( userChoice, computerChoice ) {

    if ( userChoice === computerChoice ) {
       document.getElementById("result").innerHTML = "It's a tie!";
      // tieDraw.innerHTML = parseInt(tieDraw.innerHTML)+1; 
      record.push("Tie");

    }
    if (userChoice === "Rock") {
        if (computerChoice === "Scissors") {
        document.getElementById("result").innerHTML = "You win! You picked rock which beats scissors.";
        //scoreUser.innerHTML = parseInt(scoreUser.innerHTML)+1; 
        record.push("Win");

        } else {
         if (computerChoice === "Paper") {
         document.getElementById("result").innerHTML = "You lose! The computer picked paper which beats rock.";
          //scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;
          record.push("Lose");
          }
        }
    }
    if (userChoice === "Scissors") {
       if (computerChoice === "Paper") {
        document.getElementById("result").innerHTML = "You win! You picked scissors which beats paper.";
        //scoreUser.innerHTML = parseInt(scoreUser.innerHTML)+1; 
        record.push("Win");
        
        } else {
          if (computerChoice === "Rock") {
         document.getElementById("result").innerHTML = "You lose! The computer picked rock which beats scissors.";
        //scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;
        record.push("Lose");
          }
       }
    }
    if (userChoice === "Paper") {
       if (computerChoice === "Rock") {
       document.getElementById("result").innerHTML = "You win! You picked paper which beats rock.";
       // scoreUser.innerHTML = parseInt(scoreUser.innerHTML)+1; 
       record.push("Win");

       } else {
        if (computerChoice === "Scissors") {
         document.getElementById("result").innerHTML = "You lose! The computer picked scissors which beats paper.";
       // scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;
       record.push("Lose");
      }
   }
  
 }
}
document.getElementById("win-count").innerHTML = record.filter(x => x=="Win").length ;
document.getElementById("loss-count").innerHTML = record.filter(x => x=="Lose").length;
document.getElementById("tie-count").innerHTML = record.filter(x => x=="Tie").length ;