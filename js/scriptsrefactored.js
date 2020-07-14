//Business or back-end logic:
$(document).ready(function() {


  //Functions to next through left views of the cars.
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  car1selected = 0
  car2selected = 0
  card = 0
    

  

  
//Functions to view and select cars
 
//RACETRACK PAGE


/*Turn cards.  This project is carried out before learning about arrays and loops, which makes representing flipping through a stack of cards
tricky. As an approximation of that a random number is created that equals a class. There are 3 of each type of card, 9 types of card plus 5 racecar
cards. So the random number is multiplied by 32 and the integer value taken to create 32 classes (0 is the first random number). Statistically this is
rubbish, after 15 cards the chance of getting the red racecar is one in 16, eventually with only one card left, if the red racecar hasn't been played 
yet the chance is 1 in 1.

A future version might include an array basis for the cards, and could also distribute the icons around the track randomly*/
uncard=0
previous=1
t = 0

$("#red3").click(function() {  /* This places the car on the start line. Probably should redo and not use bootstrap so it responds with grid*/
  alert("car1 is "+x+" car2 is "+y);
  $("div.s17Arotate").addClass(x+"top");
  document.getElementById("s17A").style.zIndex = "15";
  $("div.s17Crotate").addClass(y+"top");
  document.getElementById("s17C").style.zIndex = "5";
}); 

// This is the stack of cards function

$("#stack").click(function() {
  t=1-t  //determines whose turn it is
  if (t===1) {turn=1}
  else {turn =2}
  
  count4 +=1;
  if (count4 >2) {
      $("div.back-stand-in").removeClass(previous);  //Removes the card that stands in while the card is being flipped back to home position
  }
  if (uncard!=0) {
    $("div.back-stand-in").addClass(uncard);  //puts previous card icon on the stand-in card
    $("div.flip-card-back").removeClass(uncard); //removes the prevous card icon
    $("div.flip-card-inner").removeClass("flip-card");//flips the card back to the home position
  }
                             //Chooses an icon and puts it on the card.
  previous=uncard  
  icon = ((Math.random())*32)  //don't forget to put this back to 32
  card=Math.round(icon) 
  
  if (card<=3) {
    $("div.flip-card-back").addClass("RedHelmet");
    uncard="RedHelmet";
  }
  if (card>3 && card<=6) {
    $("div.flip-card-back").addClass("BlueHelmet");
    uncard="BlueHelmet"  
  }
  if (card>6&&card<=9) {
    $("div.flip-card-back").addClass("YellowHelmet");  
    uncard="YellowHelmet"
  }
  if (card>9&&card<=12) {
    $("div.flip-card-back").addClass("RedFlag"); 
    uncard="RedFlag" 
  }
  if (card>12&&card<=15) {
    $("div.flip-card-back").addClass("GreenFlag"); 
    uncard="GreenFlag" 
  }
  if (card>15&&card<=18) {
    $("div.flip-card-back").addClass("YellowFlag");
    uncard="YellowFlag"  
  }
  if (card>18&&card<=21) {
    $("div.flip-card-back").addClass("RedTyre");
    uncard="RedTyre"  
  }
  if (card>21&&card<=24) {
    $("div.flip-card-back").addClass("BlueTyre");  
    uncard="BlueTyre"
  }
  if (card>24&&card<=27) {
    $("div.flip-card-back").addClass("GreenTyre");
    uncard="GreenTyre"  
  }
  if (card===28) {
    $("div.flip-card-back").addClass("RedRacecar"); 
    uncard="RedRacecar" 
  }
  if (card===29) {
    $("div.flip-card-back").addClass("BlueRacecar");
    uncard="BlueRacecar"  
  }
  if (card===30) {
    $("div.flip-card-back").addClass("GreenRacecar");
    uncard="GreenRacecar"  
  }
  if (card===31) {
    $("div.flip-card-back").addClass("PurpleRacecar");
    uncard="PurpleRacecar"  
  }
  if (card===32) {
    $("div.flip-card-back").addClass("YellowRacecar");
    uncard="YellowRacecar"  
  }
 
  alert("Are you ready?");/*for some reason it won't do a second flip
                          without this break here. Event bubbling? */
  $("div.flip-card-inner").addClass("flip-card");  //card is flipped
  
});




});//end of document 


