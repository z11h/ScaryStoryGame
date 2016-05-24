function game() {
'use strict';

  var name = prompt("What is your name?");

  function nameCheck(){
    if (name = "") {
      alert = "Please give a valid name!"
    };
  };

  alert("Welcome to the game , " + name + " may the odds ever be in your favor!");

  alert("This is an Adventure Game, It goes as you please, as you desire, LET US START!");

  var myChoice = prompt("So, do you like scary stories, " + name + "?");

  if (myChoice.toLowerCase == "yes" || myChoice.toLowerCase == "y") {
      alert("So we depart on our journey...");
  } else if (myChoice.toLowerCase() == "no" || myChoice.toLowerCase() == "n") {
      alert("This will be FUN! *evil grin* !");
  } else {
      alert("Please answer Yes(y) or No(n)")
  }

  var alone = prompt(
      "You're at home, alone, watching the TV and hear a knock on the door. You hear more banging on the door. Your heatbeat speeds up and you're very scared. What do you do?\n
      A) Ignore the knocking nervously. B) Start screaming your head off. C) Couragously go and open the door. Please choose A, B, or C "
  );

  if (alone.toLowerCase() == "c") {
      alert(name + " , WOW! You are very couragous! Sadly your bravery comes to an end when you find that it was just your friends pranking you. You guys go take a walk.");
  } else if (alone.toLowerCase() == "a" || alone.toLowerCase() == "b") {
      alert(name + " , too bad, because it actually was your friends just pulling a prank on you.
      You actually fell for it! You guys decide take a walk.");
  };


  var rumors = prompt(
      "Your friends tell you that rumors are circulating about 'Chain-Saw Billy' the new boogyman around town.\n
      He catches his victems and tortures them till death with his chainsaw. You and your buds hear a yell then a chainsaw starting up!\n
      You look back and see 'Chain-Saw Billy' cutting off a mans' head. He comes sprinting after you. What do you do?\n
      A) Run away screaming your head off.\n
      B) Stand your ground and try to protect you and your friends.\n
      C) Go try to get help.\n"
  );

  if (rumors.toLowerCase() == "b") {
      alert("Boy! You have the guts!");
  } else {
      alert("Your cowardliness doesn't save you! Sorry!");
  };

  var runafter = prompt(
      "You run home sprint up the stairs, jump under the bed and hide. You hear 'Chain-Saw Billy' capture your friend. What do you do?
      A) Get tired of all this stuff and suicide out the window.
      B) Choke yourself.
      C) Try to protect yourself with anything you can find."
  );

  if (runafter.toLowerCase() == "c") {
      alert("Sorry, you get killed in inexplicable ways");
  } else {
      alert("You'd kill yourself?! Wow must be depressed!");
  };

  function done(){
      alert("Thanks for playing the Scary Story Game!");
    };
  done();
}
