"use strict";
// Q25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// 1.Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// Declare a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alien_color1 = 'green';
// Write an if statement to test whether the alien's color is green.
if (alien_color1 === 'green') {
    // If it is green, print a message that the player just earned 5 points.
    console.log('Player just earned 5 points!');
}
else {
    // If it is not green, you can optionally provide an alternative message.
    console.log('No points earned. Alien color is not green.');
}
// 2.Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.
// Declare a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alien_color = 'red';
// Write an if statement to test whether the alien's color is green.
if (alien_color === 'green') {
    // If it is green, print a message that the player just earned 5 points.
    console.log('Player just earned 5 points!');
}
else {
    // If it is not green, you can optionally provide an alternative message.
    console.log('No points earned. Alien color is not green.');
}
