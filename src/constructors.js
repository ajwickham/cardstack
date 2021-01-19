export function Pairs() {
    this.letters= [];
    this.ordinal= ["#first","#second","#third","#fourth","#fifth","#sixth","#seventh","#eigth","#ninth","#tenth"];
    this.guess = [];
    this.result = [];
}

Pairs.prototype.allocatePairs =function() {
  let letterslist = ["A","B","C","D","E","A","B","C","D","E"];
  let x;
  let y;
  for(let i = 9; i > 0; i=i-1) {
    y = Math.round(Math.random()*(i));
    x= letterslist[y];
    letterslist.splice(y,1);
    this.letters.push(x);   
  }
  this.letters.push(letterslist[0]);
};

Pairs.prototype.pairLetter = function(x,y) {
  return this.letters[x,y];
}


Pairs.prototype.addGuess = function(position,pairs) {
  this.guess.push(position);
  var count = this.guess.length-1
  if(count >= 1) {
    if(this.guess[count] === this.guess[count-1]) {
    alert("You just flipped that one!");
    }
    else {
      if(this.letters[(this.guess[count])]===this.letters[(this.guess[count-1])]) {
        this.result.push("correct");
      }
    }
    document.getElementById("r2").innerHTML = this.result.length   
  }
  document.getElementById("g2").innerHTML = this.guess.length;
};


Pairs.prototype.firstFlip = function() {
  let card = this.guess[((this.guess.length)-1)];
  let previousCard = this.guess[((this.guess.length)-2)];
  document.getElementById(card).innerHTML = this.letters[card];
  let position = this.ordinal[card];
  if(card != previousCard) {
    $(position).addClass("flip-card");                            //flip card to show letter
    $(position).removeClass("flip-card2");
    setTimeout(function(){ 
      $(position).addClass("flip-card2");                         //after timeout flip card to show blank side
      $(position).removeClass("flip-card"); 
    }, 5000);
  } 
}

Pairs.prototype.flipBack =  function () {
  for(let k=1; k <(this.guess.length); k++) {
    let x = this.guess[k];
    let y = this.guess[k-1];
    if(this.letters[x]===this.letters[y]) {               //if the pair matches flip both cards to show letters
      $(this.ordinal[y]).addClass("flip-card");
      $(this.ordinal[y]).removeClass("flip-card2");
      $(this.ordinal[x]).addClass("flip-card");
      $(this.ordinal[x]).removeClass("flip-card2");
    }
  } 
}


