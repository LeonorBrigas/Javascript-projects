// let userName = "";

// userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello`);


var answers = ["It is certain",
               "It is decidedly so",
               "Without a doubt",
               "Yes - definitely",
               "You may rely on it",
               "As I see it, yes",
               "Most likely",
               "Outlook good",
               "Yes", "Signs point to yes",
               "Don't count on it",
               "My reply is no",
               "My sources say no",
               "Outlook not so good",
               "Very doubtful",
               "Reply hazy, try again",
               "Ask again later",
               "Better not tell you now",
               "Cannot predict now",
               "Concentrate and ask again"];



window.onload = function() {
  const eight = document.getElementById("eight");
  const answer = document.getElementById("answer");
  const shake = document.getElementById("button");
  const question = document.getElementById("question");

  shake.addEventListener("click", function() {
    if (question.value.length < 1 ) {
      alert("Enter a question!");
    } else {
      eight.innerText = "";
      const num = Math.floor(Math.random() * 8 );
      answer.innerText = answers[num];
    }
  });
}


