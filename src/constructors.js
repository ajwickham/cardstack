//export 
function Pairallocation() {
    this.letters= [];
    this.ordinal= ["#first","#second","#third","#fourth","#fifth","#sixth","#seventh","#eigth","#ninth","#tenth"];
  }

//export 
function Pairguess(){
    this.guess = [];
    this.result = [];
  };
  


Pairallocation.prototype.allocatePairs =function() {
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

Pairallocation.prototype.correctFlipSub = function(x,y) {
  if( pairs.letters[x]===pairs.letters[y] ) {
    $(pairs.ordinal[y]).addClass("flip-card");
    $(pairs.ordinal[y]).removeClass("flip-card2");
    $(pairs.ordinal[x]).addClass("flip-card");
    $(pairs.ordinal[x]).removeClass("flip-card2");
  }
}
let count;
Pairguess.prototype.addGuess = function(position) {
debugger
  this.guess.push(position);
  count = this.guess.length-1
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
    
    
  }
  document.getElementById("g2").innerHTML = this.guess.length;
};

Pairguess.prototype.correctFlip = function() {  //Program keeps missing correct cards because of time delay.  This function checks all cards every time to make sure.
  for(let k=1; k <this.guess.length; k++) {
    if((this.guess[k])!= (this.guess[k-1])) {
      pairs.correctFlipSub(this.guess[k],this.guess[k-1])
    }
  }
};

