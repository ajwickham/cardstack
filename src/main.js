import Pairallocation from './constructors.js';
const pairs = new Pairallocation;
pairs.allocatePairs();



function Pairguess(){
  this.guess = [];
  this.result = [];
};

const guesses = new Pairguess;
let count = -1;
Pairguess.prototype.addGuess = function(position) {
  count = count +1
  this.guess.push(position);
  if(count >= 1) {
    if(this.guess[count] === this.guess[count-1]) {
    alert("You just flipped that one!")
    }
    else {
      if(pairs.letters[(this.guess[count])]===pairs.letters[(this.guess[count-1])]) {
        this.result.push("correct");
      }
    }
    document.getElementById("r2").innerHTML = this.result.length
    document.getElementById("g2").innerHTML = this.guess.length;
    
  }
};


//This is the main function, what happens when you click the stack

function cardFlip() {
 
  let card = guesses.guess[((guesses.guess.length)-1)];
  let previousCard = guesses.guess[((guesses.guess.length)-2)];
  document.getElementById(card).innerHTML = pairs.letters[card];
  let position = pairs.ordinal[card];
    
  if(card != previousCard) {
    $(position).addClass("flip-card");
    $(position).removeClass("flip-card2");
    startTimeOut(position);
  }
};

let timeOut;
function startTimeOut(position){
  timeOut = setTimeout(function(){ 
    $(position).addClass("flip-card2");
    $(position).removeClass("flip-card"); 
    guesses.correctFlip() 
  }, 5000); 

};

Pairguess.prototype.correctFlip = function() {  //Program keeps missing correct cards because of time delay.  This function checks all cards every time to make sure.
  for(let k=1; k <this.guess.length; k++) {
    if((this.guess[k])!= (this.guess[k-1])) {
      if( pairs.letters[(this.guess[k-1])]===pairs.letters[(this.guess[k])] ) {
        $(pairs.ordinal[(this.guess[k-1])]).addClass("flip-card");
        $(pairs.ordinal[(this.guess[k-1])]).removeClass("flip-card2");
        $(pairs.ordinal[(this.guess[k])]).addClass("flip-card");
        $(pairs.ordinal[(this.guess[k])]).removeClass("flip-card2");
      }
    }
  }
};

$(document).ready(function() {

  $("#first").click(function() { 
    debugger
    guesses.addGuess(0);
    cardFlip();
  });
  $("#second").click(function() { 
    guesses.addGuess(1);
    cardFlip();  
  });

  $("#third").click(function() { 
    document.getElementById("2").innerHTML = pairs.letters[2];
    guesses.addGuess(2);
    cardFlip();
  });

  $("#fourth").click(function() { 
    guesses.addGuess(3);
    cardFlip();
  });

  $("#fifth").click(function() { 
    guesses.addGuess(4);
    cardFlip();   
  });

  $("#sixth").click(function() { 
    guesses.addGuess(5);
    cardFlip();
  });

  $("#seventh").click(function() { 
    guesses.addGuess(6);
    cardFlip(); 
  });

  $("#eigth").click(function() { 
    guesses.addGuess(7);
    cardFlip();
    });
  
  $("#ninth").click(function() { 
    guesses.addGuess(8);
    cardFlip(); 
  });

  $("#tenth").click(function() { 
    guesses.addGuess(9);
    cardFlip(); 
  });
});


