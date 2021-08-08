const quoteAnime = document.getElementById("quote-anime"),
  quoteChar = document.getElementById("quote-character"),
  quoteText = document.getElementById("quote-text"),
  genQuoteBtn = document.getElementById("gen-quote-btn");

function randomQuote() {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((quote) => {
      quoteAnime.textContent = quote.anime;
      quoteText.textContent = quote.quote;
      quoteChar.textContent = `-${quote.character}`;
    });
}

function delayClick(obj) {
  obj.disabled = true;
  setTimeout(function () {
    obj.disabled = false;
  }, 800);
  randomQuote();
}
