function game() {
  'use strict';

  var name = prompt("What is your name?").toLowerCase().trim();

  function checkName() {
    while (name === "" || name === null) {
      alert("Please give a valid name!");
      name = prompt("What is your name?").toLowerCase().trim();
    }

    // Check the entered name
    checkName();

    alert("Welcome to the game " + name + ", may the odds ever be in your favor!");

    alert("This is an Adventure Game, It goes as you please, as you desire. \nLET US START!");

    function checkMyChoice() {
      while (myChoice.toLowerCase != "yes" || myChoice.toLowerCase != "no") {
        alert("Please answer 'yes' or 'no'");
        myChoice = prompt("So, do you like scary stories, " + name + "?").toLowerCase().trim();
      }
    }

    var myChoice = prompt("So, do you like scary stories, " + name + "?").toLowerCase().trim();

    if (myChoice === "yes") {
      alert("So we depart on our journey...");
    } else if (myChoice === "no") {
      alert("This is gonna be FUN! Haha!");
    } else {
      checkMyChoice();
    }

    function checkAlone() {
      while (alone != "a" || alone != "b" || alone != "c") {
        alert("Please respond with 'a', 'b', or 'c'!");
        alone = prompt(
          "You're at home, alone, watching the TV and hear a knock on the door. You hear more banging on the door. Your heatbeat speeds up and you're very scared. What do you do? \nA) Ignore the knocking nervously. \nB) Start screaming your head off. \nC) Couragously go and open the door. \nPlease choose A, B, or C "
        ).toLowerCase().trim();
      }
    }

    var alone = prompt(
      "You're at home, alone, watching the TV and hear a knock on the door. You hear more banging on the door. Your heatbeat speeds up and you're very scared. What do you do? \nA) Ignore the knocking nervously. \nB) Start screaming your head off. \nC) Couragously go and open the door. \nPlease choose A, B, or C "
    ).toLowerCase().trim();

    if (alone === "c") {
      alert(name + " , WOW! You are very couragous! Sadly your bravery comes to an end when you find that it was just your friends pranking you. You guys go take a walk.");
    } else if (alone === "b") {
      alert(name + " , too bad because they was your friends pulling a prank on you. You actually fell for it! You guys go take a walk.");
    } else if (alone === "a") {
      alert(name + " , too bad because it was your friends just pulling a prank on you. You actually fell for it! You guys decide take a walk.");
    } else if (alone === "" || alone === undefined) {
      checkAlone();
    } else {
      checkAlone();
    }

    function checkRumors() {
      if (rumors != "a" || rumors != "b" || rumors != "c") {
        alert("Please respond with 'a', 'b', or 'c'!");
        rumors = prompt(
          "Your friends tell you that rumors are circulating about 'Chain-Saw Billy' the new boogyman around town. He catches his victems and tortures them until death with his chainsaw. You and your buds hear a yell then a chainsaw starting up! \nYou look back and see 'Chain-Saw Billy' cutting off a mans head... He looks at you and comes sprinting after you. What do you do? \nA. Run away screaming your head off. \nB. Stand your ground and try to protect you and your friends. \nC. Go try to get help."
        ).toLowerCase().trim();
      }
    }

    var rumors = prompt(
      "Your friends tell you that rumors are circulating about 'Chain-Saw Billy' the new boogyman around town. He catches his victems and tortures them until death with his chainsaw. You and your buds hear a yell then a chainsaw starting up! \nYou look back and see 'Chain-Saw Billy' cutting off a mans head... He looks at you and comes sprinting after you. What do you do? \nA. Run away screaming your head off. \nB. Stand your ground and try to protect you and your friends. \nC. Go try to get help."
    ).toLowerCase().trim();

    if (rumors === "b") {
      alert("Boy! You have the guts!");
    } else if (rumors === "a" || rumors === "c") {
      alert("Your cowardliness doesn't save you! He gets you! Sorry! \n \n BUT, you still manage to excape him!");
    } else {
      checkRumors();
    }

    function checkRunAfter() {
      if (runAfter != "a" || runAfter != "b" || runAfter != "c") {
        alert("Please respond with 'a', 'b', or 'c'!");
        runAfter = prompt(
          "You run home sprint up the stairs, jump under the bed and hide. You hear 'Chain-Saw Billy' capture your friend. What do you do? \nA) Get tired of all this stuff and suicide out the window. \nB) Choke yourself. \nC) Try to protect yourself with anything you can find."
        ).toLowerCase().trim();
      }
    }

    var runAfter = prompt(
      "You run home sprint up the stairs, jump under the bed and hide. You hear 'Chain-Saw Billy' capture your friend. What do you do? \nA) Get tired of all this stuff and suicide out the window. \nB) Choke yourself. \nC) Try to protect yourself with anything you can find."
    ).toLowerCase().trim();

    if (runAfter === "c") {
      alert("Sorry, you get killed in inexplicable ways");
    } else if (runAfter === "a" || runAfter === "b") {
      alert("You'd kill yourself?! Wow must be depressed! Please call the local Suicide Hotline!");
    } else {
      checkRunAfter();
    }

    function done() {
      alert("Thanks for playing this Adventure Game!");
    }

  }
