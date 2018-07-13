console.log("You are so great at JavaScript");
// Create a function called `go` that takes 2 arguments: 
// 1. direction (forwards, backwards, etc.)
// 1. speed (mph).

// The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.

function go(direction, speed) {
    if (speed > 75) {
            console.log("The car is moving " + direction + "," + " at " + speed );
            console.log("SLOW DOWN!");
    }
        else {
            console.log("The car is moving " + direction + "," + " at " + speed );
        }
    }
go ("forward", "30");
go ("forward", "85");
// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!