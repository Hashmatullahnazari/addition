var correctAnswer = 4;

  // Define a function to check the answer
  function checkAnswer() {
    // Get the user's answer from the input field
    var userAnswer = parseInt(document.getElementById("userAnswer").value);

    // Check the answer and show a message
    if (userAnswer == correctAnswer) {
      var result = "You got it right! Good job!";
    } else {
     var result = "Sorry, that's not the correct answer. The correct answer is " + correctAnswer;
      
       // Reset the input field
    document.getElementById("userAnswer").value = "";
      
    }
      document.getElementById("result").innerHTML = result;
  }



// // Define the correct answer
// var correctAnswer = 4;

// // Define a counter for the number of incorrect answers
// var incorrectAnswerCount = 0;

// // Define a maximum number of incorrect answers before resetting the error message
// var maxIncorrectAnswers = 3;

// // Define a function to check the answer
// function checkAnswer() {
//   // Get the user's answer from the input field
//   var userAnswer = parseInt(document.getElementById("userAnswer").value);

//   // Check the answer and show a message
//   if (userAnswer == correctAnswer) {
//     var result = "You got it right! Good job!";
//   } else {
//     // Increment the incorrect answer counter
//     incorrectAnswerCount++;

//     // Check if the user has reached the maximum number of incorrect answers
//     if (incorrectAnswerCount >= maxIncorrectAnswers) {
//       // If the user has reached the maximum number of incorrect answers, reset the error message
//       var result = "Sorry, that's not the correct answer. Please try again.";
//     } else {
//       // If the user has not reached the maximum number of incorrect answers, show the same error message again
//       var result = document.getElementById("result").innerHTML;
//     }

//     // Reset the input field
//     document.getElementById("userAnswer").value = "";
//   }
//   document.getElementById("result").innerHTML = result;
// }
