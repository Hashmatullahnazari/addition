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
