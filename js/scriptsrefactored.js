$(document).ready(function() {

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  /*let count4 = 0;*/
  let car1selected = 0
  let car2selected = 0
  let card = 0
  let uncard=0
  let t = 0
  let previous = 0
  let turn = 0  

  

  
//Functions to view and select cars
 
//RACETRACK PAGE


$("#red3").click(function() {  /* This places the car on the start line and initiates building the cardstack. */
  alert("car1 is "+x+" car2 is "+y);
  $("div.s17Arotate").addClass(x+"top");
  document.getElementById("s17A").style.zIndex = "15";
  $("div.s17Crotate").addClass(y+"top");
  document.getElementById("s17C").style.zIndex = "5";
  stackBuilder(3,1);
}); 

// These are the stack of cards functions.
//Stackbuilder puts together the full deck of cards.  Can vary in code the number of regular to racecar icons x:y
var cardStack = []
const stackBuilder = function(x,y) {
  let i
  let j
  let iconStack=[]
  let racecarStack=[]
    for (let i=0; i<x; i+=1) {
    iconStack.push("RedHelmet","BlueHelmet","YellowHelmet","RedFlag","GreenFlag","YellowFlag","RedTyre","BlueTyre","GreenTyre")
  }
  for (let j=0; j<y; j+=1) {
    racecarStack.push("RedRacecar","BlueRacecar","GreenRacecar","PurpleRacecar","YellowRacecar")
  }
  cardStack= iconStack.concat(racecarStack); 
  return cardStack 
};
stackBuilder(3,1)  /*This can be removed*/

//removes a card from the remaining stack and puts it on top (end of the array)
var unplayedCards = cardStack
const nextCard = function(array) {
  let x = Math.round((Math.random()*(array.length-1)))
  let y = array[x]
  array.splice(x,1);
  array.push(y)
  return array
};


//This is the main function, what happens when you click the stack

$("#stack").click(function() {
  t=1-t  //determines whose turn it is
  if (t===1) {turn=1}
  else {turn =2}
  
  $("div.back-stand-in").removeClass(previous);  //Removes the card that stands in while the card is being flipped back to home position
  previous=uncard

  if (uncard!=0) {
    $("div.back-stand-in").addClass(uncard);  //puts previous card icon on the stand-in card
    $("div.flip-card-back").removeClass(uncard); //removes the prevous card icon
     $("div.flip-card-inner").removeClass("flip-card");//flips the card back to the home position
  }
                     
  unplayedCards = nextCard(unplayedCards)   //Chooses an icon and puts it on the card.
  card = unplayedCards.pop() 
  $("div.flip-card-back").addClass(card);
  uncard=card;
  
  alert("Are you ready?");/*for some reason it won't do a second flip
                          without this break here. Event bubbling? */
  $("div.flip-card-inner").addClass("flip-card");  //card is flipped  
});
  
});//end of document 
//22 lines of code to put random icons on cards vs 58 lines in the original 


