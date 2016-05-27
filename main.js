function game() {
'use strict';

  var name = prompt("What is your name?");

  function checkName(){
    if (name === "" || name === null) {
      alert("Please give a valid name!");
      name = prompt("What is your name?");
      checkName();
    }
  }
  checkName();

  alert("Welcome to the game " + name + ", may the odds ever be in your favor!");

  alert("This is an Adventure Game, It goes as you please, as you desire. \nLET US START!");

  var myChoice = prompt("So, do you like scary stories, " + name + "?");

  if (myChoice.toLowerCase == "yes") {
      alert("So we depart on our journey...");
  } else if (myChoice.toLowerCase() == "no") {
      alert("This is gonna be FUN! Haha!");
  } else {
      checkMyChoice();
  }

  function checkMyChoice(){
    if (myChoice.toLowerCase !== "yes" || myChoice.toLowerCase !== "no"){
      alert("Please answer 'yes' or 'no'");
      myChoice = prompt("So, do you like scary stories, " + name + "?");
      checkMyChoice();
    }
  }

 function checkAlone(){
   if (alone.toLowerCase() !== "a" || alone.toLowerCase() !== "b" || alone.toLowerCase() !== "c"){
     alert("Please respond with 'a', 'b', or 'c'!");
     checkAlone();
   }
  }
  var alone = prompt(
      "You're at home, alone, watching the TV and hear a knock on the door. You hear more banging on the door. Your heatbeat speeds up and you're very scared. What do you do? \nA) Ignore the knocking nervously. \nB) Start screaming your head off. \nC) Couragously go and open the door. \nPlease choose A, B, or C "
  );
  if (alone.toLowerCase() == "c") {
      alert( name + " , WOW! You are very couragous! Sadly your bravery comes to an end when you find that it was just your friends pranking you. You guys go take a walk.");
  } else if (alone.toLowerCase() == "b") {
      alert( name + " , too bad because they was your friends pulling a prank on you. You actually fell for it! You guys go take a walk.");
  } else if (alone.toLowerCase() == "a") {
      alert( name + " , too bad because it was your friends just pulling a prank on you. You actually fell for it! You guys decide take a walk.");
  } else {
    checkAlone();
  }


  var rumors = prompt(
      "Your friends tell you that rumors are circulating about 'Chain-Saw Billy' the new boogyman around town. He catches his victems and tortures them until death with his chainsaw. You and your buds hear a yell then a chainsaw starting up! \nYou look back and see 'Chain-Saw Billy' cutting off a mans head... He looks at you and comes sprinting after you. What do you do? \nA) Run away screaming your head off. \nB) Stand your ground and try to protect you and your friends. \nC) Go try to get help."
  );

  function checkRumors(){
    if(rumors.toLowerCase() == "a" || rumors.toLowerCase() == "b" || rumors.toLowerCase() == "c"){
      alert("Please respond with 'a', 'b', or 'c'!");
      checkRumors();
    }
  }
  if (rumors.toLowerCase() == "b") {
      alert("Boy! You have the guts!");
  } else if(rumors.toLowerCase() == "a" || rumors.toLowerCase() == "c"){
      alert("Your cowardliness doesn't save you! He gets you! Sorry!");
      done();
      return;
  } else {
    checkRumors();
  }

  function checkRunAfter(){
    if (runafter.toLowerCase() !== "a" || runafter.toLowerCase() !== "b" || runafter.toLowerCase() !== "c"){
      alert("Please respond with 'a', 'b', or 'c'!");
      checkRunAfter();
    }
  }
  var runafter = prompt(
      "You run home sprint up the stairs, jump under the bed and hide. You hear 'Chain-Saw Billy' capture your friend. What do you do? \nA) Get tired of all this stuff and suicide out the window. \nB) Choke yourself. \nC) Try to protect yourself with anything you can find."
  );

  if (runafter.toLowerCase() == "c") {
      alert("Sorry, you get killed in inexplicable ways");
  } else if (runafter.toLowerCase() == "a" || runafter.toLowerCase() == "b"){
      alert("You'd kill yourself?! Wow must be depressed! Please call the local Suicide Hotline!");
  } else {
    checkRunAfter();
  }

    function done(){
      alert("Thanks for playing this Adventure Game!");
    }

}
