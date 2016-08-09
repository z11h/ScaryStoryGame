function game() {
  'use strict';

  var promp = window.prompt;
  var alert = window.alert;

  var name = prompt("What is your name?").toLowerCase().trim();

  var positive = ["yes", "yep", "yeah", "yess", "y", "sure"];
  var reject = ["no", "nah", "noo", "nope", "n", "nahh", "never"];

  function checkName() {
    while (name === "" || name === null) {
      alert("Please give a valid name!");
      name = prompt("What is your name?").toLowerCase().trim();
    }
  }

    // Check the entered name
    checkName();

    alert("Welcome to the game " + name + ", may the odds ever be in your favor!");

    alert("This is an Adventure Game, It goes as you please, as you desire. \nLET US START!");

    function checkMyChoice() {
      while (!(positive.inclues(myChoice) || negative.includes(myChoice))) {
        alert("Please answer with a valid response!");
        myChoice = prompt("So, do you like scary stories, " + name + "?").toLowerCase().trim();
      }
    }

    var myChoice = prompt("So, do you like scary stories, " + name + "?").toLowerCase().trim().replace('!', '');

     if (positive.inclues(myChoice)) {
      alert("So we depart on our journey...");
    } else if (negative.includes(myChoice)) {
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

    switch (alone) {
      case "a":
      case "b":
        alert(name + " , too bad because they was your friends pulling a prank on you. You actually fell for it! You guys decide to go take a walk.");
        break;
      case "c":
        alert(name + " , WOW! You're very couragous! Sadly your bravery comes to an end when you find that it was just your friends pranking you. You guys decide to go take a walk.");
        break;
      default:
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

    switch (rumors) {
      case a:
      case c:
        alert("Your cowardliness doesn't save you! He gets you! Sorry! \nBUT, you still manage to excape him!");
        break;
      case 'b':
        alert("Boy! You have the guts!");
        break;
      default:
      checkRumors();
    }

    function checkRunAfter() {
      while (runAfter != "a" || runAfter != "b" || runAfter != "c") {
        alert("Please respond with 'a', 'b', or 'c'!");
        runAfter = prompt(
          "You run home sprint up the stairs, jump under the bed and hide. You hear 'Chain-Saw Billy' capture your friend. What do you do? \nA) Get tired of all this stuff and suicide out the window. \nB) Choke yourself. \nC) Try to protect yourself with anything you can find."
        ).toLowerCase().trim();
      }
    }

    var runAfter = prompt(
      "You run home sprint up the stairs, jump under the bed and hide. You hear 'Chain-Saw Billy' capture your friend. What do you do? \nA) Get tired of all this stuff and suicide out the window. \nB) Choke yourself. \nC) Try to protect yourself with anything you can find."
    ).toLowerCase().trim();

    switch (runAfter) {
      case 'a':
      case 'b':
        alert("You'd kill yourself?! Wow must be depressed! Please call the local Suicide Hotline!");
        break;
      case 'c':
        alert("Sorry, you get killed in inexplicable ways");
        break;
      default:
        checkRunAfter();
    }

    function done() {
      alert("Thanks for playing this Adventure Game!");
    }

  }
