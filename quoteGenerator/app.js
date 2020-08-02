// API url
const apiUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

//DOM elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quote-author');
const newQuoteBtn = document.querySelector('#new-quote');
const tweetBtn = document.querySelector('#tweet');
const loader = document.querySelector('#loader');

// // showing loading
// const showLoading = () => {
//   quoteContainer.style.visibility = 'hidden';
//   loader.hidden = false;
// }

// // complete loading
// const completeLoading = () => {
//   if (!loader.hidden) {
//     quoteContainer.style.visibility = 'visible';
//     loader.hidden = true;
//   }
// }


// Get Quote From API
const getQuote = async () => {
  // showLoading();
  try {
    // make a random nuber between 0 - 120 to pull a quote from API, because there is 120 quotes in the API endpoint
    const ranNum = Math.floor(Math.random() * 102);
    const response  = await axios.get(apiUrl);      
    quoteText.innerText = response.data.quotes[ranNum].quote;
    quoteAuthor.innerText = response.data.quotes[ranNum].author;
    console.log(quoteText.innerText.length)
    if (quoteText.innerText.length > 100) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    // completeLoading();
  } catch(error) {
    console.error(error);
  }
}

// Add click event to generate new quote to new Quote button
newQuoteBtn.addEventListener('click', getQuote);

// Tweet the quote
tweetBtn.addEventListener('click', () => {
  const quote = quoteText.innerText;
  const author = quoteAuthor.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
})

// On Load
// showLoading()
getQuote();