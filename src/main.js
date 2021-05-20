import './css/styles.css';
import {Pairs} from './constructors.js';
let pairs = new Pairs;


pairs.allocatePairs();

let turnCard = function() {
  pairs.firstFlip();
  setTimeout(function(){ 
    pairs.flipBack();
  }, 5000); 
}




$(document).ready(function() {

  $("#first").click(function() {
    pairs.addGuess(0);
    turnCard();
  });
  $("#second").click(function() { 
    pairs.addGuess(1);
    turnCard();
  });

  $("#third").click(function() { 
    pairs.addGuess(2);
    turnCard();
  });

  $("#fourth").click(function() { 
    pairs.addGuess(3);
    turnCard();
  });

  $("#fifth").click(function() { 
    pairs.addGuess(4);
    turnCard();  
  });

  $("#sixth").click(function() { 
    pairs.addGuess(5);
    turnCard();  
  });

  $("#seventh").click(function() { 
    pairs.addGuess(6);
    turnCard();   
  });

  $("#eigth").click(function() { 
    pairs.addGuess(7);
    turnCard();  
    });
  
  $("#ninth").click(function() { 
    pairs.addGuess(8);
    turnCard();  
  });

  $("#tenth").click(function() { 
    pairs.addGuess(9);
    turnCard();   
  });
});


