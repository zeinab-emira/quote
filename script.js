

  let quoteContainer = JSON.parse(localStorage.getItem("AllQuoute")) ?? [
    {
      quote:
        "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
      name: "-Marilyn Monroe",
    },
    {
      quote: "“Don't cry because it's over, smile because it happened.”",
      name: "-Dr. Seuss",
    },
    {
      quote: "“Be yourself; everyone else is already taken.”",
      name: " -Oscar Wilde",
    },
    {
      quote:
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      name: "-Albert Einstein",
    },
    {
      quote:
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      name: " -Bernard M. Baruch",
    },
    {
      quote:
        "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
      name: "-Dr. Seuss",
    },
    {
      quote: "“A room without books is like a body without a soul.”",
      name: "-Marcus Tullius Cicero",
    },
    {
      quote: "“So many books, so little time.”",
      name: "-Frank Zappa",
    },
    {
      quote: "“You only live once, but if you do it right, once is enough.”",
      name: "-Mae West",
    },
    {
      quote: "“Be the change that you wish to see in the world.”",
      name: "-Mahatma Gandhi",
    },
    {
      quote:
        "“A friend is someone who knows all about you and still loves you.”.”",
      name: "-Elbert Hubbard",
    },
    {
      quote: "“Always forgive your enemies; nothing annoys them so much.”.”",
      name: "-Oscar Wilde",
    },
    {
      quote:
        "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
      name: "-Mahatma Gandhi",
    },
    {
      quote: "“Without music, life would be a mistake.”",
      name: "-Friedrich Nietzsche",
    },
    {
      quote:
        "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
      name: "-Ralph Waldo Emerson",
    },
    {
      quote:
        "“It is better to be hated for what you are than to be loved for what you are not.”",
      name: "-Gide",
    },
  ];
  let randomQuote = "";
  let currentQuote = "";
  let displayQuote = [];
  let currentColor = "";
  let userQuote = document.getElementById("userQuote");
  let userName = document.getElementById("userName");
  let modalCloseBtn = document.getElementById("closeBtn");
  let getQuote = document.querySelectorAll(".quote");
  function newQuote() {
    if (displayQuote.length == quoteContainer.length) {
      displayQuote = [];
    }
    do {
      randomQuote = Math.floor(Math.random() * quoteContainer.length);
    } while (randomQuote == currentQuote || displayQuote.includes(randomQuote));
    currentQuote = randomQuote;
    displayQuote.push(randomQuote);
    document.getElementById("quoteOutput").innerHTML =
      quoteContainer[randomQuote].quote;
    document.getElementById("arthorOutput").innerHTML =
      quoteContainer[randomQuote].name;
    
  }
  

  
  modalCloseBtn.addEventListener("click", function () {
    modal.classList.replace("d-block", "d-none");
    clear();
  });
  
 