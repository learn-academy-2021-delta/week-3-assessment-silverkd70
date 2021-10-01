// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//pseudo code

// declare a constant variable
// use the number perameter in the function action
// use conditionals and a for loop with a push method and arguments
// declare an array and assign values for array index 0 and 1
// input numbers less than 2 will return a message to enter a larger number
// for loop method to start at index 2 and iterate to end.
// use .push and .lenght argument to add numbers to the array usinng Fibonacci sequence math
// return the new array string value and use .slice to start at index of [1] to display expected output

// a) Create a test with expect statements for each of the variables provided.

describe('fibSeq', (number) => {
    test('takes in a number greater than 2 and returning an array of numbers the same number value length containing numbers in a sequence of the previous two numbers added together', () => {
        expect(fibSeq(6)).toEqual([1, 1, 2, 3, 5, 8]) 
        expect(fibSeq(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]) 
    })
})

//test failed
    //ReferenceError: fibSeq is not defined
//rewriting code to define fibSeq, then running second test

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.

// First, this one was not easy for me, because I took way too long trying to figure out the best way for this code to match my pseude code thoughts.  I researched through notes and online and was really trying not to use examples that used methods that we have not learned yet.  I tried .math and then determined that I should stick with a for loop and see if the push method on the array length could do the same math increment on the previous two arrays while using iteration.  At first i was getting too many numbers until I changed the i to equal 2.  Before then, I did not have the array declared and tried to use someone's online example of if (num === 1), return arr = [0, 1].  That mess with my head, so I declared the array = [] the set the arr[0] and arr [1].  The only other thing I could not figure out was how to get the array to return without including 0 in the array.  the .slice(1) was my quick fix.  Can't wait to see the solution during the review.


fibSeq = num => {
    if (num <= 2) {
    return 'Enter a number larger than 2'
    } else {
    let arr = []
  
    arr[0] = 0
    arr[1] = 1
    for (let i = 2; i <= num; i++) {
      arr.push(arr[arr.length - 1] + arr[arr.length -2])
    }
    return arr.slice(1)

  }
  

  }



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

//pseudo code

// declare a function
// use the array perameter in the function action
// use filter method to to identify only numbers within the array.  
// use if statement on numbers only and use sort built-in method to sort from least to greatest
// return only the only odd numbers using modulo operator

// a) Create a test with expect statements for each of the variables provided.

describe('oddsOnly', (array) => {
    test('filters values in an array and identifies numbers only then sorts the numbers from least to greatest and only returns the odd numbers in the array only', () => {
        expect(oddsOnly([4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"])).toEqual([-9, 7, 9, 199]) 
        expect(oddsOnly(["hello", 7, 23, -823, false, 78, null, "67", 6, "number"])).toEqual([-823, 7, 23]) 
    })
})

//test failed
    //ReferenceError: oddsOnly is not defined
//rewriting code to define oddsOnly, then running second test

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

// I cannot get my function to use the sort method properly in order to get the expected output.  No matter what I do to change the array.sort my output will either remove the negative number or output the negative number at the end of the array order.  I wasted a lot of time on this one and I am out of research options that can assist me.  Hopefully the review will point out what I am doing wrong. This function does ot pass the Jest test.

const oddsOnly = (array) => {
    return array.filter(value => {
      if (typeof(value) === 'number') {
        array.sort((a, b) => a < b)
        return value % 2 !== 0
      }
    })
    }


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

//pseudo code

// declare a high order function .forEach
// use the array perameter in the function action
// declare a variable to identify index [] positions
// use condition statements to define zero base in array index and set that number to set itself at index position zero
// use else condition for the output of the other index numbers to add itself to the next index postion number and return the total value on the next index postion and continue executing the forEach callback function for each number in the array on the return variable call

// a) Create a test with expect statements for each of the variables provided.

describe('sumACC', (array) => {
    test('declares a variable to set index position in an array and runs a forEach method on each number in each index position to either return its own number total or add itself to the next index number until each number in the array has been added together', () => {
        expect(sumAcc([2, 4, 45, 9])).toEqual([2, 6, 51, 60]) 
        expect(sumAcc([0, 7, -8, 12])).toEqual([0, 7, -1, 11]) 
        expect(sumAcc([])).toEqual([])
    })
})

//test failed
    //ReferenceError: sumAcc is not defined
//rewriting code to define sumAcc, then running second test

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.

// The test PASSED.  I did have to research a bit on this one and learn more about the forEach high order function, but I figured out the if and else then realized I needed to declare accum = [] in order to get the third expected outcome.

const sumAcc = (array) => {
    let accum = [];
    array.forEach((num, index) => {
       if(index === 0){
          accum[index] = num;
       }else{
          accum[index] = num + accum[index - 1];
       }
    });
    return accum;
  }
