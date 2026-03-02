
console.log("===== Question 1 =====");

let scores = [95, 85, 75, 65, 50]; // Testing all grade ranges

scores.forEach(score => {

    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score <= 89):
            grade = "B";
            break;
        case (score >= 70 && score <= 79):
            grade = "C";
            break;
        case (score >= 60 && score <= 69):
            grade = "D";
            break;
        default:
            grade = "F";
    }

    let result = score >= 60 ? "Passed" : "Failed";

    console.log(`Score: ${score} | Grade: ${grade} | Result: ${result}`);
});




console.log("\n===== Question 2 =====");

// Type Conversion
let stringValue = "25";
let numberValue = Number(stringValue);

console.log(`Original Value: ${stringValue} | Type: ${typeof stringValue}`);
console.log(`Converted Value: ${numberValue} | Type: ${typeof numberValue}`);

// Truthy & Falsy Testing
let testValues = [0, "", "hello", null, undefined, NaN];

testValues.forEach(value => {
    if (value) {
        console.log(`Value: ${value} → Truthy`);
    } else {
        console.log(`Value: ${value} → Falsy`);
    }
});




console.log("\n===== Question 3 =====");

function greetingBot(name, isMorning) {
    return isMorning && `Good morning, ${name}!` || `Hello, ${name}!`;
}

// Multiple test cases
console.log(greetingBot("Alice", true));
console.log(greetingBot("Bob", false));
console.log(greetingBot("Charlie", true));


console.log("\n===== Question 4 =====");

let post = {
    username: "coder123",
    caption: "Learning JavaScript step by step!",
    likes: 10,
    comments: ["Great post!", "Very helpful!", "Keep going!"],

    addLike() {
        this.likes++;
    }
};

// Call method multiple times to prove it works
post.addLike();
post.addLike();

console.log("Updated Likes:", post.likes);

// Object destructuring
let { username, caption } = post;

console.log("Username:", username);
console.log("Caption:", caption);



console.log("\n===== Question 5 =====");

// Spread Operator
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = [...array1, ...array2];

console.log("Combined Array:", combinedArray);


// Pattern Printing (Perfect Pyramid Shape)
console.log("\nPattern:\n");

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let spaces = "   ".repeat(rows - i);
    let stars = "*   ".repeat(i);
    console.log(spaces + stars);
}


// Countdown using while loop
console.log("\nCountdown:");

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}